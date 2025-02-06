export default function BookingForm() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <label className="block text-gray-700 font-medium">
                Subject<span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full border rounded-md p-2" />
  
              <input type="text" placeholder="Description" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Class" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Room" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Instructor" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Duration" className="w-full border rounded-md p-2 mt-2" />
  
              {/* Begin Time Picker */}
              <div className="relative mt-2">
                <label className="block text-gray-700 font-medium">Begin</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
  
            {/* Right Column */}
            <div>
              <label className="block text-gray-700 font-medium">
                Date<span className="text-red-500">*</span>
              </label>
              <input type="date" className="w-full border rounded-md p-2" />
  
              <input type="text" placeholder="Type" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Repeat every" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Repeat end date" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Created by" className="w-full border rounded-md p-2 mt-2" />
              <input type="text" placeholder="Last updated" className="w-full border rounded-md p-2 mt-2" />
  
              {/* End Time Picker */}
              <div className="relative mt-2">
                <label className="block text-gray-700 font-medium">End</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
  
          {/* Confirm Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 transition">
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    );
  }
  