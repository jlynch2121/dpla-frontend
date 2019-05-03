import React from "react";
import Link from "next/link";

import extractItemId from "../../../lib/extractItemId";
import ListImage from "shared/ListView/ListImage";
import { LOCALS } from "../../../constants/local";
import { LOCAL_ID } from "../../../constants/env";
import { joinIfArray, removeQueryParams, truncateString } from "../../../lib";
import css from "./More.scss";
import utils from "../../../stylesheets/utils.scss";
import { UNTITLED_TEXT } from "constants/site";

const More = ({ item }) =>
  <section className={`${css.wrapper}`}>
    <div className={`${utils.container}`}>
      <h1 className={css.header}>Explore related items in DPLA</h1>
      <ul className={css.itemList}>
        {item.more.map((item, index) => {
          item.linkHref = `/item/${item.id}`;
          return (
            <li key={`ab_${index}`} className={css.item}>
              <ListImage
                className={css.itemImage}
                item={item}
                title={item.title}
                type={item.type}
                url={item.thumbnailUrl}
                useDefaultImage={item.useDefaultImage}
              />
              <div className={css.itemInfo}>
                <p className={`hover-underline ${css.itemTitle}`}>
                  <Link href={item.linkHref}>
                    <a className={`external`}>
                      {item.title
                        ? truncateString(item.title, 150)
                        : item.title ? item.title : UNTITLED_TEXT}
                    </a>
                  </Link>
                </p>
                {(item.date || item.creator) &&
                  <p className={css.itemAuthorAndDate}>
                    {item.date && <span>{item.date.displayDate}</span>}
                    {item.date &&
                      item.date.displayDate &&
                      item.creator &&
                      <span> · </span>}
                    <span>{joinIfArray(item.creator, ", ")}</span>
                  </p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>;
export default More;
