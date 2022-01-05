

export default function FeaturesSection(){
    return(
        <div>

            {/* Features Header section */}
            <div className="text-center mt-36">
                <h3 className=" text-nav-link font-medium text-lg mb-2">
                    Features
                    </h3>
                <h1 className="font-bold text-4xl mb-4">
                    A better way to work together
                    </h1>

                <p className="text-p-grey font-normal text-xl">
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam 
                <br /> voluptatum cupiditate veritatis in accusamus quisquam.
                </p>
            </div>

 {/* feature bullet points */}

            <div className="grid grid-cols-2">
               {/* left column features */}
                <div className="col-span-1 p-24 pl-48">
                    <div className="grid grid-cols-5 mb-5">
                        <img className="col-span-1" src='/icon-f1.png'/>
                        <div className="col-span-4">
                        <h1 className="font-semibold mb-3">Communicate in realtime</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores 
                            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-5">
                        <img className="col-span-1" src='/icon-f2.png'/>
                        <div className="col-span-4">
                        <h1 className="font-semibold mb-3">Avoid costly revisions</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores 
                            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                    </div>


  {/* right column features */}


                </div>
                    <div className="col-span-1 p-24 pr-48">
                    <div className="grid grid-cols-5 mb-5">
                            <img className="col-span-1" src='/icon-f3.png'/>
                            <div className="col-span-4">
                            <h1 className="font-semibold mb-3">Do your best work</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores 
                                impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                        </div>
                        <div className="grid grid-cols-5">
                            <img className="col-span-1" src='/icon-f4.png'/>
                            <div className="col-span-4">
                            <h1 className="font-semibold mb-3">Everything in one place</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores 
                                impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}