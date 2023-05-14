import React, { useState } from 'react'
import Data from './Data'
import List from './List'
function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main>
      <section className='container' style={{marginTop:"6%"}}>
       <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 d'>
          <h3><b>{people.length} Birthdays today </b></h3>
          <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
          </div>
        </div>
       </div>
      </section>
    </main>
  )
}
export default App;
