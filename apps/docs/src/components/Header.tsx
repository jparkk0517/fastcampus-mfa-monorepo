import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useShadowDOM } from "./ShadowDOM";

const items = [
  {
    key: "mailList",
    label: <Link to="/mailList">mailList</Link>,
  },
  {
    key: "shoppingList",
    label: <Link to="/shoppingList">shoppingList</Link>,
  },
  {
    key: "sns",
    label: <Link to="/sns">sns</Link>,
  },
  {
    key: "web",
    label: <Link to="/web">web</Link>,
  },
  {
    key: "legacy",
    label: <Link to="/legacy">legacy</Link>,
  },
];

export default function Header() {
  const shadowRoot = useShadowDOM();
  return (
    <Menu
      mode="horizontal"
      items={items}
      theme="dark"
      getPopupContainer={() => shadowRoot as unknown as HTMLElement}
    />
  );
}
