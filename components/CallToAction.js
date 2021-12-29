
import ButtonBlue from "./ButtonBlue";
import ButtonOrange from "./ButtonOrange";


export default function CallToAction(){

    return(
        <div>
        <div className="grid grid-cols-8 bg-hero-bg p-24">
          <div className="col-span-5 text-5xl font-bold ml-24 ">
       
             <h1 className=" text-head-blk ">Ready to start?</h1> 
            <h1  className=" text-accent-orng">Sign up for free today.</h1>
            </div>
            <div className="col-span-3 space-x-5">
            <ButtonOrange>Try it free</ButtonOrange>
            <ButtonBlue>Learn More</ButtonBlue>
            </div>

            </div>
            </div>







        
       
    )
}