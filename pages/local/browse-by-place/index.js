import React from "react";

import MainLayout from "components/MainLayout";
import FeatureHeader from "shared/FeatureHeader";
import PlaceBrowseContent from "pages/local/browse-by-place/PlaceBrowseComponents";
import Sidebar from "components/MainLayout/components/shared/LocalSidebar.js";

import { TITLE, DESCRIPTION } from "constants/browse";
import { BROWSE_PAGES } from "constants/il-browse-pages-data";
import { PLACES } from "constants/il-places";

import css from "pages/local/browse-by-place/PlaceBrowseComponents/PlaceBrowseContent.scss";
import contentCss from "stylesheets/content-pages.scss";
import utils from "stylesheets/utils.scss";

const PlaceBrowse = ({ places, url }) =>
  <MainLayout route={url} pageTitle={"Browse by Place"}>
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
          activePage={"/browse-by-place"}
        />
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
  </MainLayout>;

PlaceBrowse.getInitialProps = ({ query, req }) => {

  const places = PLACES.map((place, i) =>
    ({
      imageId: PLACES[i].imageId,
      name: PLACES[i].city,
      searchTerm: PLACES[i].searchTerm,
      description: PLACES[i].description
    })
  );
  return { places };
};

export default PlaceBrowse;
