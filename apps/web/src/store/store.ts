import { create } from "zustand";

export interface Item {
  id: string;
  name: string;
  price: number;
  count: number;
}

const useItems = create<{
  items: Item[];
  deleteItem: (id: string) => void;
}>((set) => ({
  items: [
    {
      id: "iphone",
      name: "아이폰15",
      price: 1500000,
      count: 10,
    },
    {
      id: "ipad mini6",
      name: "아이패드 미니 6",
      price: 700000,
      count: 2,
    },
    {
      id: "m1 mac mini",
      name: "m1 mac mini",
      price: 1500000,
      count: 13,
    },
    {
      id: "usb",
      name: "32gb usb",
      price: 20000,
      count: 1,
    },
    {
      id: "imac",
      name: "아이맥",
      price: 3000000,
      count: 12,
    },
  ],
  deleteItem(id) {
    set(({ items, deleteItem }) => ({
      items: items.filter((item) => item.id !== id),
      deleteItem,
    }));
  },
}));

export { useItems };
