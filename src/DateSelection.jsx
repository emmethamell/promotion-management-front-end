import { useState } from 'react'

function DateSelection({onChange, startDate, endDate}) {


    const handleStartDateChange = (event) => {
        onChange('start', event.target.value)
    }

    const handleEndDateChange = (event) => {
        onChange('end', event.target.value)
    }


    return (
        <>
        <div>
            <label>
            Start Date:
            </label>
                <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    style={{ padding: '8px', width: '100%' }}
                />
            <label>
            End Date:
            </label>
                <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    style={{ padding: '8px', width: '100%' }}
                />
        </div>
        </>
    )
}

export default DateSelection;