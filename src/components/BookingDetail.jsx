import React from 'react'

function BookingDetail({booking}) {
if(!booking) return null

  return (
    <div className='h-[40vh] pt-10 pl-10 overflow-y-auto'>
        <header className='flex justify-between mb-6'>
            <h1 className='font-bold text-2xl'>{booking.bookingName}</h1>
        </header>
        <hr />
        <section className='my-10 '>
            <h1 className='text-primary'>Instructor</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Confirmation Status</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Start time</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Duration</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>End time</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Type</h1>
            <span>Repeat every</span>
            <h1 className='text-primary'>Repeat every</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Repeat end date</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Created by</h1>
            <span>Hippo</span>
            <h1 className='text-primary'>Last updated</h1>
            <span>Hippo</span>
            

        </section>
    </div>
  )
}

export default BookingDetail
