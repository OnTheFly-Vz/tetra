import React from "react";
import { PureComponent } from "react";
import { Layout, Menu, Divider, Table, Tag, Button } from "antd";
const { Header, Content, Sider } = Layout;

const columns = [
  {
    title: "Event",
    dataIndex: "event",
    key: "event",
    render: (text) => text
  },
  {
    title: "#",
    dataIndex: "number",
    key: "number"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    event: "John Brown",
    number: 32,
    address: "New York No. 1 Lake Park",
    status: "",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    event: "Jim Green",
    number: 42,
    address: "London No. 1 Lake Park",
    status: "",
    tags: ["loser"]
  },
  {
    key: "3",
    event: "Joe Black",
    number: 32,
    address: "Sidney No. 1 Lake Park",
    status: "",
    tags: ["cool", "teacher"]
  }
];

export class EventComponent extends PureComponent {
  render() {
    return (
      <Layout style={{ padding: "24px 0", background: "#fff" }}>
        <Content>
          <div>
            <h1 style={{ textAlign: "left" }}>Events</h1>
          </div>
          <Divider />
          <div />
          <div>
            <Table columns={columns} dataSource={data} />
          </div>
        </Content>
        <Sider width={200} style={{ background: "#fff" }}>
          <div>
            <h1> Options </h1>
          </div>
          <Divider />
          <Button type="primary" block>
            Add a New Event
          </Button>
          <p>Events are hosted athletic events wherein athlete performance and physical attributes are measured.
          </p>
          <ol> =Premier Event </ol>
          <ol> =Pending Approval</ol>
          <ol> =Recurring Event</ol>
          <ol> =Auto Scheduled</ol>
        </Sider>
      </Layout>
    );
  }
}

export default EventComponent;
