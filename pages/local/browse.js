import React from "react";
import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";
import Link from "next/link";

import { withRouter } from "next/router";

import { LOCAL_ID } from "constants/env";
import { LOCALS } from "constants/local";
import { TITLE, DESCRIPTION } from "constants/browse";

import utils from "stylesheets/utils.scss";
import css from "pages/local/browse/BrowseLandingPage.scss";
import browseCss from "./browse/browse.scss";

const BrowseCategory = ( {route, imageLinkTitle, textLinkTitle, iconDir, description} ) => {
  return (
    <div>
      <div className={css.imageWrapper}>
        <Link prefetch href={"/local" + route} as={route}>
          <a
            className={`${browseCss.imageLink} internalItemLink`}
            title={imageLinkTitle}
            aria-hidden
          >
            <img
              src={iconDir}
              className={browseCss.image}
              alt={imageLinkTitle}
            />
          </a>
        </Link>
      </div>
      <div className={css.textWrapper}>
        <Link prefetch href={"/local" + route} as={route}>
          <a className={css.link}>
            <span><h1 className={css.header}>{textLinkTitle}</h1></span>
          </a>
        </Link>
        <p className={browseCss.descriptionText}>{description}</p>
      </div>
    </div>
  );
}

const BrowseCategories = ( {browseData} ) => {
  return (
    <div className={`${utils.container} ${browseCss.browse}`}>
      <div className={`row`}>
        <ul className={`${css.browseCategories} col-xs-12`}>
          {browseData.
            map(browseCategoryItem => {
              return (
                <li
                  key={`place_${browseCategoryItem.route}`}
                  className={css.browseCategory}
                >
                  <BrowseCategory
                    route={browseCategoryItem.route}
                    imageLinkTitle={browseCategoryItem.imageLinkTitle}
                    textLinkTitle={browseCategoryItem.textLinkTitle}
                    iconDir={browseCategoryItem.iconDir}
                    description={browseCategoryItem.description}
                  />
                </li>
              );
          })}
        </ul>
      </div>
    </div>
  );
};

class Browse extends React.Component {
  render() {

    const {router, browse} = this.props;

    return (
      <MainLayout route={router} pageTitle={TITLE}>
        <FeatureHeader
          titleClassName={css.featureTitle}
          title={TITLE}
          description={DESCRIPTION}
        />
        <div id="main" role="main">
          <BrowseCategories
            browseData={browse}
          />
        </div>
      </MainLayout>
    );
  }
}

Browse.getInitialProps = async () => {

  const browsePagesData = LOCALS[LOCAL_ID].browseRoutes;

  const browseRoutes = Object.keys(browsePagesData);

  const browsePages = browseRoutes.map(function(page, i) {

    const objects = Object.assign({}, i);

    objects.route = browseRoutes[i];
    objects.imageLinkTitle = browsePagesData[browseRoutes[i]].category +
      " " + browsePagesData[browseRoutes[i]].title;
    objects.textLinkTitle = browsePagesData[browseRoutes[i]].title;
    objects.description = browsePagesData[browseRoutes[i]].description;
    objects.iconDir = "static/local/illinois/browse-images/" +
      browsePagesData[browseRoutes[i]].icon;
    objects.isTopLevel = browsePagesData[browseRoutes[i]].isTopLevel;

    return objects;
  }).filter(page =>
    !page.isTopLevel
  );

  return {
    browse: browsePages
  };
};

export default withRouter(Browse);
