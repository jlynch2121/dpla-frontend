import React from "react";

import MainLayout from "components/MainLayout";
import PlaceBrowseContent from "pages/local/browse/places/PlaceBrowseComponents";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import getLocalBreadcrumbs from "lib/getLocalBreadcrumbs";
import { PLACES } from "constants/il-places";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "pages/local/browse/browse.scss";

class PlaceBrowse extends React.Component {
  render() {

    const { places, pageData, url } = this.props;

    const breadcrumbs = getLocalBreadcrumbs(pageData);

    return (
      <MainLayout route={url} pageTitle={pageData.title}>
        <BreadcrumbsModule
          breadcrumbs={breadcrumbs}
          route={pageData.parentDir}
        />
        <div id="main" role="main">
          <h1 className={css.header}>{pageData.title}</h1>
          <PlaceBrowseContent places={places} />
        </div>
      </MainLayout>
    );
  }
}

PlaceBrowse.getInitialProps = async context => {
  const asPath = context.asPath;
  const browseRoutes = LOCALS[LOCAL_ID]["browseRoutes"];
  const pageData = browseRoutes[asPath];
  const places = PLACES.map((place, i) =>
    ({
      imageId: PLACES[i].imageId,
      name: PLACES[i].city,
      searchTerm: PLACES[i].searchTerm,
      description: PLACES[i].description
    })
  );
  return {
    places: places,
    pageData: pageData
  };
};

export default PlaceBrowse;
