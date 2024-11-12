import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown1 from './Dropdown1'
import TextInput from './TextInput'
import DateSelection from './DateSelection'

function App() {

  const [selectedValue, setSelectedValue] = useState('')
  const [campaignName, setCampaignName] = useState('')
  const [campaignDescription, setCampaignDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const user = "temporaryUser"
  const status = "Active"

  const handleChange = (value) => {
    setSelectedValue(value)
  }

  const handleDateChange = (type, value) => {
    if (type == 'start') {
      setStartDate(value)
    } else {
      setEndDate(value)
    }
  }

  return (
    <>
      <div>
        <h2>Create Promotion</h2>
        <div>
          <h4>
            Enter campaign name: <TextInput onChange={setCampaignName}  value={campaignName}/>
            {campaignName}
          </h4>
          <h4>
            Enter campaign description: <TextInput onChange={setCampaignDescription}  value={campaignDescription}/>
            {campaignDescription}
          </h4>
          <h4>
            Choose promotion type  <Dropdown1 onChange={handleChange}/>
          </h4>
          <h4>
            Choose dates <DateSelection onChange={handleDateChange} startDate={startDate} endDate={endDate}/>
            <div>
              start date: {startDate} 
            </div>
            <div>
              end date:  {endDate}
            </div> 
          </h4>
        </div>
      </div>
    </>
  )
}

export default App
