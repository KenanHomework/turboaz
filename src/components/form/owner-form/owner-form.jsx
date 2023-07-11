import ComponentTitle from "../../component-title/index.js";
import TextInput from "../text-input/index.js";
import ComboboxInput from "../combobox-input/index.js";
import { useField } from "formik";
import PropTypes from "prop-types";

const OwnerForm = ({ name }) => {
  const cities = [
    { value: "", title: "" },
    { value: "Ağcabədi", title: "Ağcabədi" },
    { value: "Ağdam", title: "Ağdam" },
    { value: "Ağdaş", title: "Ağdaş" },
    { value: "Ağdərə", title: "Ağdərə" },
    { value: "Ağstafa", title: "Ağstafa" },
    { value: "Ağsu", title: "Ağsu" },
    { value: "Astara", title: "Astara" },
    { value: "Babək", title: "Babək" },
    { value: "Bakı", title: "Bakı" },
    { value: "Balakən", title: "Balakən" },
    { value: "Beyləqan", title: "Beyləqan" },
    { value: "Bərdə", title: "Bərdə" },
    { value: "Biləsuvar", title: "Biləsuvar" },
    { value: "Cəbrayıl", title: "Cəbrayıl" },
    { value: "Cəlilabad", title: "Cəlilabad" },
    { value: "Culfa", title: "Culfa" },
    { value: "Daşkəsən", title: "Daşkəsən" },
    { value: "Dəliməmmədli", title: "Dəliməmmədli" },
    { value: "Füzuli", title: "Füzuli" },
    { value: "Gədəbəy", title: "Gədəbəy" },
    { value: "Gəncə", title: "Gəncə" },
    { value: "Goranboy", title: "Goranboy" },
    { value: "Göyçay", title: "Göyçay" },
    { value: "Göygöl", title: "Göygöl" },
    { value: "Göytəpə", title: "Göytəpə" },
    { value: "Hacıqabul", title: "Hacıqabul" },
    { value: "Horadiz", title: "Horadiz" },
    { value: "İmişli", title: "İmişli" },
    { value: "İsmayıllı", title: "İsmayıllı" },
    { value: "Kəlbəcər", title: "Kəlbəcər" },
    { value: "Kürdəmir", title: "Kürdəmir" },
    { value: "Laçın", title: "Laçın" },
    { value: "Lerik", title: "Lerik" },
    { value: "Lənkəran", title: "Lənkəran" },
    { value: "Liman", title: "Liman" },
    { value: "Masallı", title: "Masallı" },
    { value: "Mingəçevir", title: "Mingəçevir" },
    { value: "Naftalan", title: "Naftalan" },
    { value: "Naxçıvan", title: "Naxçıvan" },
    { value: "Neftçala", title: "Neftçala" },
    { value: "Oğuz", title: "Oğuz" },
    { value: "Ordubad", title: "Ordubad" },
    { value: "Qax", title: "Qax" },
    { value: "Qazax", title: "Qazax" },
    { value: "Qəbələ", title: "Qəbələ" },
    { value: "Qobustan", title: "Qobustan" },
    { value: "Quba", title: "Quba" },
    { value: "Qubadlı", title: "Qubadlı" },
    { value: "Qusar", title: "Qusar" },
    { value: "Saatlı", title: "Saatlı" },
    { value: "Sabirabad", title: "Sabirabad" },
    { value: "Şabran", title: "Şabran" },
    { value: "Şahbuz", title: "Şahbuz" },
    { value: "Salyan", title: "Salyan" },
    { value: "Şamaxı", title: "Şamaxı" },
    { value: "Samux", title: "Samux" },
    { value: "Şəki", title: "Şəki" },
    { value: "Şəmkir", title: "Şəmkir" },
    { value: "Şərur", title: "Şərur" },
    { value: "Şirvan", title: "Şirvan" },
    { value: "Siyəzən", title: "Siyəzən" },
    { value: "Sumqayıt", title: "Sumqayıt" },
    { value: "Şuşa", title: "Şuşa" },
    { value: "Tərtər", title: "Tərtər" },
    { value: "Tovuz", title: "Tovuz" },
    { value: "Ucar", title: "Ucar" },
    { value: "Xaçmaz", title: "Xaçmaz" },
    { value: "Xankəndi", title: "Xankəndi" },
    { value: "Xırdalan", title: "Xırdalan" },
    { value: "Xızı", title: "Xızı" },
    { value: "Xocalı", title: "Xocalı" },
    { value: "Xocavənd", title: "Xocavənd" },
    { value: "Xudat", title: "Xudat" },
    { value: "Yardımlı", title: "Yardımlı" },
    { value: "Yevlax", title: "Yevlax" },
    { value: "Zaqatala", title: "Zaqatala" },
    { value: "Zəngilan", title: "Zəngilan" },
    { value: "Zərdab", title: "Zərdab" },
  ];
  const [nameField] = useField(`${name}.name`);
  const [cityField] = useField(`${name}.city`);
  const [emailField] = useField(`${name}.email`);
  const [phoneNumberField] = useField(`${name}.phoneNumber`);
  return (
    <div className={"w-full flex-col mt-8"}>
      <ComponentTitle
        title={"Əlaqə"}
        hint={
          "Elan dərc olunduqdan sonra əlaqə məlumatları ilə bağlı heç bir dəyişiklik həyata keçirilmir.\n"
        }
      />
      <div className={"flex flex-col gap-4"}>
        <TextInput {...nameField} title={"Adınız"} isRequired={true} />
        <ComboboxInput
          {...cityField}
          title={"Şəhər"}
          isRequired={true}
          options={cities}
        />
        <TextInput {...emailField} title={"Email"} isRequired={true} />
        <TextInput
          {...phoneNumberField}
          title={"Telefon nömrəsi"}
          isRequired={true}
        />
      </div>
    </div>
  );
};

OwnerForm.propTypes = {
  name: PropTypes.string,
};

export default OwnerForm;
