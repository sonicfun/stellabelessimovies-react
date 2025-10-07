import React from 'react';
import './about.css';
import stellapic from '../images/stella.jpg';



//This is the function of about page which contains the information about Stella Belessi, her pic and her social media
function About() {
    return (
        <section id="about" className='about'>
          <div className="container-fluid">
              <div className="row">
                  <h4 className="section-title">About</h4>
              </div>
            
        <div className="col-sm-6 col-md-4">
            <div className="stella-item">
                 
               <img src= {stellapic}  className="stella-pic" alt="pic" />
                 <h3>Stella Belessi</h3>
                <div className= "stella-description">
                <div className= "stella-info">
                    <p> Film Director</p></div>
                  <p>Graduate in Greek and French Literature of the University of Athens and the Department of Film direction of “STAVRAKOS Film and TV School”. 
                    She also studied Journalism, Painting and Theatre. Postgraduate studies in television in Paris-France. 
                    She is fluent in English, French and Italian. She was involved in martial arts for fourteen years (3 Dans), she is an active marathon runner and an active and awarded stray animal volunteer. 
                    She has been the artistic director of the Mediterranean Festival of New filmmakers in Larissa for twenty-two years. 
                    She has directed four short films, twenty-seven documentaries, a TV movie and the feature films "BIOGRAPHIES", "MARIA-ELECTRA", " EDEN GAMES", "THE NIGHT WITH THE BUTTERFLIES" and "FINAL SHOOTING.
                    "Her films were awarded at various festivals, while for her short stories and scripts she received more than fifty awards in Greek and international competitions. 
                    Her book "BASTHET’S EYES" was published in 2014 by "DIONI" editions.  
                    Other books “THE CATS OF BERENICE” awarded 14 National and international prizes, published in 2019 by “UNIVERSE PATHWAYS” 1st edition, and in 2021 2nd edition. ‘’33” published in 2021 by “UNIVERSE PATHWAYS” ,1st edition and in 2023, 2nd edition. “OLD TESTAMENT-An anthology of speculative literature” published in 2022 by “UNIVERSE PATHWAYS”.</p> 
 
                   <ul className="stella-icon">
                    
                    <li><a href="https://www.facebook.com/stella.belessi" className="facebook">
                         <ion-icon name="logo-facebook"></ion-icon>
                        </a></li>
                   
                   <li><a href="https://www.youtube.com/@stellabelessi" className="youtube">
                          <ion-icon name="logo-youtube"></ion-icon>
                        </a></li>
                 </ul>
                 </div> 
                
           </div>
        </div>   
        </div> 
    </section>
   );
}

export default About;
