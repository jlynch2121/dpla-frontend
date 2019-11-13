import React from "react";
import Link from "next/link";

import utils from "stylesheets/utils.scss";
import browseCss from "pages/local/browse/browse.scss";
import placeCss from "./PlaceBrowseContent.scss";

const Place = ({ imageId, name, searchTerm, index, description }) =>
  <div>
    <div className={placeCss.imageWrapper}>
      <Link href={`/search?location=${searchTerm}`}>
        <a
          className={`${placeCss.placeImageLink} internalItemLink`}
          title={name}
          aria-hidden
        >
          <img
            src={`http://idhh.dp.la/thumb/${imageId}`}
            className={placeCss.image}
            alt=""
          />
        </a>
      </Link>
    </div>
    <div className={placeCss.textWrapper}>
      <Link href={`/search?location=${searchTerm}`}>
        <a className={placeCss.placeLink}>
          <span className={placeCss.name}>{name}</span>
        </a>
      </Link>
      <p className={placeCss.descriptionText}>{description}</p>
    </div>
  </div>;

const mapPlacesToComponents = places =>
  places.map((place, index) =>
    <li
      key={`pl_${index}`}
      className={placeCss.place}
    >
      <Place
        imageId={place.imageId}
        name={place.name}
        searchTerm={place.searchTerm}
        index={index}
        description={place.description}
      />
    </li>
  );

const PlaceBrowseContent = ({ route, places }) =>
  <div className={`${utils.container} ${browseCss.browse}`}>
    <div className={`row`}>
      <ul className={`${browseCss.browseItems} col-xs-12`}>
        {mapPlacesToComponents(places)}
      </ul>
    </div>
  </div>;

export default PlaceBrowseContent;
