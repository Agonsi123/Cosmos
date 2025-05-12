const Track = ({track}) => {
    return <div className="flex font-sanns ">
      <div className="relative">
        <img className="]" src={track.image} alt={track.image} />
        <div className="w-[2px] h-8 bg-[#00000012] absolute top-6 left-2"></div>
      </div>
      <div className="px-2">
        <h1 className="text-[#1E1E1E] font-medium text-sm">{track.title}</h1>
        <p className="text-xs font-normal text-[#00000080]">{track.p}</p>
        <p className="text-xs font-normal text-[#00000080]">{track.x}</p>
      </div>
      <div>
        <p className="text-[13px] font-normal text-[#0000004F]">{track.time}</p>
      </div>
    </div>
  }
  
  export default Track