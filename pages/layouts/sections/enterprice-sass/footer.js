import React from 'react';
import {Container,Row,Col,FormGroup,Input} from 'reactstrap'
const Footer = () => (
  <footer className="saas2 footer2" id="contact">
    <Container className="footer-padding">
      <Row>
        <Col lg="4" md="6" sm="12">
          <div className="logo-sec">
            <div className="footer-title mobile-title p-t-0">
                <h3 className="text-white">About Us</h3>
            </div>
            <div className="footer-contant">
              <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/logo-white.png" />
              <div className="footer-para">
                <h6 className="text-white para-address">SBM technology web services</h6>
                <h6 className="text-white para-address">1620 S Carlos Ave, Suite M</h6>
                <h6 className="text-white para-address">Onatrio CA 91764.</h6>
              </div>
              <ul className="d-d-flex footer-social social">
                <li className="footer-social-list">
                  <a href="https://www.facebook.com/SBM-Technology-Corp-197713086931794/"><i aria-hidden="true" className="fa fa-facebook"></i></a>
                </li>
                <li className="footer-social-list">
                  <a href="#"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                </li>
                <li className="footer-social-list">
                  <a href="#"><i aria-hidden="true" className="fa fa-google"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col lg="3" md="6" sm="12">
          <div className="footer-title mobile-title">
            <h3 className="text-white">Product</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">Product</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="#">Sales dashboard</a>
                </li>
                <li>
                  <a href="#">Purchasing system</a>
                </li>
                <li>
                  <a href="#">Inventory system</a>
                </li>
                <li>
                  <a href="#">Kitchen system</a>
                </li>
                <li>
                  <a href="#">CRM</a>
                </li>
                <li>
                  <a href="#">What's next?</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col lg="2" md="6" sm="12">
          <div className="footer-title mobile-title">
            <h3 className="text-white">Company</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">Company</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">About security</a>
                </li>
                <li>
                  <a href="#">User guide</a>
                </li>
                <li>
                  <a href="#">Terms of srvices</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg="3" md="6" sm="12">
          <div className="footer-title mobile-title">
            <h3 className="text-white">Subscribe our newsletter</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">Subscribe our newsletter</h5>
            <FormGroup>
              <Input className="form-control" id="usr" placeholder="email address" type="text" />
              <a href=""><i aria-hidden="true" className="fa fa-paper-plane"></i></a>
            </FormGroup>
            <div>
              <h4 className="text-white Unice-text">SBM technology</h4>
              <h6 className="text-white Unice-copyright-text">© 2021 SBM</h6>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer;
