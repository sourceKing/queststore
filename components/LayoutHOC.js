import { useState, useEffect } from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Menu from "antd/lib/menu";
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
import Select from "antd/lib/select";
import Button from "antd/lib/button";
import Link from "next/link";

// import router modules
import { useRouter } from "next/router";

const { Content, Header } = Layout;
const { Option } = Select;

// function Comp for menu navigation
function Navigation() {
  // const [menuItem, setMenuItem] = useState('/');
  const router = useRouter();
  const { query, pathname } = router;
  // console.log(pathname, query);

  const onChange = (e) => {
    router.push(e.key);
  };

  if (pathname === "/cart") {
    return null
  }

  return (
    <Menu mode="horizontal" theme='light' style={{background: 'transparent'}} selectedKeys={[pathname]} onClick={onChange}>
      <Menu.Item key="/">Home</Menu.Item>
      <Menu.Item key="/store">Store</Menu.Item>
      {/* <Menu.Item></Menu.Item> */}
      <Menu.Item key="/outfits">Outfits</Menu.Item>
    </Menu>
  );
}

function UserNavigation() {
  return (
    <Menu mode="vertical" theme="light" defaultSelectedKeys={["profile"]}>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="order">Order</Menu.Item>
      {/* <Menu.Item></Menu.Item> */}
      <Menu.Item key="sign-out">Sign Out</Menu.Item>
    </Menu>
  );
}

function BaseLayout(MyPage) {
  // const {
  //   router: { pathname },
  // } = useRouter();

  return ({ pathname, push }) => {
    const [visible, setVisible] = useState(false);

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            padding: 0,
            margin: 0,
            // marginBottom: 4,
            // borderBottom: '1p solid grey',
            // position: "fixed",
            // zIndex: 1,
            width: "100%",
            height: "auto",
            backgroundColor: "transparent",
            padding: 10,
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
          style={{ padding: 0, margin: 0, height: "calc(100vh - 84px)" }}
        >
          <MyPage setVisible={setVisible} visible={visible} />
        </Content>

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
