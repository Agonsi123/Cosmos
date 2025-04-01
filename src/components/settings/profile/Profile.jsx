import React from "react";
import pic from "../../../assets/picc.jpeg";
const Profile = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="flex  w-full justify-between">
          <div className="flex gap-4 items-center">
            <div>
              <img className="h-10 w-10 rounded-full" src={pic} alt="pic" />
            </div>
            <div>
              <h1>Profile Picture</h1>
              <p className="text-xs text-[#1E1E1ECC]">PNG.JPEG under 20mb</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="border-[#6B911B] border px-2 py-1 text-[#6B911B]">
              Change Profile
            </button>
            <button className="text-[#6B911B]">Remove</button>
          </div>
        </div>
      </div>
      <form action="">
        <h1 className="font-sanns text-xl font-medium py-3">
          Edit Profile Information
        </h1>

        <div>
          <label htmlFor="fname">Full Name</label>
          <input
            className="border w-full py-1 rounded-md my-1"
            type="text"
            name="fname"
            id="fname"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            className="border w-full py-1 rounded-md my-1"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Current PassWord</label>
          <input
            className="border w-full py-1 rounded-md my-1"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="newpassword">New PassWord</label>
          <input
            className="border w-full py-1 rounded-md my-1"
            type="password"
            name="newpassword"
            id="newpassword"
          />
        </div>

        <div className="flex py-4 gap-2">
          <button className="bg-bgGray py-1 px-3 rounded-md text-white">
            Save Changes
          </button>
          <button className="text-red-500">Delete Account</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
