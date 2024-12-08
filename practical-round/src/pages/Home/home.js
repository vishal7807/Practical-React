import React, { Fragment, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Slider from "react-slick";

import bannerBgImgLg from '../../assets/img/banner-pattern-lg.png';
import bannerBgImgSm from '../../assets/img/banner-pattern-sm.png';
import getMoreThumb from '../../assets/img/get-more-thumb.png';
import titleLine from '../../assets/img/title-line.png';
import icApple from '../../assets/img/ic-apple.png';
import icWindows from '../../assets/img/ic-windows.png';
import icAndroid from '../../assets/img/ic-android.png';

const Chooseplan = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 0,
        slidesToScroll: 0,
        initialSlide: 1,
        className: "center planSlickSlider",
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1152,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    centerPadding: "0px",
                }
            }
        ]
    };
    const yourPlan = [
        {
            title: 'Free',
            price: "$0",
            subTitle: "Capture ideas and find them quickly",
            listItem: [
                { id: 1, value: "Sync unlimited devices" },
                { id: 2, value: "10 GB monthly uploads" },
                { id: 3, value: "200 MB max. note size" },
                { id: 4, value: "Customize Home dashboard and access extra widgets" },
                { id: 5, value: "Connect primary Google Calendar account" },
                { id: 6, value: "Add due dates, reminders, and notifications to your tasks" }
            ]
        },
        {
            title: 'Personal',
            price: "$11.99",
            subTitle: "Keep home and family on track",
            listItem: [
                { id: 1, value: "Sync unlimited devicesSync unlimited devices" },
                { id: 2, value: "10 GB monthly uploads" },
                { id: 3, value: "200 MB max. note size" },
                { id: 4, value: "Customize Home dashboard and access extra widgets" },
                { id: 5, value: "Connect primary Google Calendar account" },
                { id: 6, value: "Add due dates, reminders, and notifications to your tasks" },
            ]
        },
        {
            title: 'Organization',
            price: "$49.99",
            subTitle: "Capture ideas and find them quickly",
            listItem: [
                { id: 1, value: "Sync unlimited devices" },
                { id: 2, value: "10 GB monthly uploads" },
                { id: 3, value: "200 MB max. note size" },
                { id: 4, value: "Customize Home dashboard and access extra widgets" },
                { id: 5, value: "Connect primary Google Calendar account" },
                { id: 6, value: "Add due dates, reminders, and notifications to your tasks" },
            ]
        },
    ]

    return (
        <>
            <div className='position-relative wp-py-sm-140 wp-py-80'>
                <Container className='position-relative'>
                    <Row>
                        <Col xs={12}>
                            <div className='wp-text-center wp-mb-60'>
                                <h2 className='wp-font-b wp-mb-24 wp-f-lg-72 wp-f-md-64 wp-f-sm-54 wp-f-36'>Choose <span className='position-relative d-inline-block'><span className='position-relative wp-zindex-1'>Your Plan</span> <img className='w-100 position-absolute bottom-0 start-0 end-0 wp-zindex-0' src={titleLine} alt="title line" /></span></h2>
                                <p className='wp-f-18'>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Slider  {...settings}>
                                {
                                    yourPlan.map((data, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className='planBox wp-p-sm-40 wp-p-20 wp-mx-25'>
                                                    <h4 className='wp-font-sm'>{data.title}</h4>
                                                    <h4 className='wp-f-36 wp-font-b wp-my-25 planPrice'>{data.price}</h4>
                                                    <p className='wp-f-18 wp-font-m wp-my-25'>{data.subTitle}</p>
                                                    <div className='wp-mb-25 d-flex flex-column gap-3'>
                                                        {
                                                            data.listItem.map((list) => {
                                                                return (
                                                                    <div key={list.id} className="d-flex align-items-center">
                                                                        <div className="flex-shrink-0">
                                                                            <i className='bi bi-check2-circle wp-f-18 planIcCheck'></i>
                                                                        </div>
                                                                        <div className="flex-grow-1 ms-3">
                                                                            <p className='mb-0'>{list.value}</p>
                                                                        </div>
                                                                    </div>
                                                                )

                                                            })
                                                        }
                                                    </div>
                                                    <a href="#" className='btn wp-btn-outline-yellow stretched-link'>Get Started</a>
                                                </div>
                                            </Fragment>
                                        )
                                    })
                                }
                            </Slider>


                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

const Home = () => {

    return (
        <>
            <div className='homeBanner wp-bg-dark-blue position-relative wp-py-sm-140 wp-py-80'>
                <div className='position-absolute top-0 end-0 bottom-0 start-0 wp-zindex-0'>
                    <img className="w-100 h-100"
                        src={bannerBgImgLg}
                        srcSet={`${bannerBgImgLg} 1152w, ${bannerBgImgSm} 768w`}
                        sizes="(max-width: 768px) 768px, 1152px"
                        alt="getMoreThumb"
                    />
                </div>
                <Container className='position-relative wp-zindex-1'>
                    <Row className='align-items-center'>
                        <Col lg={6} xs={12}>
                            <div className='d-flex flex-column wp-text-md-start wp-text-center'>
                                <h1 className='mt-0 wp-mb-25 text-white wp-font-b wp-f-lg-64 wp-f-md-54 wp-f-36'>
                                    Get More Done with whitepace
                                </h1>
                                <p className='wp-f-18 text-white'>
                                    Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                                </p>
                                <div className='w-100 wp-mt-60'>
                                    <button type='button' className='btn wp-btn-blue wp-f-18 btn-flex gap-1'>Try Whitepace free <i className='bi bi-arrow-right-short wp-f-26 wp-lh-26'></i></button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xs={12}>
                            <img className="w-100 wp-mt-lg-0 wp-mt-100" src={getMoreThumb} alt="getMoreThumb" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* choose plan section */}
            <Chooseplan />

            {/* try whitepace today */}
            <div className='position-relative wp-bg-dark-blue wp-pt-sm-140 wp-pt-80 wp-pb-30'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6} md={8} sm={8} xs={12}>
                            <div className='d-flex flex-column wp-text-sm-center'>
                                <h2 className='wp-font-b wp-mb-24 wp-f-lg-72 wp-f-md-64 wp-f-sm-54 wp-f-36 text-white'>
                                    Try Whitepace today
                                </h2>
                                <p className='wp-mb-40 wp-f-sm-24 wp-f-18 text-white'>Get started for free.<br></br>
                                    Add your whole team as your needs grow.</p>
                                <div className='w-100 wp-mb-40'>
                                    <button type='button' className='btn wp-btn-blue wp-f-18 btn-flex gap-1 wp-py-20 wp-px-40'>Try Whitepace free <i className='bi bi-arrow-right-short wp-f-26 wp-lh-26'></i></button>
                                </div>
                                <p className='wp-mb-40 wp-f-sm-24 wp-f-18 text-white'>On a big team? Contact sales</p>
                                <div className='hstack justify-content-sm-center wp-gap-40 tryWhToday'>
                                    <a href="#" className='text-decoration-none'>
                                        <img src={icApple} alt="ic-apple" />
                                    </a>
                                    <a href="#" className='text-decoration-none'>
                                        <img src={icWindows} alt="ic-windoes" />
                                    </a>
                                    <a href="#" className='text-decoration-none'>
                                        <img src={icAndroid} alt="ic-anroid" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Home