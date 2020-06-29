import React, { Component } from 'react';
class Footer extends Component {
  render() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <footer className="footer">
        <div className="content">
          <div className="footer__section-container">
            <section class="address">
              <a
                href="https://www.google.com/maps/place/Zhong+Shan+Hakka+Restaurant/@37.7422557,-122.4903221,15z/data=!4m5!3m4!1s0x0:0xde21cc529fccf39d!8m2!3d37.7422557!4d-122.4903221"
                target="_blank"
                rel="noreferrer noopener"
              >
                2237 Taraval St , San Francisco, CA 94116 <br />
                Sunset District (Between 32nd and 33rd)
              </a>
            </section>
            <section class="contact">
              <a href="tel:4155928938">CALL: (415) 592-8938</a>
              <div
                class="yelp"
                id="yelp-biz-badge-plain-m5c-bIR-Y6h5ylUIbRDP7Q"
              >
                <a
                  href="http://yelp.com/biz/zhong-shan-hakka-cuisine-san-francisco-2?utm_medium=badge_button&amp;utm_source=biz_review_badge"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Check out Zhong Shan Hakka Cuisine on Yelp
                </a>
              </div>
            </section>
            <section class="hours">
              11:00AM - 3:00PM <br />
              5:00PM - 9:30PM <br />
              Open everyday <strong>except Thursday</strong>
            </section>
          </div>
          <div class="copyright">
            <small>
              Copyright &copy; {currentYear}, Zhong Shan Hakka Restaurant. All Rights Reserved.
            </small>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
