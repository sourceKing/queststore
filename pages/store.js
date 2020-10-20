import { useState, useEffect } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Image from 'antd/lib/image';
import Divider from 'antd/lib/divider';
import Space from 'antd/lib/space';
import { HeartOutlined, ExpandOutlined } from "@ant-design/icons";
import BaseLayout from "components/LayoutHOC";

function Store() {
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "auto 10px",
          position: "relative",
          display: "inline-block",
        }}
      >
        <div
          style={{
            // width: "95%",
            borderRadius: 10,
            height: 280,
            background: "#E2BE00",
            display: "inline-block",
            position: "absolute",
            top: 0,
            left: 10,
            right: 10,
            margin: "0 auto",
          }}
        ></div>
        <Row
          gutter={0}
          style={{
            margin: 0,
            padding: 0,
            paddingBottom: 90,
            zIndex: 10,
            position: "relative",
          }}
        >
          <Col span={2} style={{ margin: 0, padding: 0 }}></Col>
          <Col span={20} style={{ margin: 0, padding: 0 }}>
            <Row
              gutter={[8, 8]}
              style={{ margin: 0, padding: 0, paddingTop: 90 }}
            >
              <Col span={6} style={{ margin: 0 }}>
                <Card
                  title={<Space direction="horizontal" size={82} ><ExpandOutlined /> <HeartOutlined /></Space>}
                  style={{
                    background:
                      "radial-gradient(rgba(225,225,225,.5) 20%, white)",
                    // backgroundImage: "url('/prod-img.jpg')",
                    // backgroundSize: '90%',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // height: 320,
                    height: 'auto',
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    paddingTop: 0,
                  }}
                >
                  <Image src="/prod-img.jpg" height={230} width={'100%'} />
                  {/* <Divider orientation="center" type="horizontal"></Divider> */}
                  <Card.Meta title="Popular dress amy" description="$236.00" />
                </Card>
              </Col>
              <Col span={6} style={{ margin: 0 }}>
                <Card
                  title={<Space direction="horizontal" size={82} ><ExpandOutlined /> <HeartOutlined /></Space>}
                  style={{
                    background:
                      "radial-gradient(rgba(225,225,225,.5) 20%, white)",
                    // backgroundImage: "url('/prod-img.jpg')",
                    // backgroundSize: '90%',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // height: 320,
                    height: 'auto',
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    paddingTop: 0,
                  }}
                >
                  <Image src="/prod-img.jpg" height={230} width={'100%'} />
                  {/* <Divider orientation="center" type="horizontal">Popular dress amy</Divider> */}
                  <Card.Meta title="Popular dress amy" description="$236.00" />
                </Card>
              </Col>
              <Col span={6} style={{ margin: 0 }}>
                <Card
                  title={<Space direction="horizontal" size={82} ><ExpandOutlined /> <HeartOutlined /></Space>}
                  style={{
                    background:
                      "radial-gradient(rgba(225,225,225,.5) 20%, white)",
                    // backgroundImage: "url('/prod-img.jpg')",
                    // backgroundSize: '90%',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // height: 320,
                    height: 'auto',
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    paddingTop: 0,
                  }}
                >
                  <Image src="/prod-img.jpg" height={230} width={'100%'} />
                  {/* <Divider orientation="center" type="horizontal">Popular dress amy</Divider> */}
                  <Card.Meta title="Popular dress amy" description="$236.00" />
                </Card>
              </Col>
              <Col span={6} style={{ margin: 0 }}>
                <Card
                  title={<Space direction="horizontal" size={82} ><ExpandOutlined /> <HeartOutlined /></Space>}
                  style={{
                    background:
                      "radial-gradient(rgba(225,225,225,.5) 20%, white)",
                    // backgroundImage: "url('/prod-img.jpg')",
                    // backgroundSize: '90%',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // height: 320,
                    height: 'auto',
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    paddingTop: 0,
                  }}
                >
                  <Image src="/prod-img.jpg" height={230} width={'100%'} />
                  {/* <Divider orientation="center" type="horizontal">Popular dress amy</Divider> */}
                  <Card.Meta title="Popular dress amy" description="$236.00" />
                </Card>
              </Col>
              <Col span={6} style={{ margin: 0 }}>
                <Card
                  title={<Space direction="horizontal" size={82} ><ExpandOutlined /> <HeartOutlined /></Space>}
                  style={{
                    background:
                      "radial-gradient(rgba(225,225,225,.5) 20%, white)",
                    // backgroundImage: "url('/prod-img.jpg')",
                    // backgroundSize: '90%',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // height: 320,
                    height: 'auto',
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    paddingTop: 0,
                  }}
                >
                  <Image src="/prod-img.jpg" height={230} width={'100%'} />
                  {/* <Divider orientation="center" type="horizontal">Popular dress amy</Divider> */}
                  <Card.Meta title="Popular dress amy" description="$236.00" />
                </Card>
              </Col>
              <Col span={6} style={{ margin: 0 }}>
                <Card
                  title={<Space direction="horizontal" size={82} ><ExpandOutlined /> <HeartOutlined /></Space>}
                  style={{
                    background:
                      "radial-gradient(rgba(225,225,225,.5) 20%, white)",
                    // backgroundImage: "url('/prod-img.jpg')",
                    // backgroundSize: '90%',
                    // backgroundPosition: 'center',
                    // backgroundRepeat: 'no-repeat',
                    // height: 320,
                    height: 'auto',
                    borderRadius: 10,
                    textAlign: 'center',
                  }}
                  bodyStyle={{
                    paddingTop: 0,
                  }}
                >
                  <Image src="/prod-img.jpg" height={230} width={'100%'} />
                  {/* <Divider orientation="center" type="horizontal">Popular dress amy</Divider> */}
                  <Card.Meta title="Popular dress amy" description="$236.00" />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={2} style={{ margin: 0, padding: 0 }}></Col>
        </Row>
      </div>
      <style jsx global>{`
        .ant-card-meta-title {
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}

export default BaseLayout(Store);
