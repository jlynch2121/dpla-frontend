import React from "react";
import Link from "next/link";

import { addCommasToNumber } from "lib";

import utils from "stylesheets/utils.scss";
import browseCss from "pages/local/browse/browse.scss";
import formatCss from "./FormatBrowseContent.scss";

const Format = ({ name, value, itemCount, facetName, icon, index }) =>

  <div>
    <div className={formatCss.imageWrapper}>
      <Link prefetch href={`/search?${facetName}="${value}"`} as={`/search?${facetName}="${value}"`}>
        <a
          className={`${browseCss.imageLink} internalItemLink`}
          title={name}
          aria-hidden
        >
          <img
            src={icon}
            className={browseCss.image}
            alt={name}
          />
        </a>
      </Link>
    </div>
    <Link href={`/search?${facetName}="${value}"`}>
      <a className={formatCss.formatLink}>
        <span className={formatCss.name}>{name}</span>
        <span className={formatCss.itemCount}>
          {addCommasToNumber(itemCount)}
        </span>
      </a>
    </Link>
  </div>;

const mapFormatsToComponents = formats =>
  formats.map((format, index) =>
    <li key={`format_${format.value}`}
      className={formatCss.browseCategory}>
      <Format
        name={format.name}
        value={format.value}
        itemCount={format.itemCount}
        facetName={format.facet}
        icon={format.icon}
        index={index}
      />
    </li>
  );

const FormatBrowseContent = ({ route, formats }) =>
  <div className={`${utils.container} ${browseCss.browse}`}>
    <div className={`row`}>
      <ul className={`${formatCss.browseCategories} col-xs-12`}>
        {mapFormatsToComponents(formats)}
      </ul>
    </div>
  </div>;

export default FormatBrowseContent;
