import { Datepicker } from "flowbite-react"

import "./Datepicker.css"

const DatepickerWrapper = ({ value, onChange }) => (
  <div id="date-picker">
    <Datepicker
      value={new Date(value).toLocaleDateString("en-GB")}
      placeholder="Select a date"
      weekStart={1}
      onSelectedDateChanged={date => onChange(date)}
    />
  </div>
)

export default DatepickerWrapper