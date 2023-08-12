import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactsFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  number: Yup.string().min(10).max(12).required('Number is required!'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactsFormSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Enter your name..." />
          <ErrorMessage name="name" />
        </label>

        <label>
          Number
          <Field type="tel" name="number" placeholder="Enter your number..." />
          <ErrorMessage name="number" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
