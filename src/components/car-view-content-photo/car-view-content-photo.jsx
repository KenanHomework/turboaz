import PropTypes from "prop-types";
import CarViewContentPhotoFooter from "../car-view-content-photo-footer/index.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

const CarViewContentPhoto = ({ car }) => {
  let { images } = car;
  const [isFullScreen, setIsFullscreen] = useState(false);

  const customRenderItem = (item) => {
    return (
      <div className={"rounded-lg"}>
        {!isFullScreen ? (
          <div
            className={"w-full h-full rounded-lg  bg-cover bg-center"}
            style={{ backgroundImage: `url(${item.original})` }}
          >
            <img
              className={
                "w-[640px] h-[480px] backdrop-blur-lg object-contain rounded-lg"
              }
              src={item.original}
              alt={item.originalAlt}
            />
          </div>
        ) : (
          <img
            className={"image-gallery-image w-full h-full object-contain"}
            src={item.original}
            alt={item.originalAlt}
          />
        )}
      </div>
    );
  };

  const customRenderThumbInner = (item) => {
    return (
      <img
        className={"h-[50px] w-[70px] mr-[-20px] object-cover "}
        src={item.thumbnail}
        alt={item.thumbnailAlt}
      />
    );
  };

  return (
    <div>
      <div className={"w-full h-[567px] max-h-[567px]  rounded-lg"}>
        <ImageGallery
          items={images}
          infinite={false}
          showPlayButton={false}
          showIndex={true}
          slideOnThumbnailOver={true}
          lazyLoad={true}
          renderCustomControls={() => null}
          renderItem={customRenderItem}
          renderThumbInner={customRenderThumbInner}
          onScreenChange={() => setIsFullscreen(!isFullScreen)}
        />
      </div>
      <CarViewContentPhotoFooter car={car} />
    </div>
  );
};
CarViewContentPhoto.propTypes = {
  car: PropTypes.object,
};

export default CarViewContentPhoto;
