import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import PricesTableTitle from '../../layout/PageWelcomeBgTitle-component';
import Date from './TableDatePicker-component';
import emailjs from 'emailjs-com';

const SuccesPopUp = () => {
  return (
    <>
      <div id="succes-PopUp" className="modal">
        <div className="succes-PopUp">
          <p>Thank you for your Request! Our managers will contact you as soon as possible!</p>
          <span className="cta-btn cta-btn--popup close">Great</span>
        </div>
      </div>
    </>
  );
};
const TryAgainPopUp = () => {
  return (
    <>
      <div id="error-popup'" className="modal">
        <div className="succes-PopUp">
          <p>Sorry Your request could not be send. Try again later.</p>
          <span className="cta-btn cta-btn--popup close">Okay</span>
        </div>
      </div>
    </>
  );
};

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

const TreatmentSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}></select>
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

const SignupForm = ({
  treatmentsMassage,
  treatmentsMicropigmentation,
  treatmentsBeauty,
  treatmentsHairdresser,
}) => {
  const phoneRegEx = /[1-9][0-9 \-\(\)\.]{7,}$/;
  const treatments =
    treatmentsMassage || treatmentsMicropigmentation || treatmentsBeauty || treatmentsHairdresser;
  return (
    <>
      <div id="request-form"></div>
      <PricesTableTitle className="form-section-title" title="Send your request" />
      <h6>*All bookings require confirmation.</h6>
      <Formik
        initialValues={{
          clientsName: '',
          email: '',
          phoneNumber: '',
          location: '',
          date: '',
          treatment: '',
          message: '',
          acceptedTerms: false,
        }}
        isSubmitting={true}
        validationSchema={Yup.object({
          clientsName: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
          email: Yup.string().email('Invalid email addresss`').required('Required'),
          phoneNumber: Yup.string()
            .matches(phoneRegEx, 'Phone number is not valid')
            .required('Required'),
          location: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
          treatment: Yup.string().required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            var btn = document.getElementById('submit');
            var modal = document.getElementById('succes-PopUp');

            btn.onclick = function () {
              modal.style.display = 'block';
            };

            var span = document.getElementsByclassName('close')[0];
            modal.style.display = 'block';

            span.onclick = function () {
              modal.style.display = 'none';
            };
            window.onclick = function (event) {
              if (event.target == modal) {
                modal.style.display = 'none';
              }
            };
            emailjs
              .send(
                'ahsmb-gmail',
                'template_fhul34e',
                {
                  clientsName: values.clientsName,
                  email: values.email,
                  phoneNumber: values.phoneNumber,
                  location: values.location,
                  date: values.date.toLocaleString(),
                  treatment: values.treatment,
                  message: values.message,
                },
                'user_sYM3nz1Wl6wCbCvu7XXBg'
              )
              .then(
                (result) => {
                  console.log(result.text);
                },
                (error) => {
                  console.log(error.text);
                  var modal = document.getElementById('error-popup');

                  var span = document.getElementsByclassName('close')[0];
                  modal.style.display = 'block';

                  span.onclick = function () {
                    modal.style.display = 'none';
                  };
                  window.onclick = function (event) {
                    if (event.target == modal) {
                      modal.style.display = 'none';
                    }
                  };
                }
              );
            actions.setSubmitting(false);
            actions.resetForm({
              values: {
                clientsName: '',
                email: '',
                phoneNumber: '',
                location: '',
                date: '',
                treatment: '',
                message: '',
                acceptedTerms: false,
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
            placeholder="info.ahsmb@gmail.com"
          />
          <PhoneNumberInput
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            placeholder="+351 963 531 684"
          />
          <PhoneNumberInput
            label="Location"
            name="location"
            type="text"
            placeholder="Enter your Location/Area"
          />
          <Date name="date" />
          <TreatmentSelect label="Choose treatment" name="treatment">
            <option value="">---</option>
            {treatments.map((treatment) => {
              const { title, price60, price90 } = treatment;
              return (
                <option key={title} value={title}>
                  {title}
                  {' - '}
                  {price60 || price90} {'Euro'}
                </option>
              );
            })}
          </TreatmentSelect>
          <MessageInput label="Message Input" name="message" type="text" placeholder="Message" />
          <MyCheckbox name="acceptedTerms">I accept the terms and conditions</MyCheckbox>

          <button id="submit" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <TryAgainPopUp />
      <SuccesPopUp />
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
  treatmentsMassage: PropTypes.array,
  treatmentsMicropigmentation: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  treatmentsBeauty: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  treatmentsHairdresser: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

export default SignupForm;
