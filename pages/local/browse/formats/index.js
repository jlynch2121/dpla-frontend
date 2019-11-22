import React from "react";
import fetch from "isomorphic-fetch";

import MainLayout from "components/MainLayout";
import FormatBrowseContent from "pages/local/browse/formats/FormatBrowseComponents";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import { getCurrentUrl } from "lib";
import getLocalBreadcrumbs from "lib/getLocalBreadcrumbs";
import { API_ENDPOINT } from "constants/items";
import { LOCALS } from "constants/local";
import { LOCAL_ID } from "constants/env";

import css from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

class FormatBrowse extends React.Component {
  render(){

    const {formats, url, pageData } = this.props;

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
              <FormatBrowseContent formats={formats}/>
            </div>
          </div>
        </MainLayout>
      </div>
    );
  }
}

FormatBrowse.getInitialProps = async ({ asPath, query, req }) => {
  const path = asPath;
  const browseRoutes = LOCALS[LOCAL_ID]["browseRoutes"];
  const pageData = browseRoutes[path];
  const currentUrl = getCurrentUrl(req);

  const apiFacetQuery = `${currentUrl}${API_ENDPOINT}?facets=sourceResource.type&provider.name=${LOCALS[
    LOCAL_ID
  ].provider}`;
  const facetName = "sourceResource.type";
  const linkParam = "type";
  const icons = {
    "All Items": "/static/local/illinois/browse-images/browse-formats.png",
    image: "/static/local/illinois/format-images/image.png",
    text: "/static/local/illinois/format-images/text.png",
    "physical object": "/static/local/illinois/format-images/image.png",
    sound: "/static/local/illinois/format-images/sound.png",
    "moving image": "/static/local/illinois/format-images/moving-image.png"
  };

  const res = await fetch(apiFacetQuery);
  const json = await res.json();
  const totalItemCount = json["count"];
  const formats = json.facets[facetName].terms.map(format => ({
    name: format.term === "sound" ? format.term : format.term + "s",
    value: format.term,
    facet: linkParam,
    itemCount: format.count,
    icon: icons[format.term]
  }));

  formats.unshift({
    name: "All Items",
    value: "",
    facet: "",
    itemCount: totalItemCount,
    icon: icons["All Items"]
  });

  return { formats, pageData };
};

export default FormatBrowse;
