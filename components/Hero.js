
import ButtonBlue from "./ButtonBlue";
import ButtonOrange from "./ButtonOrange";


export default function Hero(){
    return(
        
        <div className="grid grid-cols-6 w-full top-0 ">
                <div className="col-span-4 text-7xl font-bold  bg-hero-bg">
                            <div className="p-5 px-56  mt-36 ">
                            <h1 className=" text-head-blk ">Your best work.</h1> 
                            <h1  className=" text-accent-orng">Done Together.</h1>
                            <p className="text-p-grey font-medium text-xl mt-10">
                            Build better a business, faster. Start sharing your work <br /> across your company--in realtime.
                            </p>
                            <div className="flex space-x-5 mt-10 ">
                            <ButtonOrange onClick={()=>{}} >Try it free</ButtonOrange>
                            <ButtonBlue className="ml-5" >download</ButtonBlue>
                            </div>
                            </div>

                        </div>
        <div className="col-span-2">
                    <img src="/image.jpg" />
            </div>

        </div>
    )
}