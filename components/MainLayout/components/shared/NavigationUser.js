import React from "react";
import Link from "next/link";

import { PRO_BASE_URL } from "constants/env";

class NavigationUser extends React.Component {
  render() {
    const { isHome, className, css } = this.props;
    return (
      <div className={className} id={"NavigationUser"}>
        <ul className={css.links}>
          {!isHome &&
            <li>
              <Link prefetch href="/">
                <a id={"link-home"}>
                  Home
                </a>
              </Link>
            </li>}
          <li>
            <Link prefetch href="/browse-by-topic">
              <a id={"link-browse-topic"}>Browse by Topic</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/browse-by-partner">
              <a id={"link-browse-partner"}>Browse by Partner</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/exhibitions">
              <a id={"link-exhibitions"}>
                Exhibitions
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/primary-source-sets">
              <a id={"link-pss"}>
                Primary Source Sets
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/lists">
              <a id={"link-lists"}>
                My Lists
              </a>
            </Link>
          </li>
        </ul>
        <span className={css.divider} />
        <ul className={`${css.links} ${css.secondaryLinks}`}>
          <li>
            <Link prefetch as="/about" href="/about?section=about-us">
              <a id={"link-about"}>About DPLA</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/news">
              <a id={"link-news"}>News</a>
            </Link>
          </li>
        </ul>
        <span className={css.divider} />
        <ul className={`${css.links} ${css.tertiaryLinks}`}>
          <li>
            <Link href={PRO_BASE_URL}>
              <a id={"link-pro"}>DPLA Pro</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavigationUser;
