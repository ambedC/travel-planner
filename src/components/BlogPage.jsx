import React from "react"
import delhi from "../Images/delhi.jpg"
import munnar from "../Images/munnar.jpg"
import kashmir from "../Images/kashmir.jpg"


export default function BlogPage(){
    return(
        <div className="row"> 
                    <div className="col-md-4">
                        <div class="card" >
                                <img src={munnar} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"><strong>Where Tranquility Meets Adventure </strong></h5>
                                    <p class="card-text">Discover Munnar's tea plantations, misty hills, and vibrant culture, where nature's tranquility and vibrant allure await your exploration.</p>
                                    <a href="#" className="read-more">Go somewhere</a>
                                </div>
                        </div>  
                    </div>

                    <div className="col-md-4">
                        <div class="card" >
                                <img src={delhi} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"><strong>Crowning Jewel of India</strong></h5>
                                    <p class="card-text">Unveil the majestic beauty and profound history of the Taj Mahal, a symbol of enduring love and architectural brilliance.</p>
                                    <a href="#" className="read-more">Go somewhere</a>
                                </div>
                        </div>   
                    </div>

                    <div className="col-md-4">
                        <div class="card" >
                                <img src={kashmir} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title"><strong>Enchanting Valley of Paradise </strong></h5>
                                    <p class="card-text">Uncover the allure of Kashmir's breathtaking landscapes, rich culture,in this immersive journey through the Himalayan paradise.</p>
                                    <a href="#" className="read-more">Go somewhere</a>
                                </div>
                        </div>  
                    </div>
        </div>

    )
}

