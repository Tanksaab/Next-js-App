// pages/charts/candlestick.js
import axios from 'axios';

export default function CandlestickChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/candlestick-data/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Candlestick Chart</h1>
      <ul>
        {data.map(item => (
          <li key={item.x}>
            {item.x}: {item.open}, {item.high}, {item.low}, {item.close}
          </li>
        ))}
      </ul>
    </div>
  );
}