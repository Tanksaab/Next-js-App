import Head from 'next/head';
import Chart from 'chart.js';

function Dashboard() {
  const [candlestickData, setCandlestickData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    fetch('/api/candlestick-data/')
      .then(response => response.json())
      .then(data => setCandlestickData(data));

    fetch('/api/line-chart-data/')
      .then(response => response.json())
      .then(data => setLineChartData(data));

    fetch('/api/bar-chart-data/')
      .then(response => response.json())
      .then(data => setBarChartData(data));

    fetch('/api/pie-chart-data/')
      .then(response => response.json())
      .then(data => setPieChartData(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <div>
        <h2>Candlestick Chart</h2>
        <Chart type="candlestick" data={candlestickData} />
      </div>
      <div>
        <h2>Line Chart</h2>
        <Chart type="line" data={lineChartData} />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <Chart type="bar" data={barChartData} />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <Chart type="pie" data={pieChartData} />
      </div>
    </div>
  );
}

export default Dashboard;