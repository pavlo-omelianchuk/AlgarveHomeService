import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import PricesTableTitle from '../PricesPage-component/PricesTableTitle';
import Date from './TableDatePicker';
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
      <label className="checkbox">
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

const SignupForm = () => {
  const phoneRegExp = /[1-9][0-9 \-\(\)\.]{7,}$/;
  const treatments = [
    'Therapeutic massage - 60 min',
    'Therapeutic massage - 80 min',
    'Sports Massage - 60 min',
    'Sports Massage - 80 min',
    'Relax Massage - 60 min',
    'Relax Massage - 80 min',
    'Massage for Couples - 60 min',
    'Massage for Couples - 80 min',
    'Anticellulite massage - 60 min',
    'Anticellulite massage - 80 min',
  ];
  return (
    <>
      <div id='request-form'></div>
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
          message:'',
        }}
        isSubmitting={true}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email addresss`').required('Required'),
          clientsName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
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
            actions.setSubmitting(false);
            // alert(JSON.stringify(values, null, 2));
            emailjs
              .send('service_4k0oxcm', 'template_jjonxy4', values, 'user_L88bJdNFhrP3czgos9xjl')
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
        // onSubmit={(values, actions) => {
        //   actions.setSubmitting(false);
        //   // alert(JSON.stringify(values, null, 2));
        //   emailjs
        //     .send('service_4k0oxcm', 'template_jjonxy4', values, 'user_L88bJdNFhrP3czgos9xjl')
        //     .then(
        //       (result) => {
        //         console.log(result.text);
        //       },
        //       (error) => {
        //         console.log(error.text);
        //       }
        //     );
        // }}
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
              return (
                <option key={treatment} value={treatment}>
                  {treatment}
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
export default SignupForm;
