// pages/charts/bar.js
import axios from 'axios';

export default function BarChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/bar-chart-data/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Bar Chart</h1>
      <p>Labels: {data.labels}</p>
      <p>Data: {data.data}</p>
    </div>
  );
}