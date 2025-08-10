import { useState } from 'react'
import './App.css'
import menuItems from './menuItems';
import SearchBar from './SearchBar.jsx';
import MyChart from './MyChart.jsx';
import Announcements from './announcements.jsx';
import MyPieChart from './TaskChart.jsx';
import Tasks from './tasks.jsx';
import { BellDot, MessageSquareMore, UserPen, ChevronDown } from 'lucide-react';


function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100 text-black overflow-y-auto">
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
        {/* Search + Icons container */}
        <div className="flex items-center justify-between mb-6">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 outline-none bg-transparent"
          />

          <div className="flex items-center -mt-6 space-x-6 ml-6">
            <BellDot className="text-gray-400" size={25} />
            <MessageSquareMore className="text-gray-400" size={25} />
            <UserPen className="text-gray-400" size={25} />
            <ChevronDown className="text-gray-400" size={25} />
          </div>
        </div>

        <div class="border-t-2 mb-7 border-gray-300 border-1.4 -mt-4 w-full"></div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-5 gap-5 pr-6">
          <div className="bg-white p-4 rounded-2xl shadow">
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
        <div className='flex flex-row justify-between mt-1'>
          <div className="w-162 h-82 bg-white mt-7 pl-4 pt-5 rounded-2xl shadow">
            <MyChart />
          </div>
          <div className="flex-1 bg-white mt-7 ml-5 mr-5 p-4 rounded-2xl shadow h-82">
            <div className="flex flex-row items-center justify-between mb-4">
              <h2 className="text-lg font-bold mb-0">Announcements</h2>
              <p className="text-sm text-gray-500 mr-2">Date</p>
            </div>
            <ul className="space-y-4 max-h-57 overflow-y-auto pr-2.5">
              {/*Map through announcements and display each one in a flex row box*/}
              {Announcements.map((announcement, index) => (
                <li key={index} className="flex flex-row justify-between items-center border border-gray-200 p-2 rounded-lg">
                  <div>
                    <p className="text-sm font-semibold">{announcement.text}</p>
                    <p className="text-xs text-gray-500">{announcement.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MessageSquareMore size={20} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-2.5 mb-2.5">
              <button className="text-red-500 hover:text-red-700 text-sm font-semibold">
                View All Announcements
              </button>
            </div>
          </div>
        </div >
        <div className="flex gap-5">
          {/* Left column: Task list */}
          <div className="w-162 mt-8 flex flex-col gap-4">
            {Tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow p-5 flex flex-col gap-2"
              >
                {/* Row 1: ID & Reminder */}
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-base font-semibold text-gray-900">{task.id}</h3>
                  <span className="text-sm text-gray-500">{task.tag}</span>
                </div>

                {/* Row 2: Due Date */}
                <p className="text-sm text-gray-500 pb-3">
                  Due date:{" "}
                  <span className="font-medium text-gray-700">{task.Due_Date}</span>
                </p>

                {/* Row 3: Avatar, Assigned By, Status */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={task.avatar}
                      alt={task.Assigned_By}
                      className="w-5 h-5 rounded-full"
                    />
                    <span className="text-sm text-gray-700">{task.Assigned_By}</span>
                  </div>

                  <span
                    className={`px-3 py-1 text-xs rounded-md font-medium ${task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: Pie chart & stats */}
          <div className="w-105 bg-white rounded-2xl shadow p-8 h-110 mt-8 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-4 -mt-6 w-full text-left ">Tasks</h2>
            <div className="border-t-2 mb-4 border-gray-200 border-0.2 w-105"></div>
            <div className="w-full flex mt-2 justify-center items-center" style={{ height: 288, maxHeight: 320 }}>
              <div style={{ width: 500, height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MyPieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
