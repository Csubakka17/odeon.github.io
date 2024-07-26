import { Link } from 'react-router-dom';
import './header.css';
import CartIcon from '../../components/CartIcon';

export default function Header() {
    
    return(
       
    <header>
            <nav className="nav-menu container-lg border-bottom border-3 shadow-lg mb-3 bg-body-tertiary rounded " id="nav">
                    
                <Link className="image-link" to="/">
                    <img src="../media/img/logo-main-fekete.png" alt="oDEon - A Debreceni Egyetem Színháza" />
                </Link>           

                <div className="nav-menu-btn button-bar">
                    
                    <div>
                        <Link to="/" className="btn btn-primary btn-lg">
                            Kezdőoldal
                        </Link>
                                        
                        <Link to="/about" className="btn btn-primary btn-lg mx-2">
                            Rólunk 
                        </Link>
                            
                        <Link to="/contact" className="btn btn-primary btn-lg ">
                            Kapcsolat 
                        </Link> 
                        
                        <button className="btn btn-primary rounded-pill btn-lg ms-2" >
                            Bérletvásárlás
                        </button> 

                        <Link to="/performances" className="btn btn-primary rounded-pill btn-lg ms-2">
                            Előadásaink
                        </Link>
                    </div>                    
                </div>
                <div>
                    <Link to="/account" className="btn btn-primary btn-lg ms-2">
                        Fiókom
                    </Link>

                    <CartIcon />                    
                      
                </div> 

            </nav>

    </header>
      
    );
}

/*
    <Link to="/cart" className="btn btn-primary btn-lg ms-2 cart-link">
    🛒 Kosár
    </Link>
    <CartIcon />
*/