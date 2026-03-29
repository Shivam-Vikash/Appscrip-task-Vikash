"use client";

import { useState } from "react";

function Section({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer__section">
      <div className="footer__title" onClick={() => setOpen(!open)}>
        {title}
        <span className="arrow">{open ? "−" : "+"}</span>
      </div>

      <div className={`footer__content ${open ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container_footer">

        {/* top section */}
        <div className="footer__top">

          <div className="footer__subscribe">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from our product page.</p>
            <div className="subscribe-box">
              <input placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="footer__contact">
            <h3>CONTACT US</h3>
            <p>+11 222 333 45678</p>
            <p>customercare@ourproduct.com</p>

            <h3>CURRENCY</h3>
            <p>🇮🇳 INR</p>
          </div>

        </div>

        <hr />

        {/* bottom section */}
        <div className="footer__desktop">
          
          <div className="footer__bottom">

            {/* left half */}
            <div className="footer__left">

              <div className="footer__col">
                <h4>our product page</h4>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
              </div>

              <div className="footer__col">
                <h4>QUICK LINKS</h4>
                <p>Orders & Shipping</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
              </div>

            </div>

            {/* right half */}
            <div className="footer__right">

              <div>
                <h4>FOLLOW US</h4>
                <p>Instagram • LinkedIn</p>
              </div>

              <div className="footer__payment">
                <p>our page ACCEPTS</p>
                <div className="payments">
                  <span>GPay</span>
                  <span>Mastercard</span>
                  <span>PayPal</span>
                </div>
              </div>

            </div>

          </div>




          {/* mobile section */}
          <div className="footer__mobile">

            <Section title="Our Product">
              <p>About Us</p>
              <p>Stories</p>
              <p>Artisans</p>
              <p>Boutiques</p>
            </Section>

            <Section title="QUICK LINKS">
              <p>Orders & Shipping</p>
              <p>Payment & Pricing</p>
              <p>Return & Refunds</p>
              <p>FAQs</p>
            </Section>

            <Section title="FOLLOW US">
              <p>Instagram • LinkedIn</p>
            </Section>

            <div className="footer__payment">
              <p>mettā muse ACCEPTS</p>
              <div className="payments">
                <span>GPay</span>
                <span>Mastercard</span>
                <span>PayPal</span>
              </div>
            </div>

          </div>

        </div>

        <p className="copyright">
          Copyright © 2026 ourtestpage. All rights reserved.
        </p>

      </div>
    </footer>
  );
}








        // <div className="footer__mobile">

        //   <Section title="our product">
        //     <p>About Us</p>
        //     <p>Stories</p>
        //     <p>Artisans</p>
        //   </Section>

        //   <Section title="QUICK LINKS">
        //     <p>Orders & Shipping</p>
        //     <p>Payment & Pricing</p>
        //     <p>FAQs</p>
        //   </Section>

        // <div>
        //   <Section title="FOLLOW US">
        //     <p>Instagram • LinkedIn</p>
        //   </Section>

        //   <div className="footer__payment">
        //         <p>our product ACCEPTS</p>
        //         <div className="payments">
        //         <span>GPay</span>
        //         <span>Mastercard</span>
        //         <span>PayPal</span>
        //         </div>
        //     </div>
        // </div>

        // </div>