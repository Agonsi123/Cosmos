import React, { useState } from 'react';
import Face2 from '../../../assets/Face2.jpg';
import person from '../../../assets/person.svg';
import mail from "../../../assets/mail.svg";
import lock from "../../../assets/lock.svg";
import eyeClosed from "../../../assets/eyeClosed.svg";

const ProfileManage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Face2} alt="avatar" className="w-24 h-24 rounded-full" />
          <div className="font-sanns">
            <h6 className="font-semibold text-base text-[#1e1e1e]">Profile Picture</h6>
            <p className="font-normal text-sm text-[#1e1e1e80]">PNG.JPEG under 20mb</p>
          </div>
        </div>
        <div className="flex gap-3 font-sanns font-medium text-base">
          <button className="py-1.5 px-2.5 text-[#6b911b] border border-[#6b911b] rounded">
            Change Profile
          </button>
          <button className="py-1.5 px-2.5 text-[#6b911b67]">Remove</button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-sanns font-medium text-xl text-[#1e1e1e]">Edit Profile Information</h3>
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 font-sanns font-normal">
            <label htmlFor="fullName" className="text-base text-[#1e1e1e]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="border border-[#e5e7eb] bg-white py-3.5 pl-4 rounded-lg shadow-lg placeholder:pl-6 placeholder:text-sm text-[#1e1e1e50]"
            />
            <img src={person} alt="personIcon" className="absolute top-[418px] pl-4" />
          </div>
          <div className="flex flex-col gap-2 font-sanns font-normal">
            <label htmlFor="fullName" className="text-base text-[#1e1e1e]">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="border border-[#e5e7eb] bg-white py-3.5 pl-4 rounded-lg shadow-lg placeholder:pl-6 placeholder:text-sm text-[#1e1e1e50]"
            />
            <img src={mail} alt="personIcon" className="absolute top-[525px] pl-4" />
          </div>
          <div className="flex flex-col gap-2 font-sanns font-normal">
            <label htmlFor="fullName" className="text-base text-[#1e1e1e]">
              Current Password
            </label>
            <input
              type="text"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter Current Password"
              className="border border-[#e5e7eb] bg-white py-3.5 pl-4 rounded-lg shadow-lg placeholder:pl-6 placeholder:text-sm text-[#1e1e1e50]"
            />
            <img src={lock} alt="personIcon" className="absolute top-[626px] pl-4" />
            <img src={eyeClosed} alt="personIcon" className="absolute top-[626px] right-[84px]" />
          </div>
          <div className="flex flex-col gap-2 font-sanns font-normal">
            <label htmlFor="fullName" className="text-base text-[#1e1e1e]">
              New Password
            </label>
            <input
              type="text"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter New Password"
              className="border border-[#e5e7eb] bg-white py-3.5 pl-4 rounded-lg shadow-lg placeholder:pl-6 placeholder:text-sm text-[#1e1e1e50]"
            />
            <img src={lock} alt="personIcon" className="absolute top-[732px] pl-4" />
            <img src={eyeClosed} alt="personIcon" className="absolute top-[732px] right-[84px]" />
          </div>
        </form>
      </div>
      <div className="flex gap-4 text-base font-sanns font-medium my-12">
        <button className="bg-[#6b911b] py-1.5 px-2.5 w-32 rounded text-white">Save Changes</button>
        <button className="py-1.5 px-2.5 text-[#c10606]">Delete Account</button>
      </div>
    </div>
  );
}

export default ProfileManage