
import Navbar from "../components/NavBar"; 
import Footer from "./Footer";

export default function Layout({children}){
    return(
        <div>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}