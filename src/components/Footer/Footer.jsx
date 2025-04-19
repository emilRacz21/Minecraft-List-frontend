import "./Footer.scss";
import { footer } from "../../content";
export default function Footer() {
  return (
    <section className="footer-cont">
      <div className="footer-bg"></div>
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-grid-1">
            <div className="footer-grid-1-row">
              <img src={footer.logo} alt={footer.logoAlt} />
            </div>
            <p
              style={{
                margin: "1rem 0",
                cursor: "default",
                color: "white",
              }}
            >
              {footer.description}
            </p>
            <div className="footer-btn-grid">
              <button className="footer-btn">{footer.button}</button>
              <button className="footer-btn-no-border">{footer.buttona}</button>
            </div>
          </div>
          <div className="footer-grid-1">
            <h4>{footer.question}</h4>
            {footer.questions.map((items, index) => {
              return <p key={index}>{items}</p>;
            })}
          </div>
          <div className="footer-grid-1">
            <h4>{footer.shopTitle}</h4>
            {footer.shop.map((items, index) => {
              return <div key={index}>{items.name}</div>;
            })}
          </div>

          <div className="footer-grid-1">
            <h4>{footer.conc}</h4>

            <div className="footer-contact-media">
              {footer.images.map((items, index) => {
                return (
                  <a key={index} href={items.href}>
                    <img src={items.img} alt={items.alt} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="footer-author">
        <p>{footer.footerAuthor}</p>
        <a href="https://portfolio-emilr.netlify.app/">
          <p>{footer.footerCreated}</p>
        </a>
      </section>
    </section>
  );
}
