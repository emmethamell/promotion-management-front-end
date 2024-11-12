import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown1 from './Dropdown1'
import TextInput from './TextInput'
import DateSelection from './DateSelection'
import axios from 'axios';

function CreateCampaign() {

  const [campaignName, setCampaignName] = useState('')
  const [campaignDescription, setCampaignDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const user = "temporaryUser"
  const status = "PENDING"

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

  const handleSubmit = () => {
    // Create the campaign object to send to the server
    const campaignData = {
      campaignName,
      campaignDescription,
      startDate,
      endDate,
      createdBy: user,
      status
    };
      // Send a POST request to the server
      axios.post('http://localhost:8080/api/campaigns', campaignData)
      .then(response => {
        console.log('Campaign created:', response.data);
        alert('Campaign created successfully!');
        // Reset form fields after submitting
        setCampaignName('');
        setCampaignDescription('');
        setStartDate('');
        setEndDate('');
      })
      .catch(error => {
        console.error('Error creating campaign:', error);
        alert('Failed to create campaign');
      });
  };




  return (
    <>
      <div>
        <h2>Create a Campaign</h2>
        <div>
          <h4>
            Enter campaign name: <TextInput onChange={setCampaignName} />
            {campaignName}
          </h4>
          <h4>
            Enter campaign description: <TextInput onChange={setCampaignDescription} />
            {campaignDescription}
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
        <button onClick={handleSubmit} className="submit-button">
          Create Campaign
        </button>
      </div>
    </>
  )
}

export default CreateCampaign