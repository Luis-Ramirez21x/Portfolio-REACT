import React from "react";
import JATE from '../../images/app_screenshots/JATE_app.PNG';
import apps from './apps';
import '../../styles/Portfolio.css';





function Portfolio(){
    
    return (
      
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

  {/*Carusel slides */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={JATE} class="d-block w-100" alt="..." id="appImg"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>JATE Text Editor App</h5>
        <a href='https://serene-plateau-19550.herokuapp.com/'>Click for deployed app!</a>
        <a href='https://github.com/Luis-Ramirez21x/Text-Editor'>Click for GitHub Repo</a>
      </div>
    </div>
    { apps.map((app)=>(
        <div class="carousel-item" data-bs-interval="10000000">
        <img src={app.imgSrc} class="d-block w-100" alt="..." id="appImg"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>{app.name}</h5>
          <a href={app.deployedLink}>Click for deployed app!</a>
          <a href={app.repoLink}>Click for GitHub Repo</a>
        </div>
      </div>
    ))}
    
  </div>


  {/* carusel button functionality*/}
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    )
}

export default Portfolio;

{/**


<div class="carousel-item">
      <img src={NBA} class="d-block w-100" alt="..." id="appImg"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

*/}