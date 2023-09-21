import React from "react";

export default function Footer() {
  return (
     <footer className="footer">
        <div className="footer__container container">
          <div className="jewelery">
            <h3 className="footer__title">BUDREVICH FINE JEWELLERY STUDIO</h3>
            <p className="footer__text">
              14 Arundel House, 43 Kirby Street, <br />
              Hatton Garden, London, EC1N 8TE <br />
              United Kingdom <br />
            </p>
            <a className="footer__email" href="info@budrevich.co.uk">
              info@budrevich.co.uk
            </a>
            <br />
            <a
              className="footer__number"
              tell="+44 020 7430 1138"
              href="+44 020 7430 1138"
            >
              Ph.: +44 020 74301138
            </a>
          </div>
        </div>
      </footer>
  );
}
