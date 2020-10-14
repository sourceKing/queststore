import { Component, useEffect, useState } from 'react';
import BaseLayout from '../components/LayoutHOC';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import Router from 'next/router';

const heroProds = [
   {
      name: "Dragon Fly Deep Black Sweat Pants",
      price: 2300,
      url: "/img1.jpg"
   },
   {
      name: "Raw Hem Colorblock Jumpsuit",
      price: 2200,
      url: "/img1.jpg"
   },
   {
      name: "Red Rose Jaw Drop Gown",
      price: 1200,
      url: "/img2.jpg"
   }
];


const QuestHome = () => {

   // static getInitialProps(ctx){
   //    console.log(ctx);

   //    return {};
   // }
   
  return (
    <Row style={{
       margin: 0, 
       padding: 0,
       width: '100%', 
       height: '100%',
       padding: "0 10px 10px 10px",
   }}>
      <Col xs={{span: 24}} sm={{span: 24}} md={{span: 14}} lg={{span: 14}} style={{
         height: '100%',
         backgroundColor: "#f2a490",
         padding: '0 4%',
         borderTopLeftRadius: 10,
         borderBottomLeftRadius: 10,
         display: 'flex',
         flexFlow: 'column',
         alignItems: 'flex-start',
         justifyContent: 'center',
      }}>
        {/* <HeroSlider prods={heroProds} beforeChange={this.onSliderChange} /> */}
         <h1 className="hero-tittle">Go on a quest <br/>to find your style.</h1>
         <h3 className="hero-text">Find a perfect outfit that will suit<br/> your soul and body _________</h3>
         <Button type="link" size="large" style={{backgroundColor: '#000', color: '#fff'}}>BROWSE OUTFITS</Button>
      </Col>
      <Col xs={{span: 24}} sm={{span: 24}} md={{span: 10}} lg={{span: 10}} style={{
         height: '100%',
         backgroundColor: "#de5b6d",
         borderTopRightRadius: 10,
         borderBottomRightRadius: 10,
      }}>

      </Col>
      <style jsx>{`
         .hero-tittle {
            width: 450px;
            font-size: 4em;
            font-family: serif, sans-serif,
            font-weight: bolder;
            text-align: left;
            line-height: 1em;
         }
         .hero-text {
            width: 400px;
            font-size: 1.5em;
            font-family: serif, sans-serif,
            font-weight: bolder;
            text-align: left;
            line-height: 1em;
         }
      `}</style>
    </Row>
  )
}

export default BaseLayout(QuestHome);
