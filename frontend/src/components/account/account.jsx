import React from "react";
import AccountNav from "./accountNav/accountNav";

function Account() {
  return (
    <div className="min-h-screen flex flex-col">
      <AccountNav />
      <div className="flex flex-1 items-center justify-center">
        <div className="grid grid-cols-2 gap-x-8 p-8 w-full max-w-6xl">
          <div className="p-10 min-h-[300px] bg-white rounded-lg custom-shadow">
            <h1 className="text-2xl font-bold mb-6">Account Information</h1>
            <p className="pb-3">
              <strong>UserName:</strong> JohnDoe
            </p>
            <p>
              <strong>Email:</strong> johndoe@example.com
            </p>
          </div>
          <div className="p-10 min-h-[300px] bg-white rounded-lg custom-shadow">
            <h1 className="text-2xl font-bold mb-6">Appointment Times</h1>
            <ul>
              <li className="pb-3">September 28, 10:00 AM</li>
              <li className="pb-3">October 5, 1:30 PM</li>
              <li className="pb-3">October 12, 4:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
