

import {TiSocialTwitter } from 'react-icons/ti';
import {AiFillFacebook, AiOutlineInstagram} from 'react-icons/ai'
import ButtonOrange from "./ButtonOrange";

export default function Footer(){


    return(
        <div className=" bg-footer-bg  px-12 bottom-0 right-0 left-0 p-8 "> 
            <div className=" grid grid-cols-10 ">
                <div className="col-span-6">
                    {/* main column subjects - col head */}
        <div className="grid grid-cols-4 grid-rows-1 gap-5 mt-10 ml-12 max-w-7xl  text-foot-col-head">
                <h1 className="uppercase">Solutions</h1>
                <h1 className="uppercase">Resources</h1>
                <h1 className="uppercase">Company</h1>
                <h1 className="uppercase">Help</h1>
         </div>
                {/* footer links */}
        <div className="grid grid-cols-4 grid-rows-1 gap-5 mt-5 ml-12 max-w-7xl text-foot-col-p cursor-pointer">
                        <a>Screen Sharing</a>
                        <a>Pricing</a>
                        <a>About</a>
                        <a>Support</a>
                        <a>Marketing</a>
                        <a>Documentation</a>
                        <a>Blog</a>
                        <a>Training</a>
                        <a>Commerce</a>
                        <a>Guides</a>
                        <a>Jobs</a>
                        <a>Tutorials</a>
                        <a>Insights</a>
                        <a>API Status</a>
                        <a>Press</a>
        </div>
        </div>

        {/* right footer column */}

        <div className="col-span-3 mt-10">
                    <h1 className="uppercase text-foot-col-head">Subscribe to our newsletter</h1>
                    <h2 className="mb-5 text-foot-col-p">Get the latest news, articles, and resources, sent to your inbox every week.</h2>

                    <div className="inline-block">
                    <input className="px-1 p-2 rounded-md mr-5 text-xs sm:text-lg" placeholder="Email"/>
                    <ButtonOrange>Subscribe</ButtonOrange>
            </div>
            </div>
        </div>
         
     {/* bottom copywright and social media */}
     <hr className="m-12 opacity-25 text-foot-col-p"/>
            <div className="flex justify-between space-between text-foot-col-p">
                <h3 className="ml-12"> &copy; Acme, Inc. All rights reserved.</h3>

            <div className="flex flex-row text-foot-col-p  text-3xl w-1/6 justify-evenly">
                        <AiFillFacebook  />
                        <TiSocialTwitter />
                        <AiOutlineInstagram/>
                
            </div>
         </div>
       </div>
    )
}