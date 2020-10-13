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
    <Row style={{margin: 0, padding: 0, height: '100%'}}>
      <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} style={{height: '100%', backgroundColor: "#f2a490"}}>
        {/* <HeroSlider prods={heroProds} beforeChange={this.onSliderChange} /> */}

      </Col>
      <Col xs={{span: 24}} sm={{span: 24}} md={{span: 12}} lg={{span: 12}} style={{height: '100%', backgroundColor: "#de5b6d"}}>

      </Col>
    </Row>
  )
}

export default BaseLayout(QuestHome);
