import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../global/layout/DefaultLayout";
import CheckoutPage from "../pages/CheckoutPage";
import Homepage from "../pages/Homepage/Homepage";
import showsData from "../assets/showsData.json";
import Tickets from "../global/components/Tickets";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Account from "../pages/Account";
import Performances from "../pages/Performances";
import { showDataLoader } from "../global/api/showDataLoader";


const router = createBrowserRouter([
    {
        
        path: '/',
        element: <DefaultLayout/>,
        children: [            
            {
                index: true,
                element: <Homepage/>   
                
            },            
            {   
                path: 'odeon',
                element: <Homepage/>,
                
            },            
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'performances',
                element: <Performances/>
            },
            {
                path: 'account',
                element: <Account />
            },
            {
                path: 'odeon/tickets/:showsId?',
                //element: <Tickets showsData={showsData}/>,
                element: <Tickets />,
                loader: showDataLoader,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />,
              }
        ]
    }  

])

export default router;
