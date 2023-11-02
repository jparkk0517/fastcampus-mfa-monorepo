import { useItems } from "../store/store";
import Button from "./Button";
import Table from "./Table";

export default function ShoppingList() {
  const { items, deleteItem } = useItems();

  return (
    <Table
      columns={[
        {
          key: "name",
          title: "물품명",
        },
        {
          key: "price",
          title: "가격",
          render(value: number) {
            return value.toLocaleString() + "원";
          },
        },
        {
          key: "count",
          title: "수량",
          render(value: number) {
            return value.toLocaleString() + "개";
          },
        },
        {
          key: "id",
          title: "처리",
          render(value: string) {
            return (
              <Button buttonType="cancel" onClick={() => deleteItem(value)}>
                삭제
              </Button>
            );
          },
        },
      ]}
      datas={items}
      rowKey={(data) => data.id}
      onRowClick={(data) => console.log(data)}
    />
  );
}
