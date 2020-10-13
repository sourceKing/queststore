import { ScissorOutlined, PlusOutlined, MinusOutlined, FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

function HighBtn (props){
   return (
      <div style={{
         display: 'flex',
         flexFlow: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         width: 'auto',
         height: 'auto',
         padding: 5,
         margin: 35,
         border: '1px solid white'
      }}>
         <div style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: 'auto'
         }}>
            <Button type="primary" size="large" shape="circle" style={{
               backgroundColor: 'rgba(225,225,225, 0.25)',
               // margin: 35,
               borderColor: 'transparent',
               outlineColor: 'white'
            }}>
               <MinusOutlined style={{ color: 'white' }} />
            </Button>
            <Button type="primary" size="large" shape="circle" style={{
               backgroundColor: 'rgba(225,225,225, 0.25)',
               // margin: 35,
               borderColor: 'transparent',
               outlineColor: 'white'
            }}>
               <FacebookOutlined style={{ color: 'white' }} />
            </Button>
            <Button type="primary" size="large" shape="circle" style={{
               backgroundColor: 'rgba(225,225,225, 0.25)',
               // margin: 35,
               borderColor: 'transparent',
               outlineColor: 'white'
            }}>
               <PlusOutlined style={{ color: 'white' }} />
            </Button>
         </div>
         <Button type="primary" size="large" shape="circle" style={{
            backgroundColor: 'rgba(225,225,225, 0.25)',
            // margin: 35,
            borderColor: 'transparent',
            outlineColor: 'white'
         }}>
            <InstagramOutlined style={{ color: 'white' }} />
         </Button>
         <Button type="primary" size="large" shape="circle" style={{
            backgroundColor: 'rgba(225,225,225, 0.25)',
            // margin: 35,
            borderColor: 'transparent',
            outlineColor: 'white'
         }}>
            <WhatsAppOutlined style={{ color: 'white' }} />
         </Button>
         <Button type="primary" size="large" shape="circle" style={{
            backgroundColor: 'rgba(225,225,225, 0.25)',
            // margin: 35,
            borderColor: 'transparent',
            outlineColor: 'white'
         }}>
            <ScissorOutlined style={{ color: 'white' }} />
         </Button>
      </div>
   )
} 
   

export default HighBtn;