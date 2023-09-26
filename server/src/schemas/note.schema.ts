import * as yup from "yup";

const noteSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  is_favorite: yup.boolean().required(),
  color: yup.string().required(),
});

export default noteSchema;
