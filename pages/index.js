// pages/index.js
import axios from 'axios';

export default function Home() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get('/api/menus/')
      .then(response => {
        setMenus(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Menus</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}