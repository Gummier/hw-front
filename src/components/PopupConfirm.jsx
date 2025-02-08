import React , { useState }from 'react'
import {motion} from 'framer-motion'
function PopupConfirmed() {
    const [open,setOpen] = useState(false);

    
  return (

    <div className="flex flex-col items-center justify-center mx-3">
        
      <button
                  onClick={() => setOpen(true)}
                  className="mt-4 px-4 py-2 bg-white text-green-button shadow-3xl rounded-lg font-semibold hover:bg-green-hover hover:scale-105 hover:transition duration-700 ease-in-out "
                >
                Confirm
                </button>
        {open && (
            <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Close popup on backdrop click
            >
                
            <div class="bg-white rounded-2xl shadow-lg p-6 w-96 relative text-center">
              {/* <!-- Close Button --> */}
              <button class="absolute top-4 right-4 text-blue-900 text-xl font-bold" onClick={() => setOpen(false)}>
                &times;
              </button>
              {/* <!-- Title --> */}
              <h2 class="text-2xl font-semibold text-blue-900">Booking Confirmed!</h2>
              {/* <!-- Subtitle --> */}
              <p class="text-gray-700 mt-4">
                Your room booking has been successfully completed.
              </p>
              
              <div class="mt-6">
                
              </div>
            </div>
            </motion.div>
          
        )}
    </div>

  )
}

export default PopupConfirmed
