import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <img src="logo.jpg" alt="logo" />
      </div>
      <div className="nav">
        <Link to="/">ACCUEIL</Link>
        <ul>
          <p> PORTEFOLIO</p>
          <Link to="/hotels">
            <li>Hôtellerie restauration </li>
          </Link>
          <Link to="/automobile">
            <li>Automobile </li>
          </Link>
        </ul>
        <Link to="/contact">CONTACT</Link>
        <div className="nav__image">
          <img src="imgFlo.png" alt="flo" />

          <div className="nav__image__pres">
            <h1>Florian Soria</h1>
            <p>Photographe </p>
            <p>Automobile / Mode / Corporate / Voyage</p>
            J&apos;ai toujours eu envie d&apos;entreprendre, et c&apos;est
            maintenant le bon moment ! Passionné par la photographie et la
            vidéo, depuis 5 ans j&apos;ai décidé de tenter l&apos;aventure et de
            mettre ma créativité et mes compétences au service des entreprises.
            Mon métier de photographe me permet d’accompagner des entreprises et
            marques ayant la volonté de développer leur identité visuelle. À
            travers la création de contenu, photographique et/ou vidéographique.
          </div>
        </div>
        <div className="nav__image__pres__link">
          <h1>Contact</h1>
          <a href="mailto:floriansoria.studio@gmail.com">Mail</a>
          <a href="https://www.instagram.com/floriansoria_studio/?hl=fr">
            Instagram
          </a>
          <a href="https://www.facebook.com/search/top?q=florian%20soria%20studio">
            Facebook
          </a>

          <a href="https://www.linkedin.com/in/florian-soria-89083b182/">
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
