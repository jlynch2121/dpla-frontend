import React from "react";
import Link from "next/link";

import { addCommasToNumber } from "lib";

import utils from "stylesheets/utils.scss";
import css from "./PlaceBrowseContent.scss";

const Place = ({ image, name, searchTerm, index, description }) =>
  <Link href={`/search?location=${searchTerm}`}>
    <a className={css.placeLink}>
      <img src={`${image}`}/>
      <span className={css.name}>{name}</span>
      <p>{description}</p>
    </a>
  </Link>;

const mapPlacesToComponents = places =>
  places.map((place, index) =>
    <li key={`p_${place}`}>
      <Place
        image={place.image}
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
      <PlaceBrowseMap/>
      <ul className={`${css.places} col-xs-12`}>
        {mapPlacesToComponents(places)}
      </ul>
    </div>
  </div>;

export default PlaceBrowseContent;
