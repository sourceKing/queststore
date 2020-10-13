import { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Carousel from 'antd/lib/carousel';
import Card from 'antd/lib/card';



const SliderImg = ({url}) => (
   <div style={{
      display: 'inline-block',
      width: '100%',
      height: 'calc(100vh - 72px)',
      backgroundImage: "url('"+url+"')",
      backgroundPosition: 'center',
      backgroundSize: '200%',
      backgroundRepeat: 'no-repeat'
   }}>
      
   </div>
)

class HeroSlider extends Component {

   render() {
      const { prods, beforeChange } = this.props;

      return (
         <Card bodyStyle={{ padding: 0, margin: 0}}>
            <Carousel autoplay draggable beforeChange={beforeChange} autoplaySpeed={3000}>
               {prods.map(item => <SliderImg url={item.url} key={item.price} />)}
            </Carousel>
         </Card>
      )
   }
}

export default HeroSlider;