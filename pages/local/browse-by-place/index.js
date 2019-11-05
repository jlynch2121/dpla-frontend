import React from "react";

import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";
import PlaceBrowseContent from "pages/local/browse-by-place/PlaceBrowseComponents";

import { TITLE, DESCRIPTION } from "constants/browse-by-place";
import { LOCALS } from "constants/local";
import { SITE_ENV, LOCAL_ID } from "constants/env";
import { PLACES } from "constants/il-places";

import css from "pages/local/browse-by-place/PlaceBrowseComponents/PlaceBrowseContent.scss";
import contentCss from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

const PlaceBrowse = ({ places, url }) =>
  <MainLayout route={url} pageTitle={TITLE}>
    <FeatureHeader
      titleClassName={css.featureTitle}
      title={TITLE}
      description={DESCRIPTION}
    />
    <div className={`${utils.container} ${contentCss.sidebarAndContentWrapper}`}>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <p>Menu goes here</p>
        </div>
        <div className="col-xs-12 col-md-7">
          <div id="main" role="main">
            <PlaceBrowseContent places={places} />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>;

PlaceBrowse.getInitialProps = ({ query, req }) => {

  const places = PLACES.map((place, i) =>
    ({
      imageId: PLACES[i].imageId,
      name: PLACES[i].city,
      searchTerm: PLACES[i].searchTerm,
      description: PLACES[i].description
    })
  );
  return { places };
};

export default PlaceBrowse;
