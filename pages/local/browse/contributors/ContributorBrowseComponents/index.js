import React from "react";
import Link from "next/link";

import { addCommasToNumber } from "lib";

import utils from "stylesheets/utils.scss";
import browseCss from "pages/local/browse/browse.scss";
import contributorCss from "./ContributorBrowseContent.scss";

const Contributor = ({ name, itemCount, facetName, index }) =>
  <Link href={`/search?${facetName}="${name}"`}>
    <a className={contributorCss.contributorLink}>
      <span className={contributorCss.name}>{name}</span>
      <span className={contributorCss.itemCount}>
        {addCommasToNumber(itemCount)}
      </span>
    </a>
  </Link>;

const mapContributorsToComponents = contributors =>
  contributors.map((contributor, index) =>
    <li key={`p_${index}`}>
      <Contributor
        name={contributor.name}
        itemCount={contributor.itemCount}
        facetName={contributor.facet}
        index={index}
      />
    </li>
  );

const ContributorMap = ({ title, src, width, height}) =>
  <div className={`${contributorCss.contributorMap}`}>
    <iframe
      title={title}
      src={src}
      width={width}
      height={height}>
    </iframe>
  </div>;

const ContributorBrowseContent = ({ route, contributors, googleMap }) =>
  <div className={`${utils.container} ${browseCss.browse}`}>
    <div className={`row`}>
      <ul className={`${browseCss.browseItems} col-xs-12`}>
        {mapContributorsToComponents(contributors)}
      </ul>
    </div>
    {(googleMap != null) &&
      <ContributorMap
        title={googleMap.title}
        src={googleMap.src}
        width={googleMap.width}
        height={googleMap.height}
      />}
  </div>;

export default ContributorBrowseContent;
