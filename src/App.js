import React from 'react';
import Navbar from './Navbar';
import './App.css';
import './Intropage'
import Intropage from './Intropage';
import Quality from './Quality';
import Consultation from './Consultation';
import Video from './Video'

function App() {
  return (
    <div>
      <div className="sticky top-0"><Navbar /></div>
      <div >
        <Intropage />
      </div>
      <div>
        <Quality/>
      </div>
      <div>
        <Consultation/>
      </div>
      <div>
        <Video/>
      </div>
    </div>

  );
}

export default App;
