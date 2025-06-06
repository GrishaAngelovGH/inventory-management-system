import { Datepicker } from "flowbite-react"

import "./Datepicker.css"

const DatepickerWrapper = ({ value, onChange }) => (
  <div id="date-picker">
    <Datepicker
      value={new Date(value)}
      placeholder="Select a date"
      weekStart={1}
      onChange={onChange}
    />
  </div>
)

export default DatepickerWrapper