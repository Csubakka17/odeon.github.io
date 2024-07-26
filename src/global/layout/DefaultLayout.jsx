import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './default-layout.css';


export default function DefaultLayout() {
    
    return (
        <div className="default-layout">
        
        <Header />

        <Outlet/>

        <Footer/>
        </div>
        
        
                
       
        
    );
}