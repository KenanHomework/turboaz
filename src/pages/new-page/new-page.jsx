import SectionTitle from "../../components/section-title/index.js";
import TextInput from "../../components/form/text-input/index.js";
import InputLine from "../../components/form/input-line/index.js";
import ComboboxInput from "../../components/form/combobox-input/index.js";
import NumericInput from "../../components/form/numeric-input/index.js";
import TextareaInput from "../../components/form/textarea-input/index.js";
import SelectInput from "../../components/form/select-input/index.js";
import ImageInput from "../../components/form/image-input/index.js";
import OwnerForm from "../../components/form/owner-form/index.js";
import { motion } from "framer-motion";
import { Form, Formik } from "formik";
import { NewCarSchema } from "../../validations/index.js";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
import Loader from "../../components/loader/index.js";

const NewPage = () => {
  document.title = "Turbo.Az - Avtomobilləri buradan seçirlər";

  const [isLoading, setIsLoading] = useState(false);

  const [animationParent] = useAutoAnimate();

  function gerYearsAsJsonOptions() {
    const currentYear = new Date().getFullYear();
    const options = [{ value: "", title: "" }];

    for (let year = currentYear; year >= 1903; year--) {
      options.push({ value: String(year), title: String(year) });
    }
    return options;
  }

  function gerEngineVolumeAsJsonOptions() {
    const options = [
      { value: "", title: "" },
      { value: "50", title: "50" },
      { value: "100", title: "100" },
      { value: "150", title: "150" },
      { value: "200", title: "200" },
      { value: "250", title: "250" },
      { value: "300", title: "300" },
      { value: "350", title: "350" },
      { value: "400", title: "400" },
      { value: "450", title: "450" },
      { value: "500", title: "500" },
      { value: "600", title: "600" },
      { value: "700", title: "700" },
      { value: "800", title: "800" },
      { value: "900", title: "900" },
    ];

    for (let volume = 10; volume <= 65; volume++) {
      options.push({
        value: String(volume * 100),
        title: String(volume * 100),
      });
    }

    const endOptions = [
      { value: "7000", title: "7000" },
      { value: "7500", title: "7500" },
      { value: "8000", title: "8000" },
      { value: "8500", title: "8500" },
      { value: "9000", title: "9000" },
      { value: "9500", title: "9500" },
      { value: "10000", title: "10000" },
      { value: "11000", title: "11000" },
      { value: "12000", title: "12000" },
      { value: "13000", title: "13000" },
      { value: "14000", title: "14000" },
      { value: "15000", title: "15000" },
      { value: "16000", title: "16000" },
    ];

    return [...options, ...endOptions];
  }

  return (
    <motion.div
      className={"tz-container bg-component-bg  flex-col"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={animationParent}
    >
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <SectionTitle title={"ELAN YERLƏŞDİRMƏK"} />

          <div className={"tz-inner-container "}>
            <div className={"w-full my-6 "}>
              {/*New Car Notice*/}
              <div className="my-5 mx-6">
                <ul className={"list-disc"}>
                  <li>
                    Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz
                    dərc oluna bilər.
                  </li>
                  <li>
                    Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng)
                    ödənişlidir.
                  </li>
                  <li>
                    Elanınızı saytın ön sıralarında görmək üçün &quot;İrəli
                    çək&quot; xidmətindən istifadə edin.
                  </li>
                </ul>
              </div>
              {/*Car Form*/}
              {/* eslint-disable-next-line no-unused-vars */}
              <Formik
                initialValues={{
                  vendor: "",
                  model: "",
                  engineVolume: "",
                  year: "",
                  price: 0,
                  vin: "",
                  gearBox: "",
                  transmission: "",
                  marketAssembled: "",
                  banType: "",
                  color: "",
                  horsePower: 0,
                  fuel: "",
                  mileage: "",
                  description: "",
                  ownersCount: "",
                  equipments: [],
                  images: [],
                  owner: {
                    name: "",
                    city: "",
                    email: "",
                    phoneNumber: "",
                  },
                }}
                onSubmit={(values, actions) => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 3000);
                  actions.resetForm();
                }}
                validationSchema={NewCarSchema}
                ref={animationParent}
              >
                {/* eslint-disable-next-line no-unused-vars */}
                {() => (
                  <Form className={"w-full flex-col "} ref={animationParent}>
                    <InputLine
                      left={
                        <TextInput
                          name={"vendor"}
                          title={"Marka"}
                          isRequired={true}
                        />
                      }
                      right={
                        <ComboboxInput
                          name={"fuel"}
                          options={[
                            { value: "", title: "" },
                            { value: "Benzin", title: "Benzin" },
                            { value: "Dizel", title: "Dizel" },
                            { value: "Qaz", title: "Qaz" },
                            { value: "Elektro", title: "Elektro" },
                            { value: "Hibrid", title: "Hibrid" },
                            {
                              value: "Plug-in Hibrid",
                              title: "Plug-in Hibrid",
                            },
                          ]}
                          title={"Yanacaq Növü"}
                          isRequired={true}
                        />
                      }
                    />
                    <InputLine
                      left={
                        <TextInput
                          name={"model"}
                          title={"Model"}
                          isRequired={true}
                        />
                      }
                      right={
                        <ComboboxInput
                          name={"transmission"}
                          options={[
                            { value: "", title: "" },
                            { value: "Arxa", title: "Arxa" },
                            { value: "Ön", title: "Ön" },
                            { value: "Tam", title: "Tam" },
                          ]}
                          title={"Ötürücü "}
                          isRequired={true}
                        />
                      }
                    />
                    <InputLine
                      left={
                        <ComboboxInput
                          name={"banType"}
                          options={[
                            { value: "", title: "" },
                            { value: "Sedan", title: "Sedan" },
                            { value: "Hetçbek", title: "Hetçbek" },
                            { value: "Kupe", title: "Kupe" },
                            { value: "Universal", title: "Universal" },
                            { value: "Minivan", title: "Minivan" },
                            { value: "Pikap", title: "Pikap" },
                            { value: "Mikroavtobus", title: "Mikroavtobus" },
                            { value: "Rodster", title: "Rodster" },
                            { value: "Avtobus", title: "Avtobus" },
                            { value: "Kabriolet", title: "Kabriolet" },
                            { value: "Yük maşını", title: "Yük maşını" },
                            { value: "Furqon", title: "Furqon" },
                            { value: "Dartqı", title: "Dartqı" },
                            { value: "Van", title: "Van" },
                            { value: "Motosiklet", title: "Motosiklet" },
                            {
                              value: "Offroader / SUV",
                              title: "Offroader / SUV",
                            },
                            { value: "Qolfkar", title: "Qolfkar" },
                            { value: "Kvadrosikl", title: "Kvadrosikl" },
                            { value: "Karvan", title: "Karvan" },
                            { value: "Moped", title: "Moped" },
                            { value: "Liftbek", title: "Liftbek" },
                          ]}
                          title={"Ban növü"}
                          isRequired={true}
                        />
                      }
                      right={
                        <ComboboxInput
                          name={"gearBox"}
                          options={[
                            { value: "", title: "" },
                            { value: "Mexaniki", title: "Mexaniki" },
                            { value: "Avtomat", title: "Avtomat" },
                            {
                              value: "Robotlaşdırılmış",
                              title: "Robotlaşdırılmış",
                            },
                            { value: "Variator", title: "Variator" },
                          ]}
                          title={"Sürətlər qutusu"}
                          isRequired={true}
                        />
                      }
                    />
                    <InputLine
                      left={
                        <NumericInput
                          name={"mileage"}
                          title={"Yürüş"}
                          isRequired={true}
                          min={0}
                          step={10000}
                        />
                      }
                      right={
                        <ComboboxInput
                          name={"year"}
                          options={gerYearsAsJsonOptions()}
                          title={"İl"}
                          isRequired={true}
                        />
                      }
                    />
                    <InputLine
                      left={
                        <TextInput
                          name={"color"}
                          title={"Rəng"}
                          isRequired={true}
                        />
                      }
                      right={
                        <ComboboxInput
                          name={"engineVolume"}
                          options={gerEngineVolumeAsJsonOptions()}
                          title={"Mühərrikin həcmi, sm3"}
                          isRequired={true}
                        />
                      }
                    />
                    <InputLine
                      left={
                        <NumericInput
                          name={"price"}
                          min={500}
                          step={100}
                          title={"Qiymət "}
                          isRequired={true}
                        />
                      }
                      right={
                        <NumericInput
                          name={"horsePower"}
                          min={1}
                          step={1}
                          title={"Mühərrikin gücü, a.g.  "}
                          isRequired={true}
                        />
                      }
                    />
                    <InputLine
                      left={
                        <ComboboxInput
                          name={"ownersCount"}
                          options={[
                            { value: "", title: "" },
                            { value: "Birinci", title: "Birinci" },
                            { value: "İkinci", title: "İkinci" },
                            { value: "Üçüncü", title: "Üçüncü" },
                            {
                              value: "Dördüncü vəya daha çox",
                              title: "Dördüncü vəya daha çox",
                            },
                          ]}
                          title={"Neçənci sahibisiniz?"}
                        />
                      }
                      right={
                        <ComboboxInput
                          name={"marketAssembled"}
                          options={[
                            { value: "", title: "" },
                            { value: "Amerika", title: "Amerika" },
                            { value: "Avropa", title: "Avropa" },
                            { value: "Digər", title: "Digər" },
                            { value: "Dubay", title: "Dubay" },
                            { value: "Koreya", title: "Koreya" },
                            { value: "Rəsmi diler", title: "Rəsmi diler" },
                            { value: "Rusiya", title: "Rusiya" },
                            { value: "Yaponiya", title: "Yaponiya" },
                          ]}
                          title={"Hansı bazar üçün yığılıb"}
                        />
                      }
                    />
                    <InputLine
                      left={<TextInput name={"vin"} title={"VIN-kod"} />}
                    />
                    <TextareaInput
                      name={"description"}
                      hint={"telefon nömrələri qeyd etmək qadağandır"}
                      title={"Əlavə məlumat"}
                    />
                    <SelectInput
                      name={"equipments"}
                      title={"Avtomobilin təchizatı"}
                      options={[
                        { value: "Yüngül lehimli disklər", checked: false },
                        { value: "ABS", checked: false },
                        { value: "Lyuk", checked: false },
                        { value: "Yağış sensoru", checked: false },
                        { value: "Mərkəzi qapanma", checked: false },
                        { value: "Park radarı", checked: false },
                        { value: "Kondisioner", checked: false },
                        { value: "Oturacaqların isidilməsi", checked: false },
                        { value: "Dəri salon", checked: false },
                        { value: "Ksenon lampalar", checked: false },
                        { value: "Arxa görüntü kamerası", checked: false },
                        {
                          value: "Oturacaqların ventilyasiyası",
                          checked: false,
                        },
                      ]}
                    />
                    <ImageInput name={"images"} />
                    <OwnerForm name={"owner"} />
                    <div className={"w-[460px] my-4 flex justify-end "}>
                      <div></div>
                      <button
                        type="submit"
                        className={
                          "py-[10px] w-72 px-10  bg-tz-red hover:bg-tz-red-hover-dark rounded-lg text-sm transition-all duration-150"
                        }
                      >
                        Davam et
                      </button>
                    </div>
                    <div className={"text-sm text-dark-text"}>
                      Elan yerləşdirərək, siz Turbo.az-ın{" "}
                      <span
                        className={
                          "text-blue-400 underline-animation cursor-pointer"
                        }
                      >
                        İstifadəçi razılaşması{" "}
                      </span>{" "}
                      və{" "}
                      <span
                        className={
                          "text-blue-400 underline-animation cursor-pointer"
                        }
                      >
                        Qaydaları{" "}
                      </span>{" "}
                      ilə razı olduğunuzu təsdiq edirsiniz
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default NewPage;
