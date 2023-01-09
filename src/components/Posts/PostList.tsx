import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

type Props = {}

const PostList = (props: Props) => {
    const columns: ColumnsType<any> = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Hình thức làm việc',
            dataIndex: 'format',
            key: 'format',
        },
        {
            title: 'Ngân sách',
            dataIndex: 'budget',
            key: 'budget',
        },
        {
            title: 'Khu vực',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }: { tags: any[] }) => (
                <>
                    {tags.map((tag) => {
                        let color = '';
                        if (tag === 'Đã duyệt') {
                            color = 'green';
                        } else if (tag === 'Đang chờ duyệt') {
                            color = 'gold';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Hành động',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <EditOutlined />
                    <DeleteOutlined />
                </Space>
            ),
        },
    ];

    const data: any[] = [
        {
            key: '1',
            title: 'CV1',
            amount: 1,
            budget: '$100',
            format: 'online',
            address: 'HN',
            tags: ['Đã duyệt'],
        },
        {
            key: '2',
            title: 'CV2',
            amount: 3,
            budget: '$200',
            format: 'offline',
            address: 'HCM',
            tags: ['Đang chờ duyệt'],
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default PostList