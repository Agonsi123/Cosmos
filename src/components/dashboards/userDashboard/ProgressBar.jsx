import * as Progress from "@radix-ui/react-progress";


const ProgressIndicator = ({progress}) => {

    return <Progress.Root className="relative w-full bg-[#F2F7FF] rounded-full overflow-hidden h-3" value = {progress}>
		<Progress.Indicator   className="bg-[#1BA019] h-full transition-all duration-300"
        style={{ width: `${progress}%` }} />
	</Progress.Root>
}

export default ProgressIndicator
    

