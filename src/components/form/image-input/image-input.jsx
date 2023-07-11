import ComponentTitle from "../../component-title/index.js";
import PondImageCard from "../pond-image-card/index.js";
import PondImagesAddButton from "../pond-images-add-button/index.js";
import { forwardRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PropTypes from "prop-types";
import { ReactSortable } from "react-sortablejs";
import { ErrorMessage, useField } from "formik";

const ImageInput = ({ maxImagesCount = 21, name }) => {
  const [field] = useField(name);

  const [animationParent] = useAutoAnimate();

  const [actionIndex, setActionIndex] = useState(0);
  const [images, setImages] = useState([]);
  const titles = ["Ön görünüşü", "Arxa görünüşü", "Ön panel"];

  const handleUploadImages = (imageIndex) => {
    setActionIndex(imageIndex);
    document.getElementById("fileInput").click();
  };

  const handleOnDelete = (index) => {
    const filteredImages = [
      ...images.slice(0, index),
      ...images.slice(index + 1),
    ];
    convertToBase64(filteredImages).then((data) => {
      field.onChange({ target: { name: name, value: data } });
    });

    setImages(filteredImages);
  };

  const uploadImages = (e) => {
    const uploadImages = Array.from(e.target.files).map((f) =>
      URL.createObjectURL(f)
    );

    if (uploadImages.length <= 0) return;

    const mergedImages = [
      ...images.slice(0, actionIndex),
      ...uploadImages,
      ...images.slice(actionIndex + 1),
    ];

    console.log("mergedImages: " + mergedImages);
    convertToBase64(mergedImages).then((data) => {
      field.onChange({ target: { name: name, value: data } });
    });

    setImages(mergedImages);
  };

  const convertToBase64 = async (images) => {
    const imageDataArray = [];

    for (const blobUrl of images) {
      const response = await fetch(blobUrl);
      const blob = await response.blob();

      // Blob verisini FileReader kullanarak Base64 formatına dönüştürüyoruz
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result;
        imageDataArray.push(base64data);
      };

      reader.readAsDataURL(blob);
    }

    return imageDataArray;
  };

  function handleAddImages() {
    setActionIndex(images.length);
    document.getElementById("fileInput").click();
  }

  return (
    <div className={"w-full flex-col my-8"} ref={animationParent}>
      <ComponentTitle title={"Şəkillər"} />
      <ErrorMessage
        name={field.name}
        component={"small"}
        className={"text-xs block mt-2 text-tz-red-text"}
      />
      <input
        className={"hidden"}
        type={"file"}
        id={"fileInput"}
        name="img"
        multiple
        accept={"image/ .jpg,.png,.jpeg"}
        onChange={uploadImages}
      />

      {/*Images Container*/}

      {images.length <= 3 ? (
        <div
          className={
            "flex w-full  mt-[10px] mb-[20px] py-[15px] pl-[15px] pr-[5px] border-data border-2 border-blue-950"
          }
        >
          <div className={" w-[300px] h-[100px]  mr-[20px]"}>
            <ul className=" flex flex-col gap-2 text-dark-text text-sm ">
              <li className="rule_item">
                - Minimum – 3 şəkil (ön, arxa və bütöv ön panelin görüntüsü
                mütləqdir).
              </li>
              <li className="rule_item">- Maksimum – 21 şəkil.</li>
              <li className="rule_item">- Optimal ölçü – 1024x768 piksel.</li>
            </ul>
          </div>
          {/*Inner Warnings*/}

          <div className={"flex"} ref={animationParent}>
            <PondImageCard
              uploadImages={handleUploadImages}
              key={0}
              index={0}
              isDeletable={false}
              selectedImage={images[0]}
              iconLink={
                "https://turbo.azstatic.com/assets/shared/car-preview-sprite-8a5413186d73379a08a1b8fad266ac0bf956990fc849d7a8815727e700622896.svg#front"
              }
              title={titles[0]}
            />

            <PondImageCard
              uploadImages={handleUploadImages}
              key={1}
              index={1}
              isDeletable={false}
              selectedImage={images[1]}
              iconLink={
                "https://turbo.azstatic.com/assets/shared/car-preview-sprite-8a5413186d73379a08a1b8fad266ac0bf956990fc849d7a8815727e700622896.svg#back"
              }
              title={titles[1]}
            />

            <PondImageCard
              uploadImages={handleUploadImages}
              key={2}
              index={2}
              isDeletable={false}
              selectedImage={images[2]}
              iconLink={
                "https://turbo.azstatic.com/assets/shared/car-preview-sprite-8a5413186d73379a08a1b8fad266ac0bf956990fc849d7a8815727e700622896.svg#dashboard"
              }
              title={titles[2]}
            />
            <PondImagesAddButton onAddImage={handleAddImages} />
          </div>
        </div>
      ) : (
        <div>
          <div className={"text-second-text text-[15px]"}>
            Daha {maxImagesCount - images.length} şəkil əlavə edə bilərsiniz
          </div>
          <div
            className={
              "flex flex-wrap w-full mt-[10px] mb-[20px] pt-[15px] pl-[15px] pr-[5px]  border-data border-2 border-blue-950"
            }
            ref={animationParent}
          >
            <ReactSortable
              expand={true}
              tag={CustomComponent}
              list={images}
              setList={setImages}
            >
              {images.map((image, index) => (
                <PondImageCard
                  uploadImages={handleUploadImages}
                  key={index}
                  index={index}
                  onDeleteClick={handleOnDelete}
                  selectedImage={image}
                />
              ))}
            </ReactSortable>
            <PondImagesAddButton onAddImage={handleAddImages} />
          </div>
        </div>
      )}

      {/*Outer Warnings*/}
      <div className="flex w-full items-center justify-between gap-6 text-dark-text text-sm my-5 mx-6">
        <ul className="list-disc w-[480px] flex flex-col gap-4">
          <li className="">
            Şəkillər Azərbaycan Respublikasının ərazisində çəkilməlidir.
          </li>
          <li className="">
            Şəkillər yaxşı keyfiyyətdə olmalıdır. Nəqliyyat vasitəsi yaxşı
            işıqlandırılmış olmalı, şəkillərin üzərində loqotip və digər yazılar
            olmamalıdır. Skrinşotlar qəbul olunmur.
          </li>
        </ul>
        <ul className="list-disc w-[480px] flex flex-col gap-4">
          <li className="">
            Avtosalonda çəkilmiş şəkillər qeydiyyatdan keçmiş avtosalonun
            hesabından уerləşdirilməlidir.
          </li>
          <li className="">
            Şəxsi sahibi tərəfindən satılan nəqliyyat vasitəsinin şəkli
            avtosalon/rəsmi servis ərazisində və ya yaxınlığında çəkilməməlidir.
          </li>
        </ul>
      </div>
    </div>
  );
};

ImageInput.propTypes = {
  maxImagesCount: PropTypes.number,
  name: PropTypes.string,
};

const CustomComponent = forwardRef((props, ref) => {
  return (
    <div className="flex flex-wrap items-center w-fit h-fit " ref={ref}>
      {props.children}
    </div>
  );
});

export default ImageInput;
