import React from "react";
import Link from "next/link";

import utils from "stylesheets/utils.scss";
import css from "./PlaceBrowseContent.scss";

const Place = ({ imageId, name, searchTerm, index, description }) =>
  <div>
    <div className={css.imageWrapper}>
      <Link href={`/search?location=${searchTerm}`}>
        <a
          className={`${css.locationImageLink} internalItemLink`}
          title={name}
          aria-hidden
        >
          <img
            src={`http://idhh.dp.la/thumb/${imageId}`}
            className={css.image}
          />
        </a>
      </Link>
    </div>
    <div className={css.textWrapper}>
      <Link href={`/search?location=${searchTerm}`}>
        <a className={css.placeLink}>
          <span className={css.name}>{name}</span>
        </a>
      </Link>
      <p className={css.descriptionText}>{description}</p>
    </div>
  </div>;

const mapPlacesToComponents = places =>
  places.map((place, index) =>
    <li
      key={`pl_${index}`}
      className={css.place}
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
  <div className={css.placeBrowse}>
    <ul>
      {mapPlacesToComponents(places)}
    </ul>
  </div>;

export default PlaceBrowseContent;
