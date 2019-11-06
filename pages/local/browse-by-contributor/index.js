import React from "react";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import Sidebar from "components/MainLayout/components/shared/LocalSidebar.js";
import FeatureHeader from "shared/FeatureHeader";
import ContributorBrowseContent from "pages/local/browse-by-contributor/ContributorBrowseComponents";

import { getCurrentUrl } from "lib";
import { API_ENDPOINT } from "constants/items";
import { TITLE, DESCRIPTION } from "constants/browse";
import { BROWSE_PAGES } from "constants/il-browse-pages-data";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "pages/local/browse-by-contributor/ContributorBrowseComponents/ContributorBrowseContent.scss";
import contentCss from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

const ContributorBrowse = ({ contributors, url, googleMap }) =>
    <MainLayout route={url} pageTitle={"Browse by Contributor"}>
        <FeatureHeader
          titleClassName={css.featureTitle}
          title={TITLE}
          description={DESCRIPTION}
        />
        <div className={`${utils.container} ${contentCss.sidebarAndContentWrapper}`}>
          <div className="row">
            <Sidebar
              className={contentCss.sidebar}
              items={BROWSE_PAGES}
              activePage={"/browse-by-contributor"}
            />
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

ContributorBrowse.getInitialProps = async ({ query, req }) => {
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
  return { contributors, googleMap };
};

export default ContributorBrowse;
