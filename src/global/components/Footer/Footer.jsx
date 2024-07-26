
export default function Footer() {
    return(

        <footer className="bg-dark text-white">
        <div className="container-lg p-2">
            
            <div className="row g-0 justify-content-between me-3">
                <div className="col-5  mx-lg-0 col-lg-2 d-flex flex-column gap-2 order-sm-1 order-lg-1">
                    <p className="m--2" >oDEon <br/>
                    A Debreceni Egyetem Színháza</p>
                    <p className="m-0">All rights reserved</p>
                </div>

                <div className="col-12 col-lg-1 order-3 ms-5 ps-5">
                    <img src="../media/img/logo-main-feher.png" alt="oDEon - A Debreceni Egyetem Színháza"/>
                </div>

                <div className="col-5 mx-lg-0 col-lg-2 order-2 order-lg-3">
                    <nav>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link text-white p-0 " aria-current="page" href="#">e-mail: odeon@zenetheatrum.hu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white p-0" href="#">4032 Debrecen, Böszörményi út 138.</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    </footer>

    );
}