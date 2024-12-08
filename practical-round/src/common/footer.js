import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import logo from '../assets/img/logo.png';
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin } from "react-icons/bi";
const footer = () => {
  return (
    <footer className='wp-pt-sm-140 wp-pt-80 wp-bg-dark-blue'>
      <Container>
        <Row className='flex-lg-row flex-column wp-gap-lg-0 wp-gap-100'>
          <Col className='col-lg-4 col-12'>
            <a href="#" className='text-decoration-none'>
              <img src={logo} alt="logo" />
            </a>
            <p className='wp-mt-15 text-white wp-pr-20'>
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </Col>
          <Col className='col-lg-2 col-12'>
            <h5 className='wp-font-b wp-mb-15 text-white'>Product</h5>
            <div className='vstack wp-gap-15'>
              <a href="#" className='wp-link-white-yellow'>Overview</a>
              <a href="#" className='wp-link-white-yellow'>Pricing</a>
              <a href="#" className='wp-link-white-yellow'>Customer stories</a>
            </div>
          </Col>
          <Col className='col-lg-2 col-12'>
            <h5 className='wp-font-b wp-mb-15 text-white'>Resources</h5>
            <div className='vstack wp-gap-15'>
              <a href="#" className='wp-link-white-yellow'>Blog</a>
              <a href="#" className='wp-link-white-yellow'>Guides & tutorials</a>
              <a href="#" className='wp-link-white-yellow'>Help center</a>
            </div>
          </Col>
          <Col className='col-lg-2 col-12'>
            <h5 className='wp-font-b wp-mb-15 text-white'>Company</h5>
            <div className='vstack wp-gap-15'>
              <a href="#" className='wp-link-white-yellow'>About us</a>
              <a href="#" className='wp-link-white-yellow'>Careers</a>
              <a href="#" className='wp-link-white-yellow'>Media kit</a>
            </div>
          </Col>
          <Col className='col-lg-2 col-12'>
            <h5 className='wp-f-28 wp-font-b wp-mb-15 text-white'>Try It Today</h5>
            <p className='text-white wp-f-18'>
              Get started for free.
              Add your whole team as your needs grow.
            </p>
            <button type='button' className='btn wp-btn-blue wp-f-18 btn-flex gap-1 wp-py-20'>Start today <i className='bi bi-arrow-right-short wp-f-26 wp-lh-26'></i></button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className='wp-pt-60'>
              <hr className='mb-0 d-sm-block d-none' style={{borderColor:"#2E4E73", opacity:"0.9"}}/>
              <div className='d-flex flex-lg-row flex-column wp-py-30'>
                <div className='hstack flex-sm-row flex-column wp-gap-lg-60 wp-gap-sm-15 wp-gap-15 me-lg-auto'>
                  <div className='hstack gap-1 align-items-center justify-content-center'>
                    <i className='bi bi-globe2 wp-f-18 text-white'></i>
                    <div className='d-flex position-relative'>
                      <Form.Select className='border-0 bg-transparent text-white wp-zindex-1'>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Arabic</option>
                      </Form.Select>
                      <i className='bi bi-chevron-down wp-f-18 wp-lh-18 text-white position-absolute wp-zindex-0 end-0' style={{ top: "10px" }}></i>
                    </div>
                  </div>
                  <a href="#" className='wp-link-white-yellow'>Terms & privacy</a>
                  <a href="#" className='wp-link-white-yellow'>Security</a>
                  <a href="#" className='wp-link-white-yellow'>Status</a>
                  <p className='m-0 text-white'>©2021 Whitepace LLC.</p>
                </div>
                <hr className=' d-sm-none d-block' style={{borderColor:"#2E4E73", opacity:"0.9"}}/>
                <div className='hstack gap-3 ms-lg-auto justify-content-center'>
                  <a href="#" className='wp-link-white-yellow wp-f-18'><BiLogoFacebook /></a>
                  <a href="#" className='wp-link-white-yellow wp-f-18'><BiLogoTwitter /></a>
                  <a href="#" className='wp-link-white-yellow wp-f-18'><BiLogoLinkedin /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer
