import { useState, useEffect, useContext } from "react";
import BaseLayout from "components/LayoutHOC";
import ProdImg from "components/SliderItems";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Carousel from "antd/lib/carousel";
import Button from "antd/lib/button";
import Popover from "antd/lib/popover";
import Card from "antd/lib/card";
import Radio from "antd/lib/radio";
import Avatar from "antd/lib/avatar";
import Divider from "antd/lib/divider";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import { watchViewport, unwatchViewport } from "tornis";

// import viewport context
import { ViewportContext } from "lib/VPContext";

// import { withRouter } from 'next/router';
// const RadioGroup = Radio.Group;

const HighBtn = (props) => {
  const [visible, setVisibility] = useState(false);
  return (
    <Popover
      content={
        <Card
          bordered={false}
          bodyStyle={{
            padding: "10px 0",
            display: "flex",
            flexFlow: "column",
          }}
          actions={[
            <Button
              type="link"
              onClick={() => setVisibility((visible) => !visible)}
            >
              ADD TO CART
            </Button>,
          ]}
        >
          <Card.Meta
            title="Top"
            avatar={
              <Avatar shape="square" size={72}>
                P
              </Avatar>
            }
            description={
              <Radio.Group defaultValue="small">
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="medium">Medium</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            }
          />
          <Divider type="horizontal" orientation="center" />
          <Card.Meta
            title="Pant"
            avatar={
              <Avatar shape="square" size={72}>
                P
              </Avatar>
            }
            description={
              <Radio.Group defaultValue="small">
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="medium">Medium</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            }
          />
          <Divider type="horizontal" orientation="center" />
          <Card.Meta
            title="Sheo"
            avatar={
              <Avatar shape="square" size={72}>
                P
              </Avatar>
            }
            description={
              <Radio.Group defaultValue="small">
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="medium">Medium</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            }
          />
        </Card>
      }
      visible={visible}
      onVisibleChange={() => setVisibility(!visible)}
      placement="topRight"
      trigger="click"
    >
      <Button
        type="primary"
        size="large"
        shape="circle"
        style={{
          margin: "0 25px 30px 0",
          outlineColor: "white",
          borderColor: "transparent",
          backgroundColor: "rgba(225,225,225, 0.25)",
        }}
      >
        {visible ? (
          <CloseOutlined style={{ color: "white" }} />
        ) : (
          <PlusOutlined style={{ color: "white" }} />
        )}
      </Button>
    </Popover>
  );
};

function QuestStore() {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [vpSize, setVpSize] = useContext(ViewportContext);

  // onSlide change function might be useful in the future
  const onChange = (current) => {
    // console.log(current);
  };

  useEffect(() => {
    let isSame = true;
    if (vpSize <= 780) return setSlidesToShow(1);
    if (vpSize <= 990) return setSlidesToShow(2);
    if (vpSize <= 1720) return setSlidesToShow(3);
    if (vpSize <= 2300) return setSlidesToShow(4);
    return () => {
      isSame = false;
      // unwatchViewport(updateValues);
    };
  }, [vpSize]);

  // //const router = useRouter();
  // console.log(vpSize);

  

  return (
    <Row
      gutter={0}
      style={{
        margin: 0,
        padding: 0,
        height: "100%",
      }}
    >
      <Col span={24} style={{ height: "100%", backgroundColor: "#eee" }}>
        <Carousel
          autoplay={false}
          draggable
          accessibility={true}
          style={{ height: "100%" }}
          afterChange={onChange}
          slidesToShow={slidesToShow}
          centerPadding="35px"
          centerMode={true}
        >
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
      <style jsx>{`
        div.prod-cols {
          display: inline-block;
          height: calc(100vh - 84px);
          // height: 100%;
          // width: 100vw;
        }
      `}</style>
    </Row>
  );
}

export default BaseLayout(QuestStore);
