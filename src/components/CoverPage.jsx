import React from "react";
import cover1 from "../Images/cover1.jpg"
import cover2 from "../Images/cover2.jpg"
import cover3 from "../Images/cover3.jpg"
export default function CoverPage(){
    return(
        <div className="coverbody">
             
             <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={cover1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={cover2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={cover3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}