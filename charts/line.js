// pages/charts/line.js
import axios from 'axios';

export default function LineChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/line-chart-data/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Line Chart</h1>
      <p>Labels: {data.labels}</p>
      <p>Data: {data.data}</p>
    </div>
  );
}