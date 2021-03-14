import React, { useState } from 'react';
import data from './data'; /*import our static data*/
import List from './List'; /*imports the list component*/
function App() {
  const [people, setPeople] = useState(data);
  return (
  <main>
    <section className="container">
      <h3>{people.length} birthday's today 🎂</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>
        clear all
      </button>
    </section>
  </main>
  );
}

export default App;
/*exporting the default app, this is our main func that displays components, imports data, and passes state around. We have HTML structure and our main*/