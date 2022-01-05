import Link from "next/link"

export default function Navbar(){
    return(
        <div className="px-2 md:px-42 mb-24  align-baseline flow-root mt-5 h-15 text-nav-link fixed top-0 w-full  ">
            <div className="float-left">
                {/* {Left side navigation links} */}
                {/* {//logo needs transparent bkg} */}
                    <Link href='/'>
                        <img className="inline ml-56"  src='/logo.png'/>
                    </Link>

                    <Link href="/products">
                        <a className=" ml-12 ">
                            Products
                        </a>
                    </Link>
                    <Link href="/features">
                        <a className=" ml-10 mt-2">
                            Features
                        </a>
                    </Link>
                    <Link href="/enterprise">
                        <a className=" ml-10 mt-2">
                            Enterprise
                        </a>
                    </Link>
                    <Link href="/company">
                        <a className=" ml-10 mr-12 mt-5">
                            Company
                        </a>
                    </Link>
         </div>
        {/* {signin/download buttons } */}
             <div className="float-right mt-5 mr-14 inline text-white text-xs sm:text-xl text-shadow-md">

                    <Link  className="flex mr-10" href="/sign-in">
                        <a className="mr-10  hover:text-accent-orng">
                            Sign in
                        </a>
                    </Link>
                    <Link href="/download">
                        <a className=" hover:text-accent-orng">
                            Download
                        </a>
                    </Link>
             </div>
             </div>
           

     
    )
}