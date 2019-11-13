import React from "react";
import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";

import { withRouter } from "next/router";
import { getCurrentUrl } from "lib";

import { LOCAL_ID } from "constants/env";
import { LOCALS } from "constants/local";
import { TITLE, DESCRIPTION } from "constants/browse";

import css from "pages/local/browse/places/PlaceBrowseComponents/PlaceBrowseContent.scss";

class Browse extends React.Component {
  render() {

    const {router, browsePagesData} = this.props;

    console.log(browsePagesData);

    return (
      <MainLayout route={router} pageTitle={TITLE}>
        <FeatureHeader
          titleClassName={css.featureTitle}
          title={TITLE}
          description={DESCRIPTION}
        />
        <div id="main" role="main">
          <p>Here's where the browse categories will live</p>
        </div>
      </MainLayout>
    );
  }
}

Browse.getInitialProps = async () => {

  const browsePagesData = LOCALS[LOCAL_ID].browseRoutes;
  return {
    browsePagesData: browsePagesData
  };
};

export default withRouter(Browse);
