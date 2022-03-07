import React from "react";
import Social from "../Social/Social";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* <img src={vader} className="footer__bground" /> */}
      <div className="social__section">
        <p className="social__text">FOLLOW STAR WARS:</p>
        <Social />
      </div>
      <div className="info__section">
        <p className="copy">TM & © Lucasfilm Ltd. All Rights Reserved</p>
        <ul className="info__menu">
          <li className="info__link">
            <a target="_blank" href="https://disneytermsofuse.com/">
              Terms of Use
            </a>
          </li>
          <li className="info__link">
            <a target="_blank" href="https://support.disney.com/hc/fr-fr">
              Additional Content Information
            </a>
          </li>
          <li className="info__link">
            <a
              target="_blank"
              href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
            >
              Privacy Policy
            </a>
          </li>
          <li className="info__link">
            <a
              target="_blank"
              href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
            >
              Children’s Online Privacy Policy
            </a>
          </li>
          <li className="info__link">
            <a
              target="_blank"
              href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-california-privacy-rights/"
            >
              Your California Privacy Rights
            </a>
          </li>
          <li className="info__link">
            <a
              target="_blank"
              href="https://www.shopdisney.com/franchises/star-wars/?CMP=SYN-Dcom&att=StarWars_Footer_Store"
            >
              Star Wars at shopDisney
            </a>
          </li>
          <li className="info__link">
            <a target="_blank" href="https://support.starwars.com/hc/fr-fr">
              Star Wars Helpdesk
            </a>
          </li>
          <li className="info__link">
            <a
              target="_blank"
              href="https://preferences-mgr.truste.com/?type=starwars&affiliateId=115"
            >
              Interest-Based Ads
            </a>
          </li>
          <li className="info__link">
            <a
              target="_blank"
              href="https://privacyportal-de.onetrust.com/webform/64f077b5-2f93-429f-a005-c0206ec0738e/0a4f1f0b-7130-421f-971d-ef578c0bce6d"
            >
              Do Not Sell My Personal Information
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
