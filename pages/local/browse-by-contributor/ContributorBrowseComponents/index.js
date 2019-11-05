import React from "react";
import Link from "next/link";

import { addCommasToNumber } from "lib";

import utils from "stylesheets/utils.scss";
import css from "./ContributorBrowseContent.scss";

const Contributor = ({ name, itemCount, facetName, index }) =>
  <Link href={`/search?${facetName}="${name}"`}>
    <a className={css.contributorLink}>
      <span className={css.name}>{name}</span>
      <span className={css.itemCount}>
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

const ContributorMap = ({ src, width, height}) =>
  <div className={`${css.contributorMap}`}>
    <iframe
      src={`${src}`}
      width={`${width}`}
      height={`${height}`}>
    </iframe>
  </div>;

const ContributorBrowseContent = ({ route, contributors, googleMap }) =>
  <div className={css.contributorBrowse}>
    <ul>
      {mapContributorsToComponents(contributors)}
    </ul>
    {(googleMap != null) &&
      <ContributorMap
        src={googleMap.src}
        width={googleMap.width}
        height={googleMap.height}
      />}
  </div>;

export default ContributorBrowseContent;
