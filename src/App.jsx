import { useState } from 'react'
import { LayoutDashboard } from 'lucide-react';
import {UserStar} from 'lucide-react';
import {CalendarRange} from 'lucide-react';
import {Users} from 'lucide-react';
import {CircleUserRound} from 'lucide-react';
import {Headset} from 'lucide-react'; 
import {Settings} from 'lucide-react';
import './App.css'
import menuItems from './menuItems';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4">
        <h1 className="text-3xl justify-center font-bold ml-10 mb-14 mt-8">ITHR</h1>
        <ul className="space-y-4 ">
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              {item.image}
              <span>{item.tag}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 ">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white border p-4 rounded shadow">
            <p className="text-lg font-bold">Available Position</p>
            <p className="text-3xl text-blue-600">24</p>
            <p className="text-sm text-red-500">4 Urgently needed</p>
          </div>
          <div className="bg-white border p-4 rounded shadow">
            <p className="text-lg font-bold">Job Open</p>
            <p className="text-3xl text-blue-600">10</p>
            <p className="text-sm text-blue-400">4 Active hiring</p>
          </div>
          <div className="bg-white border p-4 rounded shadow">
            <p className="text-lg font-bold">New Employees</p>
            <p className="text-3xl text-purple-600">24</p>
            <p className="text-sm text-pink-400">4 Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;