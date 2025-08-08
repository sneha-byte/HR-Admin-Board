import { useState } from 'react'
import './App.css'
import menuItems from './menuItems';
import SearchBar from "./SearchBar";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4">
        <h1 className="text-3xl justify-center font-bold ml-10 mb-12 mt-8">HR</h1>
        <ul className="space-y-4 ">
          <p className="text-xs text-gray-400 mb-4"> MAIN MENU </p>
          {menuItems.slice(0, 5).map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.image}
              <span className='text-xl'>{item.tag}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <ul className="space-y-4">
            <p className="text-xs text-gray-400 mb-4">SETTINGS</p>
            {menuItems.slice(5).map((item, index) => (
              <li key={index + 5} className="flex items-center space-x-2">
                {item.image}
                <span className='text-xl'>{item.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-8 ">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <div class="border-t-2 mb-7 border-gray-300 border-1.4 -mt-4 w-full"></div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-white p-5 rounded-2xl shadow">
            <p className="text-lg font-bold mb-2">Available Position</p>
            <p className="text-3xl text-black mb-2">24</p>
            <p className="text-sm text-red-500">4 Urgently needed</p>
          </div>
          <div className="bg-white p-4 shadow rounded-2xl">
            <p className="text-lg font-bold mb-2">Job Open</p>
            <p className="text-3xl text-black mb-2">10</p>
            <p className="text-sm text-blue-400">4 Active hiring</p>
          </div>
          <div className="bg-white  p-4 rounded-2xl shadow">
            <p className="text-lg font-bold mb-2">New Employees</p>
            <p className="text-3xl text-black mb-2">24</p>
            <p className="text-sm text-pink-400">4 Department</p>
          </div>
          <div className="bg-white  p-4 rounded-2xl shadow">
            <p className="text-lg font-bold mb-2">Total Employees</p>
            <p className="text-3xl text-black mb-2">24</p>
            <p className="text-sm text-orange-400">4 Department</p>
          </div>
          <div className="bg-white  p-4 rounded-2xl shadow">
            <p className="text-lg font-bold mb-2">Number of Leave</p>
            <p className="text-3xl text-black mb-2">24</p>
            <p className="text-sm text-teal-400">4 Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

