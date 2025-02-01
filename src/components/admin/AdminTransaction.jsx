import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const TransactionChart = () => {
    const data = [
      { name: 'Last Month', value1: 180, value2: 120 },
      { name: '3M', value1: 140, value2: 160 },
      { name: '6M', value1: 160, value2: 140 },
      { name: 'Year', value1: 200, value2: 100 },
      { name: 'All', value1: 220, value2: 80 },
    ];
  
    return (
      <div className='w-[340px] aspect-[1.25/1] flex flex-col items-center'>
        <h2 className=' text-start w-full font-bold mb-2 text-[20px] '>Transaction</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
            style={{ backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '10px' }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              tick={{ fill: '#000', fontSize: 12, fontWeight: 'bold' }}
              axisLine={false}
            />
            <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '12px',
            }}
            labelStyle={{
              color: '#323434',
              fontWeight: 'bold',
              fontSize: '12px',
            }}
            itemStyle={{
              color: '#5BDA8C',
              fontSize: '12px',
            }}
          />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#5BDA8C"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#FF6680"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  export default TransactionChart;