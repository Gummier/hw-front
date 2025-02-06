import React from 'react'

function Schedule() {
    const scheduleData = [
        {date: "2 Feb", start: "8:00", end: "10:30",title: "SIT110 Hello World"},
        {date: "2 Feb", start: "8:00", end: "10:30",title: "SIT110 Hello World"},
        {date: "2 Feb", start: "8:00", end: "10:30",title: "SIT110 Hello World"},
        {date: "2 Feb", start: "8:00", end: "10:30",title: "SIT110 Hello World"},
        {date: "2 Feb", start: "8:00", end: "10:30",title: "SIT110 Hello World"},
    ]

  return (
    <div>
      <div className=' max-h-[500px]  overflow-y-auto rounded-lg'>
        {scheduleData.map((item,index) => (
            <div key={index} className='flex items-center space-x-4 p-3 border rounded-lg shadow-sm mb-4'>

                <div className='flex flex-col items-center bg-gray-200 rounded-lg px-3 py-2 text-center font-semibold'>
                    <span className='text-xl text-secondary'>{item.date.split("")}</span>
                    {item.date.includes(" ") && <span className="text-sm text-gray-600">{item.date.split(" ")[1]}</span>}

                </div>
                <div>
                    <p className='text-sm font-semibold'>{item.start} - {item.end}</p>
                    {item.title && <p className='text-gray-500 text-sm'>{item.title}</p>}
                </div>
                
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default Schedule
