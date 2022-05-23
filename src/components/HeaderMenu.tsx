import { Menu } from "antd";
import Link from "next/link";

export const HeaderMenu = () => (
  <Menu
    mode="horizontal"
    style={{
      justifyContent: "right",
      flex: 1,
    }}
  >
    <Menu.Item key="1">Restaurantes</Menu.Item>
    <Menu.Item key="2">Meus pedidos</Menu.Item>
  </Menu>
);
