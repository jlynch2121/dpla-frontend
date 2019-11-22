import React from "react";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import ContributorBrowseContent from "pages/local/browse/contributors/ContributorBrowseComponents";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import { getCurrentUrl } from "lib";
import getLocalBreadcrumbs from "lib/getLocalBreadcrumbs";
import { API_ENDPOINT } from "constants/items";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

class ContributorBrowse extends React.Component {
  render(){

    const {contributors, url, googleMap, pageData } = this.props;

    const breadcrumbs = getLocalBreadcrumbs(pageData);
    
    return(
      <div>
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
              <ContributorBrowseContent contributors={contributors} googleMap={googleMap} />
            </div>
          </div>
        </MainLayout>
      </div>
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
