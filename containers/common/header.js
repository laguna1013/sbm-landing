import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'

const Header = props => {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  m-t-20 `}>
          <Container>
            <Row>
              <Col>
                <nav>
                  <a className="m-r-auto" href="/">
                    <img alt="" className="img-fluid" src="/assets/images/logo/logo-white.png" />
                  </a>
                  <div className="responsive-btn">
                    <a className="toggle-nav" onClick={clickSidebar} >
                      <i aria-hidden="true" className="fa fa-bars text-white"></i>
                    </a>
                  </div>
                  <Nav />

                  <div className="top-header-right">
                    <Link href={"/"}>
                      <a href="/" style={{color: 'white'}}>
                        <span>Login</span>
                      </a>
                    </Link>
                  </div>

                </nav>
              </Col>
            </Row>
          </Container>
        </header>
    )
}

export default Header
