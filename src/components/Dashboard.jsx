import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0D021E] text-white min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="p-6 text-center bg-[rgba(16,4,37,1)] shadow-md">
        <h1 className="text-xl font-bold">Welcome back, <span className="text-blue-400">[User]</span>!</h1>
        <p className="text-gray-400 text-sm mt-1 animate-pulse bg-gray-800 w-full">
          You have <span className="text-blue-300">3</span> upcoming events this week!
        </p>
      </header>

      <div className="flex flex-1">
        <img src={logo} alt="logo" className="rounded-md w-[7rem] h-[7rem] "/>
       {/* Sidebar */}
<aside className="w-1/5 min-h-[35rem] bg-[#120A28] p-6 flex flex-col ">
  {/* Navigation Links */}
  <nav className="flex-1">
    <ul className="space-y-2">
      <li className="bg-gray-600 rounded-lg">
        <a href="#" className="flex items-center p-3 space-x-2">
          <span className="text-white">🏠</span>
          <span className="text-white font-semibold">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-3 hover:bg-gray-700 space-x-2 rounded-lg">
          <span className="text-white">👥</span>
          <span className="text-white font-semibold">Members</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center text-center space-x-2 p-3 hover:bg-gray-700 rounded-lg">
          <span className="text-white">📅</span>
          <span className="text-white font-semibold">Events</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-3 hover:bg-gray-700 space-x-2 rounded-lg">
          <span className="text-white">📂</span>
          <span className="text-white font-semibold">Resources</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center p-3 hover:bg-gray-700 space-x-2 rounded-lg">
          <span className="text-white">🏆</span>
          <span className="text-white font-semibold">My Clubs</span>
        </a>
      </li>
    </ul>
  </nav>

  {/* Settings at Bottom */}
  <div className="mt-auto">
    <a href="#" className="flex items-center p-3 text-gray-400 hover:text-white">
      <span className="text-xl">⚙️</span>
      <span className="font-semibold">Settings</span>
    </a>
  </div>
</aside>


  

        {/* Main Dashboard Content */}
        <main className="flex-1 p-10 m-auto ml-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clubs Joined */}
            <div className="bg-[#1A0B38] p-6 rounded-lg shadow-md max-w-72 h-[13rem]">
              <h3 className="text-lg font-semibold text-center">Clubs Joined</h3>
              <p className="text-gray-400 text-center">[X] Clubs</p>
              <button className="item-center relative left-[4.5rem] mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-center">Join Now</button>
            </div>

            {/* Credits Earned */}
            <div className="bg-[#1A0B38] p-6 rounded-lg shadow-md text-center max-w-72 h-[13rem]">
              <h3 className="text-lg font-semibold text-center">Credits Earned</h3>
              <p className="text-gray-400 text-center">[XX] Points</p>
              <button className="mt-4 bg-blue-500 px-4 py-2 rounded-lg  hover:bg-blue-600">Redeem Items</button>
            </div>

            {/* Upcoming Event */}
            <div className="bg-[#1A0B38] p-6 rounded-lg shadow-md text-center max-w-72 h-[13rem]">
              <h3 className="text-lg font-semibold text-center">Upcoming Event</h3>
              <p className="text-gray-400 text-center">Event Name: XYZ</p>
              <p className="text-gray-400 text-center">Event Date: 25th March</p>
              <button className="mt-4 bg-blue-500  px-4 py-2 rounded-lg hover:bg-blue-600">Save the date</button>
            </div>

            {/* Leaderboard */}
            <div className="bg-[#1A0B38] p-6 rounded-lg shadow-md text-center max-w-72 h-[13rem]">
              <h3 className="text-lg font-semibold text-center">Leaderboard Rank</h3>
              <ol className="list-decimal ml-4 text-gray-400 text-center">
                <li>User1</li>
                <li>User2</li>
                <li>User3</li>
              </ol>
              <p className="mt-2 font-bold text-blue-400">Your Rank: X</p>
            </div>
          </div>
        </main>

        {/* Announcements & Chat */}
        <aside className="w-1/4 bg-[#1A0B38] p-6 flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">📢 Announcements</h3>
          <input type="text" placeholder="Search..." className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none" />
          <div className="space-y-2">
            <button className="bg-gray-700 p-3 rounded-lg w-full text-left hover:bg-gray-600">Announcement 1...</button>
            <button className="bg-gray-700 p-3 rounded-lg w-full text-left hover:bg-gray-600">Announcement 2...</button>
            <button className="bg-gray-700 p-3 rounded-lg w-full text-left hover:bg-gray-600">Announcement 3...</button>
          </div>

          {/* Chat */}
          <div className="mt-auto">
            <input type="text" placeholder="Message..." className="p-2 w-full rounded-lg bg-gray-800 text-white focus:outline-none" />
            <button className="w-full bg-blue-500 p-2 mt-2 rounded-lg">Send</button>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-400 bg-[rgba(16,4,37,1)]">
        Copyright © 2025 Techno Clubs Portal
      </footer>
    </div>
  );
};

export default Dashboard;
