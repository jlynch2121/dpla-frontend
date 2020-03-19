import React from "react";
import fetch from "isomorphic-fetch";
import { withRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import MainLayout from "components/MainLayout";
import Sidebar from "components/MainLayout/components/shared/LocalSidebar.js"
import FeatureHeader from "shared/FeatureHeader";
import BreadcrumbsModule from "shared/BreadcrumbsModule";

import { getCurrentUrl } from "lib";
import getLocalBreadcrumbs from "lib/getLocalBreadcrumbs";
import getLocalSidebarRoutes from "lib/getLocalSidebarRoutes";

import { LOCAL_ID } from "constants/env";
import { LOCALS } from "constants/local";

import utils from "stylesheets/utils.scss";
import contentCss from "stylesheets/content-pages.scss";

class MarkdownPage extends React.Component {
  render() {
    const { router, pageData, content } = this.props;

    const pages = getLocalSidebarRoutes(pageData.category);

    const breadcrumbs = getLocalBreadcrumbs(pageData);

    return (
      <MainLayout
        route={router}
        pageTitle={pageData.title}
        pageDescription={pageData.description}
      >
      {breadcrumbs.length > 0 &&
        <BreadcrumbsModule
          breadcrumbs={breadcrumbs}
          route={pageData.parentDir}
        />}
      {breadcrumbs.length === 0 &&
        <FeatureHeader
          title={pageData.category}
          description={pageData.description}
        />}
        <div
          className={`${utils.container}
      ${contentCss.sidebarAndContentWrapper}`}
        >
          <div className="row">
            <Sidebar
              className={contentCss.sidebar}
              items={pages}
              activePage={router.asPath}
            />
            <div className="col-xs-12 col-md-7">
              <div id="main" role="main" className={contentCss.content}>
                <ReactMarkdown escapeHtml={false} source={content} />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

MarkdownPage.getInitialProps = async context => {
  const fullUrl = getCurrentUrl(context.req);
  const asPath = context.asPath;
  const routes = LOCALS[LOCAL_ID]["routes"];
  const pageData = routes[asPath];
  const markdownUrl = `${fullUrl}/static/local/${LOCAL_ID}/${pageData.path}`;
  const markdownResponse = await fetch(markdownUrl);
  const pageMarkdown = await markdownResponse.text();
  return {
    pageData: pageData,
    content: pageMarkdown
  };
};

export default withRouter(MarkdownPage);
