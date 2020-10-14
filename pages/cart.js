import { useState } from "react";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar";
import Drawer from "antd/lib/drawer";
import BaseLayout from "../components/LayoutHOC";
import { ShoppingCartOutlined, CloseOutlined } from "@ant-design/icons";
import Button from "antd/lib/button";
import List from "antd/lib/list";
import Divider from "antd/lib/divider";

// const data = [
//   {
//     name: "Air Jordans 1",
//     desc: "$1200",
//   },
//   {
//     name: "Air Jordans 1",
//     desc: "$1200",
//   },
//   {
//     name: "Air Jordans 1",
//     desc: "$1200",
//   },
// ];

function Cart({visible, setVisible}) {

  return (
    <>
      <Row
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "65px 0",
          backgroundColor: "#f9ad6a",
        }}
      >
        <Col
          xs={{ span: 1 }}
          sm={{ span: 2 }}
          lg={{ span: 4 }}
          xl={{ span: 6 }}
        >
					
				</Col>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 20 }}
          lg={{ span: 16 }}
          xl={{ span: 12 }}
        ></Col>
        <Col
          xs={{ span: 1 }}
          sm={{ span: 2 }}
          lg={{ span: 4 }}
          xl={{ span: 6 }}
        ></Col>
      </Row>
      <Drawer
        title="Create a new account"
        width='40%'
        onClose={() => setVisible(false)}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={() => setVisible(false)} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={() => setVisible(false)} type="primary">
              Submit
            </Button>
          </div>
        }
      >
				<h1>The checkout drawer</h1>
			</Drawer>
      <style jsx global>{``}</style>
    </>
  );
}

export default BaseLayout(Cart);
