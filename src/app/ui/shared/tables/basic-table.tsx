import { Table} from '@chakra-ui/react';

export default function BasicTable({
  header,
  children,
  appendClass,
  className,
}: Readonly<BasicTableProps>) {
  return (

    <div className={`table-container bg-white basic-table ${appendClass ?? ''}`}>
      <Table.Root size="sm" className={className}>
        <Table.Header>
          <Table.Row>
            {header?.map((item) => (
              <Table.ColumnHeader className='lg:text-[1.4rem]' _first={{ paddingLeft: '1.8rem' }} key={item.title}>
                {item.title}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>{children}</Table.Body>
      </Table.Root>
    </div>
  );
}

interface BasicTableProps {
  children: React.ReactNode;
  appendClass?: string;
  className?: string;
  header: {
    title: string;
    trailing?: React.ReactNode;
  }[];
}
