import css from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format ***-**-**"
    )
    .required("Required!"),
});

const initialValies = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContat }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAddContat(newContact);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValies}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.formContainer}>
          <div className={css.inputContainer}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Enter your name!"
            />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={css.inputContainer}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              type="tel"
              name="number"
              id={numberFieldId}
              placeholder="123-90-45"
            />
            <ErrorMessage name="number" component="span" />
          </div>

          <Button type="submit" variant="submit">
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContat: PropTypes.func.isRequired,
};

export default ContactForm;
