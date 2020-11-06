import { component } from 'react';
import Menu from "antd/lib/menu";
// import router modules
import { useRouter } from "next/router";

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

export default Navigation;