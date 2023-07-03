import SectionTitle from "../../components/section-title/index.js";
import TextInput from "../../components/text-input/index.js";
import InputLine from "../../components/input-line/index.js";
import ComboboxInput from "../../components/combobox-input/index.js";
import NumericInput from "../../components/numeric-input/index.js";
import TextareaInput from "../../components/textarea-input/index.js";
import SelectInput from "../../components/select-input/index.js";
import ImageInput from "../../components/image-input/index.js";
import OwnerForm from "../../components/owner-form/index.js";

const NewPage = () => {
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

    const mergedoptions = [...options, ...endOptions];

    return mergedoptions;
  }

  return (
    <div className={"tz-container bg-component-bg  flex-col"}>
      <SectionTitle title={"ELAN YERLƏŞDİRMƏK"} />

      <div className={"tz-inner-container "}>
        <div className={"w-full my-6 "}>
          {/*New Car Notice*/}
          <div className="my-5 mx-6">
            <ul className={"list-disc"}>
              <li>
                Üç ay ərzində bir nəqliyyat vasitəsi yalnız bir dəfə pulsuz dərc
                oluna bilər.
              </li>
              <li>
                Üç ay ərzində təkrar və ya oxşar elanlar (marka/model, rəng)
                ödənişlidir.
              </li>
              <li>
                Elanınızı saytın ön sıralarında görmək üçün "İrəli çək"
                xidmətindən istifadə edin.
              </li>
            </ul>
          </div>
          {/*Car Form*/}
          <form id={"new-car"} className={"w-full flex-col "}>
            <InputLine
              left={
                <TextInput id={"vendor"} title={"Marka"} isRequired={true} />
              }
              right={
                <ComboboxInput
                  options={[
                    { value: "", title: "" },
                    { value: "1", title: "Benzin" },
                    { value: "2", title: "Dizel" },
                    { value: "3", title: "Qaz" },
                    { value: "4", title: "Elektro" },
                    { value: "5", title: "Hibrid" },
                    { value: "6", title: "Plug-in Hibrid" },
                  ]}
                  title={"Yanacaq Növü"}
                  isRequired={true}
                />
              }
            />
            <InputLine
              left={
                <TextInput id={"model"} title={"Model"} isRequired={true} />
              }
              right={
                <ComboboxInput
                  options={[
                    { value: "", title: "" },
                    { value: "1", title: "Arxa" },
                    { value: "2", title: "Ön" },
                    { value: "3", title: "Tam" },
                  ]}
                  title={"Ötürücü "}
                  isRequired={true}
                />
              }
            />
            <InputLine
              left={
                <ComboboxInput
                  options={[
                    { value: "", title: "" },
                    { value: "1", title: "Sedan" },
                    { value: "2", title: "Hetçbek" },
                    { value: "3", title: "Kupe" },
                    { value: "4", title: "Universal" },
                    { value: "5", title: "Minivan" },
                    { value: "6", title: "Pikap" },
                    { value: "7", title: "Mikroavtobus" },
                    { value: "8", title: "Rodster" },
                    { value: "9", title: "Avtobus" },
                    { value: "10", title: "Kabriolet" },
                    { value: "11", title: "Yük maşını" },
                    { value: "12", title: "Furqon" },
                    { value: "13", title: "Dartqı" },
                    { value: "14", title: "Van" },
                    { value: "15", title: "Motosiklet" },
                    { value: "16", title: "Offroader / SUV" },
                    { value: "17", title: "Qolfkar" },
                    { value: "18", title: "Kvadrosikl" },
                    { value: "19", title: "Karvan" },
                    { value: "20", title: "Moped" },
                    { value: "21", title: "Liftbek" },
                  ]}
                  title={"Ban növü"}
                  isRequired={true}
                />
              }
              right={
                <ComboboxInput
                  options={[
                    { value: "", title: "" },
                    { value: "1", title: "Mexaniki" },
                    { value: "2", title: "Avtomat" },
                    { value: "3", title: "Robotlaşdırılmış" },
                    { value: "4", title: "Variator" },
                  ]}
                  title={"Sürətlər qutusu"}
                  isRequired={true}
                />
              }
            />
            <InputLine
              left={
                <NumericInput
                  id={"milage"}
                  title={"Yürüş"}
                  isRequired={true}
                  min={0}
                  step={10000}
                />
              }
              right={
                <ComboboxInput
                  options={gerYearsAsJsonOptions()}
                  title={"İl"}
                  isRequired={true}
                />
              }
            />
            <InputLine
              left={
                <TextInput id={"milage"} title={"Rəng"} isRequired={true} />
              }
              right={
                <ComboboxInput
                  options={gerEngineVolumeAsJsonOptions()}
                  title={"Mühərrikin həcmi, sm3"}
                  isRequired={true}
                />
              }
            />
            <InputLine
              left={
                <NumericInput
                  id={"milage"}
                  min={500}
                  step={100}
                  title={"Qiymət "}
                  isRequired={true}
                />
              }
              right={
                <NumericInput
                  id={"milage"}
                  min={1}
                  step={2000}
                  title={"Mühərrikin gücü, a.g.  "}
                  isRequired={true}
                />
              }
            />
            <InputLine
              left={
                <ComboboxInput
                  options={[
                    { value: "", title: "" },
                    { value: "1", title: "Birinci" },
                    { value: "2", title: "İkinci" },
                    { value: "3", title: "Üçüncü" },
                    { value: "4", title: "Dördüncü vəya daha çox" },
                  ]}
                  title={"Neçənci sahibisiniz?"}
                />
              }
              right={
                <ComboboxInput
                  options={[
                    { value: "", title: "" },
                    { value: "1", title: "Amerika" },
                    { value: "2", title: "Avropa" },
                    { value: "9", title: "Digər" },
                    { value: "6", title: "Dubay" },
                    { value: "5", title: "Koreya" },
                    { value: "7", title: "Rəsmi diler" },
                    { value: "8", title: "Rusiya" },
                    { value: "4", title: "Yaponiya" },
                  ]}
                  title={"Hansı bazar üçün yığılıb"}
                />
              }
            />
            <InputLine left={<TextInput title={"VIN-kod"} />} />
            <TextareaInput
              hint={"telefon nömrələri qeyd etmək qadağandır"}
              title={"Əlavə məlumat"}
            />
            <SelectInput
              title={"Avtomobilin təchizatı"}
              options={[
                "Yüngül lehimli disklər",
                "ABS",
                "Lyuk",
                "Yağış sensoru",
                "Mərkəzi qapanma",
                "Park radarı",
                "Kondisioner",
                "Oturacaqların isidilməsi",
                "Dəri salon",
                "Ksenon lampalar",
                "Arxa görüntü kamerası",
                "Oturacaqların ventilyasiyası",
              ]}
            />
            <ImageInput
              defaultImages={[
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
              ]}
            />
            <OwnerForm />
            <div className={"text-sm text-dark-text"}>
              Elan yerləşdirərək, siz Turbo.az-ın{" "}
              <span
                className={"text-blue-400 underline-animation cursor-pointer"}
              >
                İstifadəçi razılaşması{" "}
              </span>{" "}
              və{" "}
              <span
                className={"text-blue-400 underline-animation cursor-pointer"}
              >
                Qaydaları{" "}
              </span>{" "}
              ilə razı olduğunuzu təsdiq edirsiniz
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
