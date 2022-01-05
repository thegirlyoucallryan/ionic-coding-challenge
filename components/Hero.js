
import ButtonBlue from "./ButtonBlue";
import ButtonOrange from "./ButtonOrange";


export default function Hero(){
    return(
        
        <div className="grid grid-cols-4 lg:grid-cols-7 w-full top-0  sm:grid-cols-6">
            {/* headline */}
                <div className="col-span-4 sm:col-span-5 lg:text-7xl  md:text-4xl sm:text-2xl font-bold  bg-hero-bg">
                            <div className="p-2 px-24 sm:p-5 sm:px-56  mt-36 ">
                            <h1 className=" text-head-blk ">Your best work.</h1> 
                            <h1  className=" text-accent-orng">Done Together.</h1>
                            <p className="text-p-grey font-medium text-xs  md:text-xl mt-5">
                            Build better a business, faster. Start sharing your work <br /> across your company--in realtime.
                            </p>
                            <div className="flex space-x-5 mt-10 ">
                            <ButtonOrange onClick={()=>{}} >Try it free</ButtonOrange>
                            <ButtonBlue className="ml-5" >download</ButtonBlue>
                            </div>
                            </div>

                        </div>

                    {/* image */}
        <div className="col-span-0 sm:col-span-2">
                    <img className="w-fit" src="/image.jpg" />
            </div>

        </div>
    )
}