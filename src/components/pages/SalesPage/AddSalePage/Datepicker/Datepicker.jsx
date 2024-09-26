import { Datepicker } from "flowbite-react"

import "./Datepicker.css"

const DatepickerWrapper = ({ value, onChange }) => (
  <div id="date-picker">
    <Datepicker
      value={value}
      placeholder="Select a date"
      weekStart={1}
      onSelectedDateChanged={date => onChange(new Date(date).toLocaleDateString("en-GB"))}
    />
  </div>
)

export default DatepickerWrapper