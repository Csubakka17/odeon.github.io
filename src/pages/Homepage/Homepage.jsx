import React from "react";
import { useNavigate } from "react-router";
import './homepage.css';
import './slide.css';
import './SliderData.js';
import SlideApp from "./SlideApp.js";
import Cards from "../../global/components/Cards.jsx";

import showsData from "../../assets/showsData.json";



export default function Homepage() {

    const navigate = useNavigate();

    const handleBuyTickets = (showId) => {
        navigate(`/odeon/tickets/${showId}`);
    };
    
    return (
        
                        
        <div className="page-content container">                   

            <main>                        
                
                <div className="slider">

                    <div>
                        <div className="slide-text ">Üdvözöljük az oDEon Színházban! <br/>
                            <div className="fs-5 mb-5">
                                Vásároljon jegyet vagy váltson egész éves bérletet hozzánk!
                            </div> 
                            <div>
                                <button 
                                className="btn btn-custom rounded-pill btn-lg mt-5"
                                href="/pages/performances.html" id="btn-5">Előadásaink
                                </button>
                                <button 
                                className="btn btn-custom rounded-pill btn-lg"
                                href="/pages/performances.html" id="btn-5">Társulat
                                </button>
                                <button 
                                className="btn btn-custom rounded-pill btn-lg "
                                href="/pages/performances.html" id="btn-5">Odeon kör
                                </button> 
                                <button 
                                className="btn btn-custom rounded-pill btn-lg "
                                href="/pages/performances.html" id="btn-5">Hírlevél
                                </button>
                                    
                            </div> 
                        </div>
                        
                    </div>

                    <div className="slider">                        
                        <SlideApp/>               
                      
                    </div>
                
                </div>                       

                <article className="d-flex flex-column show-list">                                      

                    <header>
                        <h1 className="m-5 fs-1 fw-light">KÖZELGŐ ELŐADÁSAINK</h1>  
                       
                        
                    </header>

                    
                    <div className="cards-container">
                        {showsData.reduce((rows, key, index) => {
                            if (index === 0) {
                            rows.push([key]); // Az első elem külön sorba
                            } else if (index === 1) {
                            rows[0].push(key); // A második elem hozzáadása az első sorhoz
                            } else {
                            if ((index - 2) % 3 === 0) {
                                rows.push([key]);
                            } else {
                                rows[rows.length - 1].push(key);
                            }
                            }
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <div className="row play-tiles" key={rowIndex}>
                            {row.map((card, cardIndex) => {
                                // Ha az első sor első kártyája (md-8) és második kártyája (md-4)
                                if (rowIndex === 0 && cardIndex === 0) {
                                return (
                                    <div className="col-md-8" key={card.id}>
                                    <div className="card">
                                        <img src={card.img} className="card-img-season" alt={card.alt} />
                                        <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <button className="btn btn-primary">További részletek</button>
                                        {/* <Link to="/special-link" className="btn btn-primary">További részletek</Link> */}
                                        </div>
                                    </div>
                                    </div>
                                );
                                } else if (rowIndex === 0 && cardIndex === 1) {
                                return (
                                    <div className="col-md-4" key={card.id}>
                                    <Cards
                                        cardImg={card.img}
                                        cardAlt={card.alt}
                                        cardTitle={card.title}
                                        cardDescription={card.description}
                                        linkTo={`/odeon/tickets/${card.showId}`}
                                    />
                                    </div>
                                );
                                } else {
                                return (
                                    <div className="col-md-4" key={card.id}>
                                    <Cards
                                        cardImg={card.img}
                                        cardAlt={card.alt}
                                        cardTitle={card.title}
                                        cardDescription={card.description}
                                        linkTo={`/odeon/tickets/${card.showId}`}
                                    />
                                    </div>
                                );
                                }
                            })}
                            </div>
                        ))}
                        </div>
                        

                   

                   
                </article>
            </main>

        </div>

                
            

        
    
    );
}
