import React, {useState} from 'react'
import Nav from '../components/Semantic/Nav'
import Footer from '../components/Semantic/Footer'
import Dropdown from '../components/Dropdown';
import { CalendarIcon } from "lucide-react";
function Report() {
  const [matchType, setMatchType] = useState("Lecturer");
  const [output, setOutput] = useState("Report");
  const [format, setFormat] = useState("HTML");
  const [sortBy, setSortBy] = useState("Room");
  const [summarizeBy, setSummarizeBy] = useState("Brief description");

  return (
    <div>
      <Nav/>
      <div className="flex justify-center min-h-screen bg-gray-100 p-6">
      <div className="p-6 w-full max-w-7xl bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-primary mb-4">Report on Meetings</h2>
        <div className="grid grid-cols-2 gap-x-60">
          {/* Search Criteria */}
          <div className='my-4'>
            <h3 className="font-semibold my-3 text-2xl">Search criteria</h3>
            <label className="block">Report start date</label>
            <div className="relative flex items-center border rounded-lg px-3 py-2 w-full mb-4">
              <CalendarIcon className="text-gray-500 mr-2" />
              <input type="text" placeholder="MM/DD/YY" className="w-full outline-none bg-transparent " />
            </div>
            <label className="block">Report end date</label>
            <div className="relative flex items-center border rounded-lg px-3 py-2 w-full mb-4">
              <CalendarIcon className="text-gray-500 mr-2" />
              <input type="text" placeholder="MM/DD/YY" className="w-full outline-none bg-transparent" />
            </div>
            <label className="block">Match area</label>
            <select className="border rounded px-2 py-1 w-full mb-4 h-10">
              <option value="">Select an area</option>
            </select>
            <label className="block">Match room</label>
            <select className="border rounded px-2 py-1 w-full mb-4 h-10">
              <option value="">Select a room</option>
            </select>
            <label className="block mb-4">Match type</label>
            <div className="flex gap-2">
              {['Lecturer', 'Student', 'LF', 'Staff'].map((type) => (
                <label key={type} className="flex items-center mb-4">
                  <div className='border-1 p-2 rounded-xl w-28 '>
                  <input type="radio" name="matchType" value={type} checked={matchType === type} onChange={() => setMatchType(type)} className='mr-2' />
                  {type}
                  </div>
                </label>
              ))}
            </div>
            <label className="block">Match brief description</label>
            <input type="text" className="border rounded px-2 py-1 w-full mb-4 h-10" />
            <label className="block">Match full description</label>
            <input type="text" className="border rounded px-2 py-1 w-full mb-4 h-10" />
            <label className="block">Created by</label>
            <input type="text" className="border rounded px-2 py-1 w-full mb-4 h-10" />
          </div>
          {/* Output Options */}
          <div>
            <h3 className="font-semibold text-2xl my-8">Output options</h3>
            <label className="block">Output</label>
            <div className="flex gap-2">
              {['Report', 'Summary'].map((opt) => (
                <label key={opt} className="flex items-center">
                  <div className='border-1 p-2 rounded-2xl '>
                  <input type="radio" name="output" value={opt} checked={output === opt} onChange={() => setOutput(opt)} className='mx-2' />
                  {opt}
                  </div>
                </label>
              ))}
            </div>
            <label className="block">Format</label>
            <div className="flex gap-2">
              {['HTML', 'CSV', 'iCalendar'].map((fmt) => (
                <label key={fmt} className="flex items-center">
                  
                  <div className='border-1 p-2 rounded-2xl '>
                  <input type="radio" name="format" value={fmt} checked={format === fmt} onChange={() => setFormat(fmt)} className='mx-2' />
                  {fmt}
                  </div>
                </label>
              ))}
            </div>
            <label className="block">Sort report by</label>
            <div className="flex gap-2">
              {['Room', 'Start Date/Time'].map((sort) => (
                <label key={sort} className="flex items-center">
                  
                  <div className='border-1 p-2 rounded-2xl '>
                  <input type="radio" name="sortBy" value={sort} checked={sortBy === sort} onChange={() => setSortBy(sort)} className='mx-2' />
                  {sort}
                  </div>
                </label>
              ))}
            </div>
            <label className="block">Summarize by</label>
            <div className="flex gap-2">
              {['Brief description', 'Creator', 'Type'].map((summary) => (
                <label key={summary} className="flex items-center">
                  
                  <div className='border-1 p-2 rounded-2xl '>
                  <input type="radio" name="summarizeBy" value={summary} checked={summarizeBy === summary} onChange={() => setSummarizeBy(summary)} className='mx-2' />
                  {summary}</div>
                </label>
              ))}
            </div>
            <button className="mt-14 w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-secondary">Run Report</button>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Report
