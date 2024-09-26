import React from "react";
import AccountNav from "../accountNav/accountNav";
import "./Mentor.css";

function MentorAccount() {
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
              <li className="pb-3">
                September 28, 10:00 AM (With Mentor Name)
              </li>
              <li className="pb-3">October 5, 1:30 PM (With Mentor Name)</li>
              <li className="pb-3">October 12, 4:00 PM (With Mentor Name)</li>
            </ul>
          </div>
          <div className="col-span-2 p-10 bg-white rounded-lg custom-shadow mt-7">
            <h1 className="text-2xl font-bold mb-6">Mentor Skills</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorAccount;
