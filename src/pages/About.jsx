import React from "react";
import "../assets/css/about.css";


export default function About() {

    return (
       
    <div className="page-content container">            
        <main>                
            <div className="about">                  
                <div>
                    <img src="../media/img/about.jpg" alt="about"/>
                </div>

                <article className="about-text">
                        <a className="fs-1 text-light fw-semibold text-decoration-none"> Kik vagyunk?</a>
                    A Debreceni Egyetem Színháza különleges hangsúlyt fektet a kortárs darabok bemutatására, valamint a helyi és nemzetközi művészek és alkotók támogatására. Az oDEon Színház gyakran szervez workshopokat, előadásokat és más interaktív programokat, amelyek célja a közönség bevonása és a kulturális tudatosság növelése.
                    <br/><br/>
                    Az épület maga modern tervezésű, és jól felszerelt, hogy kényelmes és élvezetes élményt nyújtson a látogatóknak. Az oDEon Színház fontos szerepet tölt be Debrecen kulturális életében, hozzájárulva a város művészeti és kulturális sokszínűségéhez.

                    <div>
                        <img src="../media/img/logo-main-feher.png" alt="oDEon - A Debreceni Egyetem Színháza"/>

                    </div>                        
                </article>                    
            </div>
        </main>
    </div>
    )
}
