import React from "react";

import MainLayout from "components/MainLayout";
import PlaceBrowseContent from "pages/local/browse/places/PlaceBrowseComponents";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import getLocalBreadcrumbs from "lib/getLocalBreadcrumbs";
import { PLACES } from "constants/il-places";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

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
        <div className={`${utils.container} ${css.sidebarAndContentWrapper}`}>
          <div id="main" role="main">
            <div className={css.content}>
              <h1>{pageData.title}</h1>
            </div>
            <PlaceBrowseContent places={places} />
          </div>
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
