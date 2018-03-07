import React from "react";

import HeadingRule from "shared/HeadingRule";
import Button from "shared/Button";
import { classNames, stylesheet } from "./ImageAndCaption.css";
import { classNames as utilClassNames } from "css/utils.css";

const { container } = utilClassNames;
const ImageAndCaption = ({ exhibition, route }) =>
  <figure className={classNames.wrapper}>
    <div className={[container, classNames.imageAndCaption].join(" ")}>
      <p className={classNames.exhibitionTitle}>{exhibition.title}</p>
      <div className={classNames.imageWrapper}>
        <div
          className={classNames.image}
          alt={exhibition.title}
          style={{
            backgroundImage: `url(${exhibition.thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 25%"
          }}
        />
        <div className={classNames.overlay}>
          <div className={classNames.overlayContent}>
            <h1 className={classNames.exhibitionTitle}>{exhibition.title}</h1>
            <div className={classNames.headingRule}>
              <HeadingRule color="rgba(255,255,255,0.75)" />
            </div>
            <Button
              type="primary"
              size="large"
              prefetch
              className={classNames.exploreLink}
              url={{
                pathname: "/exhibitions/exhibition/section/subsection",
                query: Object.assign({}, route.query, {
                  section: exhibition.sections[0].slug,
                  exhibition: exhibition.slug,
                  subsection: ""
                })
              }}
              as={{
                pathname: `/exhibitions/${exhibition.slug}/${exhibition
                  .sections[0].slug}`
              }}
            >
              Explore Exhibition
            </Button>
          </div>
        </div>
      </div>
      <figcaption className={classNames.caption}>
        <span className={classNames.captionLeadIn}>Image: </span>
        <div dangerouslySetInnerHTML={{ __html: exhibition.caption }} />
      </figcaption>
    </div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
  </figure>;

export default ImageAndCaption;
