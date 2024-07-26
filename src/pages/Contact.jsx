import React from "react";
import "../assets/css/contact.css";

export default function Contact() {

    return (
         <div className="page-content container">
            
            <main>               
                <div >                  
                    <div className="container-lg p-2">
                
                        <div className="contact-text">
                            <div>
                                <p className="m-2 fs-2" >oDEon <br/>
                                A Debreceni Egyetem Színháza</p>
                                <p className="fs-4">4032 Debrecen, Böszörményi út 138.</p>
                            </div>       
                            
                            <a className="image-link" href="index.html" >
                                <img src="../media/img/logo-main-fekete.png"  alt="oDEon - A Debreceni Egyetem Színháza"/>
                            </a>
                            
                            <div className="me-5">       
                                <p className="fs-5 me-3">e-mail címünk:</p>
                                <a className="fs-5" aria-current="page" href="#">odeon@zenetheatrum.hu</a>
                            </div>                                
                            
                        </div>
        
                    </div>
                    
                    <div className="col-12 d-flex mt-5">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.9558033669396!2d21.612105980732775!3d47.54918891645489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474713e0e6d2e299%3A0xa57c242aab7e7da4!2sOdeon%20sz%C3%ADnh%C3%A1z%20-%20Debreceni%20Egyetem%20Argr%C3%A1rtudom%C3%A1nyi%20Centrum!5e0!3m2!1shu!2shu!4v1718101574815!5m2!1shu!2shu" 
                        width="1320" 
                        height="774" 
                        //style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>                      
                </div>               
            </main>
        </div>
    )
}
