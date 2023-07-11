import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "məcburidir",
    min: "böyük və ya ${min}-ə bərabər olmalıdır",
  },
  number: {
    min: "böyük və ya ${min}-ə bərabər olmalıdır",
  },
  string: {
    min: "böyük və ya ${min}-ə uzunluğunda olmalıdır",
    email: "email düzgün formatda daxil edin",
    matches: "düzgün formatda daxil edin",
  },
});

export default Yup;
