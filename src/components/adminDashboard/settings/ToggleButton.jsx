import React, {useState} from 'react';


const ToggleButton = () => {
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => {
        setIsEnabled((prev) => !prev);
    };

  return (
    <div
      className={`w-16 h-8 rounded-3xl flex items-center px-1 cursor-pointer transition-colors duration-300 ${
        isEnabled ? " bg-[#27ae60] justify-end" : "bg-white justify-start shadow-xl"
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`w-7 h-7 rounded-full transition-colors duration-300 ${
          isEnabled ? "bg-white" : "bg-[#27ae60]"
        }`}
      ></div>
    </div>
  );
}

export default ToggleButton