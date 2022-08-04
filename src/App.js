import data_one from './MOCK_DATA_1.json';
import data_two from './MOCK_DATA_2.json';
import PaginatedTable from './PaginatedTable';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentData, setCurrentData] = useState([]);
  
  


  const tbody = currentData.map((item, index) => (
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

  return (
    <>
    <button onClick={() => setCurrentData(data_one)}>Data Set One</button>
    <button onClick={() => setCurrentData(data_two)}>Data Set Two</button>
    <hr />
    <PaginatedTable className="taaabbbable" thead={thead} tbody={tbody} />
    </>
  )
}

export default App;
