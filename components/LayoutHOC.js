import { useState, useEffect, memo } from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Space from "antd/lib/space";
import Divider from "antd/lib/divider";
import {
  BellOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar";
import Badge from "antd/lib/badge";
import Popover from "antd/lib/popover";
import Button from "antd/lib/button";
import Link from "next/link";
import Navigation from "./Navigation";

// import context and provider
import { ViewportProvider } from "lib/VPContext";

const { Content, Header } = Layout;

const PageContent = memo(({pathname, setVisible, visible, MyPage}) => {
  return (
    <>
      <Header
        style={{
          margin: 0,
          padding: "10px 20px",
          // marginBottom: 4,
          // borderBottom: '1p solid grey',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          width: "100%",
          height: "auto",
          backgroundColor: "inherit",
          // borderBottom: '2px solid black'
        }}
      >
        <Row
          gutter={0}
          style={{
            margin: 0,
            padding: 0,
            height: 64,
            width: "100%",
            backgroundColor: "#FFF",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Col
            xs={{ span: 4 }}
            sm={{ span: 3 }}
            md={{ span: 3 }}
            lg={{ span: 3 }}
            style={{
              margin: 0,
              // paddingLeft: "5%",
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "inherit",
              background: "#E1E1E1",
            }}
          >
            <Link passHref href="/">
              <Avatar
                src="/vercel.svg"
                size="default"
                // style={{ marginLeft: 20 }}
              />
            </Link>
          </Col>
          <Col
            xs={{ span: 16 }}
            sm={{ span: 18 }}
            md={{ span: 18 }}
            lg={{ span: 18 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Space align="center" size="middle">
              <Navigation />
            </Space>
          </Col>
          <Col
            xs={{ span: 4 }}
            sm={{ span: 3 }}
            md={{ span: 3 }}
            lg={{ span: 3 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // paddingRight: "5%",
              height: "inherit",
              background: "#000",
            }}
          >
            {/* {pathname == "/cart" ? (
                  <Space align="center" size="middle">
                    <Button
                      onClick={() => push("/store")}
                      type="link"
                      size="default"
                      style={{
                        background: "white",
                        borderRadius: 20,
                        color: "#6a1d2f",
                      }}
                    >
                      KEEP SHOPPING
                    </Button>
                    <Button
                      onClick={() => setVisible(true)}
                      type="link"
                      size="default"
                      style={{
                        border: "2px solid white",
                        borderRadius: 20,
                        color: "white",
                      }}
                    >
                      CHECKOUT
                    </Button>
                  </Space>
                ) : (
                  <Space align="center" size="small" split={<Divider type="vertical" />}>
                    <SearchOutlined
                      style={{ color: "white", fontSize: 20, }}
                    />
                  </Space>
                )} */}

            {pathname !== "/cart" ? (
              <Link href="/cart" passHref>
                <div style={{ cursor: "pointer" }}>
                  <Badge dot style={{ right: 5, top: 5 }}>
                    <ShoppingOutlined
                      style={{ fontSize: 20, color: "white" }}
                    />
                  </Badge>
                </div>
              </Link>
            ) : (
              <Button
                onClick={() => setVisible(true)}
                type="link"
                size="default"
                style={{
                  borderColor: "transparent",
                  borderRadius: 20,
                  color: "white",
                }}
              >
                <ArrowRightOutlined style={{ fontSize: 20, color: "#FFF" }} />
              </Button>
            )}
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "84px 0 0 0",
          margin: 0,
          minHeight: "calc(100vh - 84px)",
        }}
      >
        <MyPage setVisible={setVisible} visible={visible} />
      </Content>
    </>
  );
});

function BaseLayout(MyPage) {
  return ({ pathname, push }) => {
    const [visible, setVisible] = useState(false);

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <ViewportProvider>
          <PageContent MyPage={MyPage} pathname={pathname} visible={visible} setVisible={setVisible} />
        </ViewportProvider>

        <style jsx global>{`
          .ant-select-arrow {
            color: white;
          }
        `}</style>
      </Layout>
    );
  };
}

export default BaseLayout;
