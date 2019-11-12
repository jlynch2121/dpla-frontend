import React from "react";
import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";

import { withRouter } from "next/router";
import { getCurrentUrl } from "lib";

import { LOCAL_ID } from "constants/env";
import { LOCALS } from "constants/local";
import { BROWSE_PAGES } from "constants/il-browse-pages-data";
import { TITLE, DESCRIPTION } from "constants/browse";

import css from "pages/local/browse/places/PlaceBrowseComponents/PlaceBrowseContent.scss";

const Browse = ({ router, childPagesData }) =>
  <MainLayout route={router} pageTitle={TITLE}>
    <FeatureHeader
      titleClassName={css.featureTitle}
      title={TITLE}
      description={DESCRIPTION}
    />
    <div id="main" role="main">
      <p>Here's where the browse categories will live</p>
    </div>
  </MainLayout>;

Browse.getInitialProps = async () => {
  const browsePageData = BROWSE_PAGES;

  return {
    childPagesData: browsePageData
  };
};

export default withRouter(Browse);
