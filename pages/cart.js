import { Component } from 'react';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Card from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import BaseLayout from '../components/LayoutHOC';
import { ShoppingCartOutlined, CloseOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button';
import List from 'antd/lib/list';
import Divider from 'antd/lib/divider';

const data = [
   {
      name: "Air Jordans 1",
      desc: "$1200"
   },
   {
      name: "Air Jordans 1",
      desc: "$1200"
   },
   {
      name: "Air Jordans 1",
      desc: "$1200"
   }
];

class Cart extends Component {
   render() {
      return (
         <>
            <Row style={{ width: '100%', height: '100%', margin: 0, padding: '65px 0', backgroundColor: "#f9ad6a" }}>
               <Col xs={{span: 1}} sm={{span: 2}} lg={{span: 4}} xl={{span: 6}}></Col>
               <Col xs={{span: 22}} sm={{span: 20}} lg={{span: 16}} xl={{span: 12}}>
                  <Row gutter={[16, 16]} style={{margin: 0, padding: 0, width: '100%'}}>
                     <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                        <Card
                           title="Cart Items"
                           extra="Total Price"
                           bodyStyle={{
                              padding: '20px 20px'
                           }}
                           actions={[<Button type="link" style={{color: 'red'}}>CLEAR CART</Button>, <Button type="link">CHECKOUT</Button>]}
                        >
                           <h3>Outfit name</h3>
                           <Card.Meta
                              avatar={
                                 <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexFlow: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-around',
                                    marginBottom: 16
                                 }}>
                                    <Avatar size={72} shape="square" style={{marginRight: 15}}>M</Avatar>
                                    <Avatar size={72} shape="square" style={{marginRight: 15}}>M</Avatar>
                                    <Avatar size={72} shape="square" style={{marginRight: 15}}>M</Avatar>
                                    <Avatar size={72} shape="square" style={{marginRight: 15}}>M</Avatar>
                                 </div>
                              }
                           />
                           <Divider orientation="center" type="horizontal" />
                           <List
                              dataSource={data}
                              itemLayout="vertical"
                              // header={<h3></h3>}
                              
                              renderItem={item => (
                                 <List.Item  extra={<CloseOutlined style={{color: "red"}} />}>
                                    <List.Item.Meta title={item.name} description={item.desc} avatar={<Avatar size={62} shape="square" style={{marginRight: 15}}>M</Avatar>}/>
                                 </List.Item>
                              )}
                           />
                        </Card>
                     </Col>
                  </Row>
               </Col>
               <Col xs={{span: 1}} sm={{span: 2}} lg={{span: 4}} xl={{span: 6}}></Col>
            </Row>
            <style jsx global>{`
               
            `}</style>
         </>
      )
   }
}

export default BaseLayout(Cart);
