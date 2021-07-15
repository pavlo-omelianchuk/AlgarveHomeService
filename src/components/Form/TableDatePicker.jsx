import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TableDatePicker({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  // const filterPassedTime = (time) => {
  //   const currentDate = new Date();
  //   const selectedDate = new Date(time);
  //   return currentDate.getTime() < selectedDate.getTime();
  // };

  const currentDate = new Date();
  const maxDate = new Date(currentDate);
  maxDate.setDate(maxDate.getDate() + 120);

  return (
    <div>
      <label htmlFor="date">Select Preferred Date</label>
      <br />
      <DatePicker
        selected={(field.value && new Date(field.value)) || null}
        // filterTime={filterPassedTime} //deactivates a passed time
        timeIntervals={60}
        minDate={currentDate}
        maxDate={maxDate}
        // showTimeSelect
        className="date"
        calendarClassName="calendar"
        // timeFormat="HH:mm"
        dateFormat="dd MMMM yyyy"
        // dateFormat="dd MMMM yyyy HH:mm"
        onChange={(val) => {
          setFieldValue(field.name, val + 1);
          // console.log(field.value)
        }}
      />
    </div>
  );
}
// https://reactdatepicker.com/#example-filter-dates
