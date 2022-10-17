import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{ weight: 175, date: '11-23-2021' }, { weight: 177, date: '11-24-2021' }, { weight: 172, date: '11-25-2021' }])//setting the default value; future projects, will leave string empty for interactions with DB

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
