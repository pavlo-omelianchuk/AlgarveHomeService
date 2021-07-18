import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import PricesTableTitle from '../PricesPage-component/PricesTableTitle-component';
import Date from './TableDatePicker-component';
import emailjs from 'emailjs-com';
import 'react-datepicker/dist/react-datepicker.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};
const MessageInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="message-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

const PhoneNumberInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label htmlFor={props.id || props.name} className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

const TreatmentSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}></select>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

const SignupForm = ({
  treatmentsMassage,
  treatmentsMicropigmentation,
  treatmentsBeauty,
  treatmentsHairdresser,
}) => {
  const phoneRegExp = /[1-9][0-9 \-\(\)\.]{7,}$/;
  const treatments =
    treatmentsMassage || treatmentsMicropigmentation || treatmentsBeauty || treatmentsHairdresser;
  return (
    <>
      <div id="request-form"></div>
      <PricesTableTitle className="price-list-section-title" title="Send your request" />
      <p>All bookings require confirmation.</p>
      <Formik
        initialValues={{
          clientsName: '',
          email: '',
          phoneNumber: '',
          acceptedTerms: false,
          treatment: '',
          date: '',
          message: '',
        }}
        isSubmitting={true}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email addresss`').required('Required'),
          clientsName: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
          phoneNumber: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          treatment: Yup.string()
            // // specify the set of valid values for job type
            // // @see http://bit.ly/yup-mixed-oneOf
            // .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
            .required('Required'),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // values.date = values.date.toLocaleString();//convert to local Time
            // console.log(values.date); //stringify resets localizaton and returns basic time(UTM)
            // alert(JSON.stringify(values, null, 2)); //stringify resets localizaton and returns basic time(UTM)
            emailjs
              .send(
                'gmail',
                'template_3ezn2x6',
                {
                  clientsName: values.clientsName,
                  email: values.email,
                  phoneNumber: values.phoneNumber,
                  date: values.date.toLocaleString(),
                  // acceptedTerms: values.acceptedTerms,
                  treatment: values.treatment,
                  message: values.message,
                },
                'user_GKoTeAyQd5Wl26g6VbXaP'
              ) //danylo
              // .send(
              //   'service_4k0oxcm',
              //   'template_jjonxy4',
              //   {
              //     clientsName: values.clientsName,
              //     email: values.email,
              //     phoneNumber: values.phoneNumber,
              //     date: values.date.toLocaleString(),
              //     // acceptedTerms: values.acceptedTerms,
              //     treatment: values.treatment,
              //     message: values.message,
              //   },
              //   'user_L88bJdNFhrP3czgos9xjl'
              // ) //tvingo
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                }
              );
            actions.setSubmitting(false);
            actions.resetForm({
              values: {
                clientsName: '',
                email: '',
                phoneNumber: '',
                acceptedTerms: false,
                treatment: '',
                date: '',
                message: '',
              },
            });
          }, 1000);
        }}
      >
        <Form className="main-form">
          <TextInput label="Clients Name" name="clientsName" type="text" placeholder="Name" />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="info@algarvehomemassageandbeauty.com"
          />
          <PhoneNumberInput
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="+351 916 916 916"
          />
          <Date name="date" />
          <TreatmentSelect label="Choose treatment" name="treatment">
            <option value="">---</option>
            {treatments.map((treatment) => {
              const { name } = treatment;
              return (
                <option key={name} value={name}>
                  {name}
                  {}
                </option>
              );
            })}
          </TreatmentSelect>
          <MessageInput label="Message Input" name="message" type="text" placeholder="Message" />
          <MyCheckbox name="acceptedTerms">I accept the terms and conditions</MyCheckbox>

          <button type="submit">Submit</button>
          <div id="output"></div>
        </Form>
      </Formik>
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
MessageInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
PhoneNumberInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
MyCheckbox.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
TreatmentSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};
SignupForm.propTypes = {
  treatmentsMassage: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  treatmentsMicropigmentation: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  treatmentsBeauty: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  treatmentsHairdresser: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

export default SignupForm;
