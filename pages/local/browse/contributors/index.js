import React from "react";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import ContributorBrowseContent from "pages/local/browse/contributors/ContributorBrowseComponents";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import { getCurrentUrl } from "lib";
import { API_ENDPOINT } from "constants/items";
import { TITLE, DESCRIPTION } from "constants/browse";
import { BROWSE_PAGES } from "constants/il-browse-pages-data";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "pages/local/browse/contributors/ContributorBrowseComponents/ContributorBrowseContent.scss";
import contentCss from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

class ContributorBrowse extends React.Component {
  render(){

    const {contributors, url, googleMap, pageData } = this.props;

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
    return(
      <MainLayout route={url} pageTitle={pageData.title}>
        <BreadcrumbsModule
          breadcrumbs={breadcrumbs}
          route={pageData.parentDir}
        />
          <div className={`${utils.container} ${contentCss.sidebarAndContentWrapper}`}>
            <div className="row">
              <div className="col-xs-12 col-md-7">
                <div id="main" role="main">
                  <div className={contentCss.content}>
                    <h1>Contributors</h1>
                  </div>
                  <ContributorBrowseContent contributors={contributors} googleMap={googleMap} />
                </div>
              </div>
            </div>
          </div>
      </MainLayout>
    );
  }
}

ContributorBrowse.getInitialProps = async ({ asPath, query, req }) => {
  const path = asPath;
  const browseRoutes = LOCALS[LOCAL_ID]["browseRoutes"];
  const pageData = browseRoutes[path];
  const currentUrl = getCurrentUrl(req);
  let apiQuery = "";
  let facetName = "";
  let linkParam = "";
  let googleMap = null;

  apiQuery = `${currentUrl}${API_ENDPOINT}?facets=dataProvider&provider.name=${LOCALS[
    LOCAL_ID
  ].provider}`;
  facetName = "dataProvider";
  linkParam = "provider";

  if (LOCALS[LOCAL_ID].hasMap){
    googleMap = LOCALS[LOCAL_ID].googleMapSpecs;
  }

  const res = await fetch(apiQuery);
  const json = await res.json();
  const contributors = json.facets[facetName].terms.map(contributor => ({
    name: contributor.term,
    facet: linkParam,
    itemCount: contributor.count
  }));
  return { contributors, googleMap, pageData };
};

export default ContributorBrowse;
