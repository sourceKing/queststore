import { Component, useState, useEffect } from 'react';
import BaseLayout from 'components/LayoutHOC';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';
import Button from 'antd/lib/button';
import Popover from 'antd/lib/popover';
import Card from 'antd/lib/card';
import Radio from 'antd/lib/radio';
import Avatar from 'antd/lib/avatar';
import Divider from 'antd/lib/divider';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { watchViewport, unwatchViewport } from 'tornis';
import { useRouter } from 'next/router';

// import { withRouter } from 'next/router';
// const RadioGroup = Radio.Group;

const ProdImg = (props) =>  (
   <div style={{
      display: 'inline-block',
      //flexFlow: 'column',
      //alignItems: 'flex-end',
      //justifyContent: 'flex-end',
      width: '100%',
      height: '100%',
      padding: 6,
      //backgroundColor: props.color,
      // backgroundImage: "url('"+props.url+"')",
      //backgroundSize: 'cover',
      //backgroundPosition: 'center',
      //backgroundRepeat: 'no-repeat'
   }}>
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: props.color,
      borderRadius: 10,
    }} >{props.children}</div>
   </div>
)

const HighBtn = props => {
   const [visible, setVisibility] = useState(false);
   return (
      <Popover
         content={
            <Card bordered={false} bodyStyle={{
               padding: "10px 0",
               display: 'flex',
               flexFlow: "column"
            }} actions={[<Button type="link" onClick={() => setVisibility(visible => !visible)}>ADD TO CART</Button>]}>
               <Card.Meta title="Top" avatar={<Avatar shape="square" size={72}>P</Avatar>} description={<Radio.Group defaultValue="small">
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="medium">Medium</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
               </Radio.Group>} />
               <Divider type="horizontal" orientation="center" />
               <Card.Meta title="Pant" avatar={<Avatar shape="square" size={72}>P</Avatar>} description={<Radio.Group defaultValue="small">
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="medium">Medium</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
               </Radio.Group>} />
               <Divider type="horizontal" orientation="center" />
               <Card.Meta title="Sheo" avatar={<Avatar shape="square" size={72}>P</Avatar>} description={<Radio.Group defaultValue="small">
                  <Radio.Button value="small">Small</Radio.Button>
                  <Radio.Button value="medium">Medium</Radio.Button>
                  <Radio.Button value="large">Large</Radio.Button>
               </Radio.Group>} />
            </Card>
         }
         visible={visible}
         onVisibleChange={() => setVisibility((!visible))}
         placement="topRight"
         trigger="click"
      >
         <Button type="primary" size="large" shape="circle" style={{
            margin: "0 25px 65px 0",
            outlineColor: 'white',
            borderColor: 'transparent',
            backgroundColor: 'rgba(225,225,225, 0.25)',
         }}>
            {visible? <CloseOutlined style={{ color: 'white' }} /> : <PlusOutlined style={{ color: 'white' }} />}
         </Button>
      </Popover>
   )
}


function QuestStore() {

   //state = {
     // slidesToShow: 1
   //};

   const [slidesToShow, setSlidesToShow] = useState(1);


   // onSlide change function might be useful in the future
   const onChange = (current) => {
      // console.log(current);
   }

   const updateValues = ({ size, scroll, mouse }) => {
      if (size.changed){
        console.log("The size changed ");
        console.log(size.x, size.y);

         // change the number of slides according to screen size
         if(size.x <= 780) return setSlidesToShow(1);
         if(size.x <= 990) return setSlidesToShow(2);
         if(size.x <= 1720) return setSlidesToShow(3);
         if(size.x <= 2300) return setSlidesToShow(4);
      }
   }


   //componentDidMount() {
      //watchViewport(this.updateValues);
   //}

   useEffect(() => {
     let isSame = true;
     if(isSame) watchViewport(updateValues);
     return () => {
       isSame = false;
     }
   }, [updateValues]);

      //const router = useRouter();
      //console.log(router);

      return(
         <Row gutter={0} style={{
            margin: 0,
            padding: 0,
            height: '100%'
         }}>
            <Col span={24} style={{height: '100%', backgroundColor: '#eee'}}>
               <Carousel autoplay={false} draggable accessibility={true} style={{height: '100%'}} afterChange={onChange} slidesToShow={slidesToShow} centerPadding='30px' centerMode={true}>
                  <div className="prod-cols">
                     <ProdImg url="/img3.jpg" color="#6a1d2f">
                        {/* <h1>Product 1</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img2.jpg" color="#dea450">
                        {/* <h1>Product 2</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img3.jpg" color="#56373c">
                        {/* <h1>Product 1</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img1.jpg" color="#f9e07f">
                        {/* <h1>Product 3</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img3.jpg" color="#f9ad6a">
                        {/* <h1>Product 1</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img2.jpg" color="#f2a490">
                        {/* <h1>Product 2</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img3.jpg" color="#b9d4db">
                        {/* <h1>Product 1</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
                  <div className="prod-cols">
                     <ProdImg url="/img2.jpg" color="#de5b6d">
                        {/* <h1>Product 2</h1> */}
                        <HighBtn />
                     </ProdImg>
                  </div>
               </Carousel>
            </Col>
            {/* <Col span={24} style={{ margin: 0, padding: '24px 0', backgroundColor: '#eee'}}>
               <Row style={{ margin: 0, padding: 0, height: '100%' }}>
                  <Col xs={{span: 1}} sm={{span: 2}} lg={{span: 4}} xl={{span: 6}}></Col>
                  <Col xs={{span: 22}} sm={{span: 20}} lg={{span: 16}} xl={{span: 12}}>
                     <Row style={{margin: 0, padding: 0}}>
                        <Col span={12}>
                           <Card title="Outfit Detail 1"></Card>
                        </Col>
                        <Col span={12}>
                           <Card title="Outfit Detail 2"></Card>
                        </Col>
                        <Col span={24}>
                           <Card title="Outfit Detail 3"></Card>
                        </Col>
                     </Row>
                  </Col>
                  <Col xs={{span: 1}} sm={{span: 2}} lg={{span: 4}} xl={{span: 6}}></Col>
               </Row>
            </Col> */}
         <style jsx>{`
            div.prod-cols {
               // height: calc(100vh - 24px);
               height: 100vh;
               // width: 100vw;
               display: inline-block;

            }
         `}</style>
         </Row>
      )
}

export default BaseLayout(QuestStore);
