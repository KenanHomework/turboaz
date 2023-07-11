import Yup from "./validation-localization.js";

export const NewCarSchema = Yup.object().shape({
  vendor: Yup.string().required().trim().min(3),
  model: Yup.string().required().trim().min(1),
  engineVolume: Yup.string().required(),
  year: Yup.string().required(),
  price: Yup.number().required().min(500),
  vin: Yup.string(),
  gearBox: Yup.string().required(),
  transmission: Yup.string().required(),
  marketAssembled: Yup.string(),
  banType: Yup.string().required(),
  color: Yup.string().required().min(2),
  horsePower: Yup.number().required().min(1),
  fuel: Yup.string().required(),
  ownersCount: Yup.string(),
  mileage: Yup.number().required().min(0),
  description: Yup.string(),
  images: Yup.array().required().min(3),
  owner: Yup.object().shape({
    name: Yup.string().required().trim().min(3),
    city: Yup.string().required(),
    email: Yup.string().email().required(),
    phoneNumber: Yup.string()
      .required()
      .matches(
        /^(\+994|0)?([ -])?(50|51|55|70|77|99)([ -])?(\d{3})([ -])?(\d{2})([ -])?(\d{2})$/
      ),
  }),
});
