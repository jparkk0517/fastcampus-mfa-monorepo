import React from "react";
import Modal from "./Modal";
import Table from "./Table";

export default class Sns extends React.Component {
  state = {
    selectedPost: undefined,
    posts: [],
  };
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((posts) => {
        this.setState({
          posts,
        });
      });
  }
  render() {
    const { posts, selectedPost } = this.state;
    return (
      <>
        {selectedPost !== undefined && (
          <Modal
            open={true}
            title="post 상세"
            onClose={() =>
              this.setState({ ...this.state, selectedPost: undefined })
            }
          >
            <p>제목 : {this.state.selectedPost.title}</p>
            <p>내용 : {this.state.selectedPost.body}</p>
          </Modal>
        )}

        <Table
          columns={[
            {
              key: "userId",
              title: "게시자",
            },
            {
              key: "title",
              title: "제목",
            },
            {
              key: "body",
              title: "내용",
            },
          ]}
          datas={posts}
          rowKey={(data) => data.id}
          onRowClick={(selectedPost) =>
            this.setState({ ...this.state, selectedPost })
          }
        />
      </>
    );
  }
}
