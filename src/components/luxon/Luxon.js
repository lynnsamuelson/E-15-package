import React, {useState} from "react"
import { DateTime } from "luxon"
import Button from 'react-bootstrap/Button'

export const Luxon = () => {
  const day = "2000-01-01"
  const birthday = DateTime.fromISO(day)
  const [theDate, setTheDate] = useState(birthday)
  
  return (
    <>
      <h1>Luxon</h1>
      <div>
        {theDate.toLocaleString(DateTime.DATE_SHORT)}
      </div>
      <Button onClick={
        () => setTheDate(theDate.plus({days: 1}))
      }>
            Add A Day
      </Button>
    </>
  )
}