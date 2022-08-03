import data from './MOCK_DATA.json';
import PaginatedTable from './PaginatedTable';
import './App.css';

function App() {


  const tbody = data.map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.email}</td>
    </tr>
    ));
  const thead = (
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>IP</th>
    </tr>
  )

  return <PaginatedTable className="taaabbbable" thead={thead} tbody={tbody} />
}

export default App;
