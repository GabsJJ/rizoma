import { DataTable } from './data-table'
import { Payment, columns } from './columns'

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: '1a2b3c01',
      amount: 100,
      status: 'pending',
      username: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: '1a2b3c02',
      amount: 125,
      status: 'processing',
      username: 'Gabriel Julio',
      email: 'gabriel.julio@example.com',
    },
    {
      id: '1a2b3c03',
      amount: 200,
      status: 'success',
      username: 'Alice Johnson',
      email: 'alice.johnson@example.com',
    },
    {
      id: '1a2b3c04',
      amount: 75,
      status: 'failed',
      username: 'Michael Smith',
      email: 'michael.smith@example.com',
    },
    {
      id: '1a2b3c05',
      amount: 150,
      status: 'pending',
      username: 'Sophia Brown',
      email: 'sophia.brown@example.com',
    },
    {
      id: '1a2b3c06',
      amount: 320,
      status: 'processing',
      username: 'David Wilson',
      email: 'david.wilson@example.com',
    },
    {
      id: '1a2b3c07',
      amount: 450,
      status: 'success',
      username: 'Emma Davis',
      email: 'emma.davis@example.com',
    },
    {
      id: '1a2b3c08',
      amount: 220,
      status: 'failed',
      username: 'Lucas Martinez',
      email: 'lucas.martinez@example.com',
    },
    {
      id: '1a2b3c09',
      amount: 90,
      status: 'pending',
      username: 'Olivia Garcia',
      email: 'olivia.garcia@example.com',
    },
    {
      id: '1a2b3c10',
      amount: 135,
      status: 'processing',
      username: 'Ethan Miller',
      email: 'ethan.miller@example.com',
    },
    {
      id: '1a2b3c11',
      amount: 500,
      status: 'success',
      username: 'Isabella Rodriguez',
      email: 'isabella.rodriguez@example.com',
    },
    {
      id: '1a2b3c12',
      amount: 60,
      status: 'failed',
      username: 'James Anderson',
      email: 'james.anderson@example.com',
    },
    {
      id: '1a2b3c13',
      amount: 300,
      status: 'pending',
      username: 'Mia Thompson',
      email: 'mia.thompson@example.com',
    },
    {
      id: '1a2b3c14',
      amount: 270,
      status: 'processing',
      username: 'Benjamin Martinez',
      email: 'benjamin.martinez@example.com',
    },
    {
      id: '1a2b3c15',
      amount: 410,
      status: 'success',
      username: 'Charlotte White',
      email: 'charlotte.white@example.com',
    },
    {
      id: '1a2b3c16',
      amount: 190,
      status: 'failed',
      username: 'Daniel Harris',
      email: 'daniel.harris@example.com',
    },
    {
      id: '1a2b3c17',
      amount: 210,
      status: 'pending',
      username: 'Amelia Clark',
      email: 'amelia.clark@example.com',
    },
    {
      id: '1a2b3c18',
      amount: 145,
      status: 'processing',
      username: 'Henry Lewis',
      email: 'henry.lewis@example.com',
    },
    {
      id: '1a2b3c19',
      amount: 330,
      status: 'success',
      username: 'Evelyn Lee',
      email: 'evelyn.lee@example.com',
    },
    {
      id: '1a2b3c20',
      amount: 70,
      status: 'failed',
      username: 'Alexander Walker',
      email: 'alexander.walker@example.com',
    },
    {
      id: '1a2b3c21',
      amount: 250,
      status: 'pending',
      username: 'Harper Hall',
      email: 'harper.hall@example.com',
    },
    {
      id: '1a2b3c22',
      amount: 400,
      status: 'processing',
      username: 'Jack Allen',
      email: 'jack.allen@example.com',
    },
    {
      id: '1a2b3c23',
      amount: 520,
      status: 'success',
      username: 'Avery Young',
      email: 'avery.young@example.com',
    },
    {
      id: '1a2b3c24',
      amount: 180,
      status: 'failed',
      username: 'Sebastian King',
      email: 'sebastian.king@example.com',
    },
    {
      id: '1a2b3c25',
      amount: 310,
      status: 'pending',
      username: 'Ella Scott',
      email: 'ella.scott@example.com',
    },
    {
      id: '1a2b3c26',
      amount: 275,
      status: 'processing',
      username: 'Matthew Green',
      email: 'matthew.green@example.com',
    },
    {
      id: '1a2b3c27',
      amount: 360,
      status: 'success',
      username: 'Scarlett Adams',
      email: 'scarlett.adams@example.com',
    },
    {
      id: '1a2b3c28',
      amount: 95,
      status: 'failed',
      username: 'Joseph Nelson',
      email: 'joseph.nelson@example.com',
    },
    {
      id: '1a2b3c29',
      amount: 420,
      status: 'pending',
      username: 'Grace Carter',
      email: 'grace.carter@example.com',
    },
    {
      id: '1a2b3c30',
      amount: 280,
      status: 'processing',
      username: 'William Mitchell',
      email: 'william.mitchell@example.com',
    },
  ]
}

export default async function PaymentsPage() {
  const data = await getData()

  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
