import React from "react";
import Link from "next/link";

import { addCommasToNumber } from "lib";

import utils from "stylesheets/utils.scss";
import css from "./PlaceBrowseContent.scss";

// new place should instantiate separate components for
// thumbnail, link title, and description
const Place = ({ imageId, name, searchTerm, index, description }) =>
  <div>
    <div className={css.imageWrapper}>
      <Link href={`/search?location=${searchTerm}`}>
        <a
          className={`${css.listItemImageLink} internalItemLink`}
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
    <div class={css.textWrapper}>
      <Link href={`/search?location=${searchTerm}`}>
        <a className={css.placeLink}>
          <span className={css.name}>{name}</span>
        </a>
      </Link>
      <p class={css.descriptionText}>{description}</p>
    </div>
  </div>;


const mapPlacesToComponents = places =>
  places.map((place, index) =>
    <li
      key={`p_${place}`}
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

const PlaceBrowseMap = () =>
  <div className={`${css.placeBrowseMap}`}>
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1LaS0G_rC1Ak87jq73_MAB5dmBIPzMuYS"
      width="640"
      height="480">
    </iframe>
  </div>;

const PlaceBrowseContent = ({ route, places }) =>
  <div className={`${utils.container} ${css.placeBrowse}`}>
    <div className={`row`}>
      <ul className={`${css.places} col-xs-12`}>
        {mapPlacesToComponents(places)}
      </ul>
    </div>
  </div>;

export default PlaceBrowseContent;
