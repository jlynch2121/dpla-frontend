import React from "react";
import Link from "next/link";

import {
  mapTimePeriodNameToSlug,
  mapSubjectNameToSlug
} from "constants/primarySourceSets";
import Button from "components/shared/Button";
import CiteButton from "components/shared/CiteButton";

import { stylesheet, classNames } from "./SourceSetInfo.css";
import { classNames as utilClassNames } from "css/utils.css";

const markdownit = require("markdown-it")({ html: true });
const { container } = utilClassNames;

// Only the time period has a sameAs field
const extractTimePeriod = tags =>
  tags.filter(tag => tag.sameAs).map(tag => tag.name);
const extractSubjects = tags =>
  tags.filter(tag => !tag.sameAs).map(tag => tag.name);

class SourceSetInfo extends React.Component {
  state = { isOpen: false };

  componentWillReceiveProps() {
    this.setState({ isOpen: this.props.openDescription || false });
  }

  showMoreDescription() {
    this.setState({ isOpen: true });
  }

  render() {
    const { set, currentFullUrl } = this.props;
    const authorList = set.author.map(author => author.name);
    return (
      <div id="main" role="main" className={classNames.wrapper}>
        <div className={[classNames.sourceSetInfo, container].join(" ")}>
          <div className={`${classNames.removeScroll} row`}>
            <div className={`${classNames.removeScroll} col-xs-12 col-md-8`}>
              <div className={classNames.banner}>
                <div
                  className={classNames.bannerImage}
                  style={{
                    backgroundImage: `url(${set.repImageUrl ||
                      set.thumbnailUrl})`,
                    backgroundPosition: "50% 25%"
                  }}
                />
                <div className={classNames.bannerTextWrapper}>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: markdownit.renderInline(set.name)
                    }}
                    className={classNames.bannerTitle}
                  />
                </div>
              </div>
              <div
                id="dpla-description"
                className={`${classNames.description} sourceSetDescription ${classNames.description} ${this
                  .state.isOpen
                  ? classNames.open
                  : ""}`}
                dangerouslySetInnerHTML={{
                  __html: markdownit.render(
                    set.hasPart
                      .find(item => item.name === "Overview")
                      .text.replace(
                        /https?:\/\/.*?\/primary-source-sets\/sources\//g,
                        "sources/"
                      )
                      .replace(
                        /https?:\/\/.*?\/primary-source-sets\/sets\//g,
                        "/primary-source-sets/"
                      )
                  )
                }}
              />
              <div
                id="dpla-showmore"
                aria-hidden="true"
                className={`${classNames.showMore} ${this.state.isOpen
                  ? classNames.open
                  : ""}`}
              >
                <span
                  className={`link`}
                  onClick={() => this.showMoreDescription()}
                >
                  Show full overview
                </span>
              </div>
            </div>
            <div className={`${classNames.removeScroll} col-xs-12 col-md-4`}>
              <div className={`${classNames.sidebar} sourceSetSidebar`}>
                <div className={classNames.metadata}>
                  <div className={classNames.metadatum}>
                    <h2 className={classNames.metadataHeader}>
                      Created By
                    </h2>
                    {set.author.map(author =>
                      <div
                        key={author.name}
                        dangerouslySetInnerHTML={{
                          __html: markdownit.renderInline(
                            author.name + ", " + author.affiliation.name
                          )
                        }}
                      />
                    )}
                  </div>
                  <div className={classNames.metadatum}>
                    <h2 className={classNames.metadataHeader}>
                      Time Period
                    </h2>
                    {extractTimePeriod(set.about).map((period, i, periods) =>
                      <span key={period}>
                        <Link
                          prefetch
                          href={{
                            pathname: "/primary-source-sets",
                            query: {
                              timePeriod: mapTimePeriodNameToSlug(period)
                            }
                          }}
                        >
                          <a
                            className={`link ${classNames.link}`}
                            dangerouslySetInnerHTML={{
                              __html: markdownit.renderInline(period)
                            }}
                          />
                        </Link>
                        {i < periods.length - 1 && <br />}
                      </span>
                    )}
                  </div>
                  <div className={classNames.metadatum}>
                    <h2 className={classNames.metadataHeader}>Subjects</h2>
                    {extractSubjects(set.about).map((subject, i, subjects) =>
                      <span key={subject}>
                        <Link
                          prefetch
                          href={{
                            pathname: "/primary-source-sets",
                            query: {
                              subject: mapSubjectNameToSlug(subject)
                            }
                          }}
                        >
                          <a
                            className={`link ${classNames.link}`}
                            dangerouslySetInnerHTML={{
                              __html: markdownit.renderInline(subject)
                            }}
                          />
                        </Link>
                        {i < subjects.length - 1 && <br />}
                      </span>
                    )}
                  </div>
                </div>
                <div className={classNames.citeButton}>
                  <CiteButton
                    creator={authorList}
                    displayDate={new Date(set.dateCreated).getFullYear()}
                    sourceUrl={currentFullUrl}
                    className={classNames.citeButton}
                    toCiteText="set"
                    title={set.name.replace(/\*/g, "")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </div>
    );
  }
}

export default SourceSetInfo;
