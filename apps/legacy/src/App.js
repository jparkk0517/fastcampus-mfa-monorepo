import Button from "./components/Button";
import Modal from "./components/Modal";
import Table from "./components/Table";

const items = [
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
];

function App() {
  return (
    <div className="App">
      legacy app
      <Button>확인</Button>
      <Modal open={true} title="post 상세" onClose={() => console.log("close")}>
        <Table
          columns={[
            {
              key: "name",
              title: "물품명",
            },
            {
              key: "price",
              title: "가격",
            },
            {
              key: "count",
              title: "수량",
            },
            {
              key: "id",
              title: "처리",
            },
          ]}
          datas={items}
          rowKey={(data) => data.id}
          onRowClick={(data) => console.log(data)}
        />
      </Modal>
      <Button buttonType="cancel">취소</Button>
    </div>
  );
}

export default App;
