import { useItems } from "../store/store";

export default function ShoppingList() {
  const { items } = useItems();
  console.log(items);
  return <></>;
}
