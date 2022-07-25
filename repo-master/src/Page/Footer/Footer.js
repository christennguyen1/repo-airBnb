import React from "react";
import "./Footer.css";

export default function FooterNav() {
  return (
    <div className={`mx-auto bg-gray-100 rounded-xl  w-full`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 border-b">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-sm">ABOUT</h5>
          <ul className="footer-nav">
            <li>
              <a href="\#">How Airbnb works</a>
            </li>
            <li>
              <a href="\#">Newsroom</a>
            </li>
            <li>
              <a href="\#">Investors</a>
            </li>
            <li>
              <a href="\#">Airbnb Plus</a>
            </li>
            <li>
              <a href="\#">Airbnb Luxe</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-sm">COMMUNITY</h5>
          <ul className="footer-nav">
            <li>
              <a href="\#">Accessibility</a>
            </li>
            <li>
              <a href="\#">This is not a real site</a>
            </li>
            <li>
              <a href="\#">Its a pretty awesome clone</a>
            </li>
            <li>
              <a href="\#">Referrals accepted</a>
            </li>
            <li>
              <a href="\#">Papafam</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold text-sm">HOST</h5>
          <ul className="footer-nav">
            <li>
              <a href="\#">Papa React</a>
            </li>
            <li>
              <a href="\#">Presents</a>
            </li>
            <li>
              <a href="\#">Zero to full Stack Hero</a>
            </li>
            <li>
              <a href="\#">Hundreds of Students</a>
            </li>
            <li>
              <a href="\#">Join Now</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-xs text-gray-800 ">
          <h5 className="font-bold text-sm">SUPPORT</h5>
          <ul className="footer-nav">
            <li>
              <a href="\#">Help Centre</a>
            </li>
            <li>
              <a href="\#">Trust Safety</a>
            </li>
            <li>
              <a href="\#">Say Hi Youtube</a>
            </li>
            <li>
              <a href="\#">Easter Eggs</a>
            </li>
            <li>
              <a href="\#">For the Win</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex pl-5 pr-5 footer_lim">
        <div className="flex items-center space-x-7">
          <p className="pt-3 pl-1">2020 Copyright</p>
          <p className="pt-3 pl-1">Privacy</p>
          <p className="pt-3 pl-1">Terms</p>
          <p className="pt-3 pl-1">Sitemap</p>
        </div>
        <div className="flex items-center space-x-7">
          <div className="flex items-center text-center">
            <i className="fa-solid fa-earth-americas"></i>
            <p className="pt-3 pl-1">English</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-dollar-sign"></i>
            <p className="pt-3 pl-1">USD</p>
          </div>
          <p className="pt-3 pl-1">Support and resources</p>
        </div>
      </div>
    </div>
  );
}
