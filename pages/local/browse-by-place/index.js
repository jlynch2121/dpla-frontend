import React from "react";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";
import PlaceBrowseContent from "pages/local/browse-by-place/PlaceBrowseComponents";

import { getCurrentUrl } from "lib";
import { API_ENDPOINT } from "constants/items";
import { TITLE, DESCRIPTION } from "constants/browse-by-place";
import { LOCALS } from "constants/local";
import { SITE_ENV, LOCAL_ID } from "constants/env";
import { PLACES } from "constants/il-places";

import css from "pages/local/browse-by-place/PlaceBrowseComponents/PlaceBrowseContent.scss";

const PlaceBrowse = ({ places, url }) =>
  <div>
    <MainLayout route={url} pageTitle={TITLE}>
      <div id="main" role="main">
        <FeatureHeader
          titleClassName={css.featureTitle}
          title={TITLE}
          description={DESCRIPTION}
        />
        <PlaceBrowseContent places={places} />
      </div>
    </MainLayout>
  </div>;

PlaceBrowse.getInitialProps = ({ query, req }) => {

  const places = PLACES.map((place, i) =>
    ({
      name: PLACES[i].city,
      searchTerm: PLACES[i].searchTerm,
    })
  );
  return { places };
};

export default PlaceBrowse;
