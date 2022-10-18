import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const [entries, setEntries] = useState([{ weight: 175, date: '11-23-2021' }, { weight: 177, date: '11-24-2021' }, { weight: 172, date: '11-25-2021' }])//setting the default value; future projects, will leave string empty for interactions with DB

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry]; //adds each new entry to the end of the array
    setEntries(tempEntries);
}

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry} />
      <EntriesChartTracker parentEntries={entries} />
    </div>
  );
}

export default App;
