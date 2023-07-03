import ComponentTitle from "../component-title/index.js";
import PondImageCard from "../pond-image-card/index.js";
import PondImagesAddButton from "../pond-images-add-button/index.js";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ImageInput = () => {
  const [animationParent] = useAutoAnimate();

  const [images, setImages] = useState([
    {
      index: 0,
      url: "https://turbo.azstatic.com/assets/shared/car-preview-sprite-8a5413186d73379a08a1b8fad266ac0bf956990fc849d7a8815727e700622896.svg#front",
    },
    {
      index: 1,
      url: "https://turbo.azstatic.com/assets/shared/car-preview-sprite-8a5413186d73379a08a1b8fad266ac0bf956990fc849d7a8815727e700622896.svg#back",
    },
    {
      index: 2,
      url: "https://turbo.azstatic.com/assets/shared/car-preview-sprite-8a5413186d73379a08a1b8fad266ac0bf956990fc849d7a8815727e700622896.svg#dashboard",
    },
  ]);

  const titles = ["Ön görünüşü", "Arxa görünüşü", "Ön panel"];

  const addImages = (uploadImages, sourceIndex) => {
    const mergedImages = [...images.slice(0, sourceIndex), ...uploadImages];
    // setImages(mergedImages);
  };

  const handleOnDelete = (index) => {
    const filteredImages = [...images];

    filteredImages.splice(index, 1);

    setImages(filteredImages);
  };

  return (
    <div className={"w-full flex-col my-8"} ref={animationParent}>
      <ComponentTitle title={"Şəkillər"} />

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

          <div className={"flex"}>
            {images.map((image) => (
              <PondImageCard
                key={image.index}
                index={image.index}
                isDeletable={false}
                iconLink={image.url}
                title={titles[image.index]}
              />
            ))}
            <PondImagesAddButton />
          </div>
        </div>
      ) : (
        <div>
          <div className={"text-second-text text-[15px]"}>
            Daha {21 - images.length} şəkil əlavə edə bilərsiniz
          </div>
          <div
            className={
              "flex flex-wrap w-full mt-[10px] mb-[20px] pt-[15px] pl-[15px] pr-[5px]  border-data border-2 border-blue-950"
            }
          >
            {images.map((image) => (
              <PondImageCard
                key={image.index}
                index={image.index}
                onDeleteClick={handleOnDelete}
                iconLink={image.url}
              />
            ))}
            <PondImagesAddButton />
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

export default ImageInput;
