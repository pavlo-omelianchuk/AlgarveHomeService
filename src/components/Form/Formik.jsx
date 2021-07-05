import React, { useEffect } from 'react';
import { Formik, Form, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import PricesTableTitle from '../PricesPage-component/PricesTableTitle';
// import './styles.css';
// import './styles-custom.css';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};
const PhoneNumberInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
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

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </>
  );
};
let OnSubmitHello;
// And now we can use these
const SignupForm = () => {
  const phoneRegExp = /^(\+|00)[1-9][0-9 \-\(\)\.]{7,}$/;
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
      <PricesTableTitle className="price-list-section-title" title="Send your request" />
      <p>All bookings require confirmation.</p>
      <Formik
        initialValues={{
          clientsName: '',
          email: '',
          phoneNumber: '',
          acceptedTerms: false, // added for our checkbox
          treatment: '', // added for our select
        }}
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
        onSubmit={(values, { setSubmitting }) => {
          let OnSubmitHello = () => {
            return <div className="onSubmitHello">Hello from submit</div>;
          };
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
          }, 400);
          return OnSubmitHello = OnSubmitHello;
        }}
      >
        
        <Form className="main-form">
          <MyTextInput label="Clients Name" name="clientsName" type="text" placeholder="Name" />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="info@danhips.com"
          />
          <PhoneNumberInput
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="+351 123 123 123"
          />
          <MySelect label="Choose treatment" name="treatment">
            <option value="">Choose treatment</option>
            {treatments.map((treatment) => {
              return <option value={treatment}>{treatment}</option>;
            })}
          </MySelect>
          <MyCheckbox name="acceptedTerms">I accept the terms and conditions</MyCheckbox>

          <button type="submit">Submit</button>
          {<OnSubmitHello /> && ''}
        </Form>
      </Formik>
    </>
  );
};
export default SignupForm;
