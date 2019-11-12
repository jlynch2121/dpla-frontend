import React from "react";

import MainLayout from "components/MainLayout";
import PlaceBrowseContent from "pages/local/browse/places/PlaceBrowseComponents";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import { TITLE, DESCRIPTION } from "constants/browse";
import { BROWSE_PAGES } from "constants/il-browse-pages-data";
import { PLACES } from "constants/il-places";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "pages/local/browse/places/PlaceBrowseComponents/PlaceBrowseContent.scss";
import contentCss from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

class PlaceBrowse extends React.Component {
  render(){

    const { places, pageData, url } = this.props;

    var breadcrumbs = [];

    if (!pageData.isTopLevel){
      breadcrumbs.push({
        title: pageData.category,
        url: "/local" + pageData.parentDir,
        as: pageData.parentDir
      },
      {
        title: pageData.title
      });
    };

    return (
      <MainLayout route={url} pageTitle={pageData.title}>
        <BreadcrumbsModule
          breadcrumbs={breadcrumbs}
          route={pageData.parentDir}
        />
        <div
          className={`${utils.container} ${contentCss.sidebarAndContentWrapper}`}
        >
          <div className="row">
            <div className="col-xs-12 col-md-7">
              <div id="main" role="main">
                <div className={contentCss.content}>
                  <h1>Places</h1>
                </div>
                <PlaceBrowseContent places={places} />
              </div>
            </div>
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
