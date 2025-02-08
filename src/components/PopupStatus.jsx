import React , { useState }from 'react'
import {motion} from 'framer-motion'
function PopupStatus() {
    const [open,setOpen] = useState(false);

    
  return (

    <div className="flex flex-col items-center justify-center mx-1">
      <button onClick={() => setOpen(true)} className="mt-4 px-4 py-2 bg-red-button text-white rounded-lg shadow-3xl hover:bg-red-950 hover:transition duration-700 ease-in-out ">
                  Delete
        </button>
        {open && (


            <div>
                 <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)} // Close popup on backdrop click
        >

                    <div class="bg-white rounded-2xl shadow-lg p-6 w-xl h-40 text-center">
                        <h2 class="text-xl font-semibold text-blue-900">
                        Are you sure you want to <span class="text-red-button">delete</span> this booking?
                        </h2>
                        <div class="flex justify-center space-x-4 mt-6">
                        <button class="px-6 py-2 border border-blue-900 rounded-lg text-secondary font-semibold hover:bg-blue-100 hover:scale-105 hover:transition duration-700 ease-in-out" onClick={() => setOpen(false)}>
                            Cancel
                        </button>
                        <button class="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-blue-950 hover:scale-105 hover:transition duration-700 ease-in-out" onClick={() => setOpen(false)}>
                            OK
                        </button>
                        </div>
                    </div>
        </motion.div>
                
                
            </div>
        )}
    </div>

  )
}

export default PopupStatus
