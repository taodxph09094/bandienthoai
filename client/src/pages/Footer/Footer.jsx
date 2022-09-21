import React from "react";

const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo bullStore">
                <a href="./">
                  <img
                    src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/304731606_639698490897222_5008547266502565802_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=53PaPy3tQZ0AX-ZooNl&_nc_ht=scontent.fhan14-3.fna&oh=03_AVI2JBOrwMTvt_9ukZcT7bCy-oD9efdJUCVxhBxu99L40A&oe=63528136"
                    alt=""
                  />
                </a>
              </div>
              <ul>
                <li>Địa chỉ: Hà Nội</li>
                <li>Số điện thoại: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Link liên kết</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Nhận bài viết mới</h6>
              <p>Nhập email của bạn để nhận bài viết mới nhất của shop</p>
              <form action="#">
                <input type="text" placeholder="Nhập email của bạn" />
                <button type="submit" className="site-btn">
                  Gửi
                </button>
              </form>
              <div className="footer__widget__social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src="img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
