// pages/charts/pie.js
import axios from 'axios';

export default function PieChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/pie-chart-data/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Pie Chart</h1>
      <p>Labels: {data.labels}</p>
      <p>Data: {data.data}</p>
    </div>
  );
}