import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { getDefaultThumbnail } from "lib";

import css from "./RelatedItemsModule.scss";

class RelatedItem extends React.Component {
  state = {
    updateToDefaultImage: false
  };

  componentDidMount() {
    this.updateImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item.thumbnailUrl !== this.props.item.thumbnailUrl) {
      this.setState({ updateToDefaultImage: false });
      this.updateImage();
    }
  }

  updateImage() {
    // Check for images that error so we can replace them with a default image
    const _img = document.createElement("img");
    _img.src = this.props.item.thumbnailUrl;
    _img.onerror = () => {
      this.setState({ updateToDefaultImage: true });
    };
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    const updateToDefaultImage = this.state.updateToDefaultImage;

    return (
      <div key={`${item.id}-${index}`} className={`${css.item}`}>
        <Link
          prefetch
          href={`/item/${item.id}`}
          as={`/item/${item.id}`}
        >
          <a className={css.itemLink}>
            <div className={css.imageWrapper}>
              <img
                alt={item.title}
                src={updateToDefaultImage ? getDefaultThumbnail(item.type) : item.thumbnailUrl}
                className={css.itemImage}
              />
            </div>
            <div className={css.title}>
              {item.title}        
            </div>
          </a>
        </Link>
      </div>
    );
  }
}

export default RelatedItem;