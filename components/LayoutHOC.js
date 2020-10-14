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

  const onChange = (value) => {
    router.push(value);
  };

  if (pathname === "/outfits") {
    return (
      <>
        <Select
          defaultValue={pathname}
          bordered={false}
          showArrow={false}
          style={{ color: "#1890ff", fontWeight: "bolder", width: 100 }}
          dropdownStyle={{ textAlign: "center" }}
          onSelect={onChange}
        >
          <Option value="/">Home</Option>
          <Option value="/store">Store</Option>
          <Option value="/outfits">Outfits</Option>
        </Select>{" "}
        <b> - </b>
        <Select
          placeholder="Filter"
          bordered={false}
          showArrow={false}
          style={{ color: "#1890ff", fontWeight: "bolder", width: 100 }}
          dropdownStyle={{ textAlign: "center" }}
          onSelect={(value) => console.log(value)}
        >
          <Option value="women">Women</Option>
          <Option value="men">Men</Option>
          <Option value="girls">Girls</Option>
          <Option value="boys">Boys</Option>
        </Select>
      </>
    );
  } else if (pathname === "/store") {
    return (
      <>
        <Select
          defaultValue={pathname}
          bordered={false}
          showArrow={false}
          style={{ color: "#1890ff", fontWeight: "bolder", width: 150 }}
          dropdownStyle={{ textAlign: "center" }}
          onSelect={onChange}
        >
          <Option value="/">Home</Option>
          <Option value="/store">Store</Option>
          <Option value="/outfits">Outfits</Option>
        </Select>{" "}
        <b> - </b>
        <Select
          placeholder="Filter"
          bordered={false}
          showArrow={false}
          style={{ color: "#1890ff", fontWeight: "bolder", width: 150 }}
          dropdownStyle={{ textAlign: "center" }}
          onSelect={(value) => console.log(value)}
        >
          <Option value="size">Size</Option>
          <Option value="color">Color</Option>
          <Option value="price">Price</Option>
          <Option value="season">Season</Option>
        </Select>
      </>
    );
  }

  return (
    <Select
      defaultValue={pathname}
      bordered={false}
      showArrow={false}
      style={{ color: "#1890ff", fontWeight: "bolder", width: 150 }}
      dropdownStyle={{ textAlign: "center" }}
      onSelect={onChange}
    >
      <Option value="/">Home</Option>
      <Option value="/store">Store</Option>
      <Option value="/outfits">Outfits</Option>
    </Select>
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
            marginBottom: 4,
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
              backgroundColor: "#6a1d2f",
              borderRadius: 10,
            }}
          >
            <Col
              xs={{ span: 8 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              style={{
								margin: 0,
								paddingLeft: "5%",
                display: "flex",
                flexFlow: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Avatar
                src="/vercel.svg"
                size="default"
                // style={{ marginLeft: 20 }}
              />
            </Col>
            <Col
              xs={{ span: 8 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Navigation />
            </Col>
            <Col
              xs={{ span: 8 }}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 8 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "5%",
              }}
            >
              {pathname == "/cart" ? (
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
                  <Link href="/cart" passHref>
                    <div style={{ cursor: "pointer" }}>
                      <Badge dot style={{ right: 5, top: 5 }}>
                        <ShoppingOutlined
                          style={{ fontSize: 20, color: "white" }}
                        />
                      </Badge>
                    </div>
                  </Link>
                </Space>
              )}
              {/* <Popover content={<UserNavigation />} placement="bottomLeft">
                           <Avatar size="default" shape="circle" icon={<UserOutlined />} style={{margin: '0 20px 0 10px'}}></Avatar>
                        </Popover> */}
            </Col>
          </Row>
        </Header>
        <Content
          style={{ padding: 0, margin: 0, height: "calc(100vh - 72px)" }}
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
