import { Component, useEffect, useState } from "react";
import BaseLayout from "components/LayoutHOC";
// import ProdImg from "components/SliderItems";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Carousel from "antd/lib/carousel";
import Card from "antd/lib/card";
import Image from "antd/lib/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Avatar from "antd/lib/avatar/avatar";
// import Router from 'next/router';

const QuestHome = () => {
  // static getInitialProps(ctx){
  //    console.log(ctx);

  //    return {};
  // }
  const onChange = (current) => console.log("Current slide", current);

  return (
    <>
      <Row
        gutter={[16, 16]}
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "auto",
          padding: "0 10px",
          // background: "#FFF",
        }}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 16 }}
          lg={{ span: 16 }}
          style={{ height: "inherit" }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#f2a490",
              padding: "10% 5%",
              borderRadius: 10,
              display: "flex",
              flexFlow: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <h1 className="hero-tittle">
              Go on a quest <br />
              to find your style.
            </h1>
            <h3 className="hero-text">
              Find a perfect outfit that will suit
              <br /> your soul and body _________
            </h3>
            <Button
              type="link"
              size="large"
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              BROWSE OUTFITS
            </Button>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          style={{}}
        >
          <div
            style={{
              // display: "inline-flex",
              height: "100%",
              borderRadius: 10,
              backgroundColor: "#de5b6d",
              overflow: 'hidden',
              // display: 'flex',
              // flexFlow: 'column',
              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <Carousel
              autoplay
              autoplaySpeed={5000}
              draggable
              // afterChange={onChange}
              slidesToShow={1}
              centerPadding="20px"
              centerMode={true}
              effect="fade"
              style={{ height: "inherit" }}
            >
              <div className="slide-img">
                <div
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    padding: "20px 0",
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      height: "100%",
                      width: "100%",
                      paddingBottom: 20,
                      backgroundImage: "url('/prod-img.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Button type="primary" size="large" style={{borderRadius: 20}}>ADD TO CART</Button>
                  </div>
                </div>
              </div>
              <div className="slide-img">
                <div
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    padding: "20px 0",
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      height: "100%",
                      width: "100%",
                      paddingBottom: 20,
                      backgroundImage: "url('/prod-img2.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Button type="primary" size="large" style={{borderRadius: 20}}>ADD TO CART</Button>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
        style={{ margin: "40px 0 40px 0", padding: "0 10px", width: "100%" }}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <Card>
            <Card.Meta avatar={<Avatar size="large">A</Avatar>} description="Description of the illustration and feature explanation" />
          </Card>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <Card>
            <Card.Meta avatar={<Avatar size="large">B</Avatar>} description="Description of the illustration and feature explanation" />
          </Card>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <Card>
            <Card.Meta avatar={<Avatar size="large">C</Avatar>} description="Description of the illustration and feature explanation" />
          </Card>
        </Col>
      </Row>

      <style jsx global>{`
         .hero-tittle {
            // width: 450px;
            font-size: 4em;
            font-family: serif, sans-serif,
            font-weight: bolder;
            text-align: left;
            line-height: 1em;
         }
         .hero-text {
            // width: 400px;
            font-size: 1.5em;
            font-family: serif, sans-serif,
            font-weight: bolder;
            text-align: left;
            line-height: 1em;
         }
         .ant-carousel {
            height: inherit;
         }
         div.slide-img {
            height: calc(100vh - 120px);
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
         }
      `}</style>
    </>
  );
};

export default BaseLayout(QuestHome);
