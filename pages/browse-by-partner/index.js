import React from "react";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";
import PartnerBrowseContent from "components/PartnerBrowseComponents";

import { getCurrentUrl } from "lib";
import { API_ENDPOINT } from "constants/items";
import { TITLE, DESCRIPTION } from "constants/browse-by-partner";
import { LOCALS } from "constants/local";
import { SITE_ENV, LOCAL_ID } from "constants/env";

import css from "components/PartnerBrowseComponents/PartnerBrowseContent.scss";

const PartnerBrowse = ({ partners, url, googleMap }) =>
  <div>
    <MainLayout route={url} pageTitle={TITLE}>
      <div id="main" role="main">
        <FeatureHeader
          titleClassName={css.featureTitle}
          title={TITLE}
          description={DESCRIPTION}
        />
        <PartnerBrowseContent partners={partners} googleMap={googleMap} />
      </div>
    </MainLayout>
  </div>;

PartnerBrowse.getInitialProps = async ({ query, req }) => {
  const currentUrl = getCurrentUrl(req);
  let apiQuery = "";
  let facetName = "";
  let linkParam = "";
  let googleMap = null;

  if (SITE_ENV === "local") {
    apiQuery = `${currentUrl}${API_ENDPOINT}?facets=dataProvider&provider.name=${LOCALS[
      LOCAL_ID
    ].provider}`;
    facetName = "dataProvider";
    linkParam = "provider";

    if (LOCALS[LOCAL_ID].hasMap){
      googleMap = LOCALS[LOCAL_ID].googleMapSpecs;
    }

  } else {
    apiQuery = `${currentUrl}${API_ENDPOINT}?facets=provider.name`;
    facetName = "provider.name";
    linkParam = "partner";
  }

  const res = await fetch(apiQuery);
  const json = await res.json();
  const partners = json.facets[facetName].terms.map(partner => ({
    name: partner.term,
    facet: linkParam,
    itemCount: partner.count
  }));
  return { partners, googleMap };
};

export default PartnerBrowse;
