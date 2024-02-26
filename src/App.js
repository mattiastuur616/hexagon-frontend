import './App.css';
import { Footer, Library, WhatHex, Header } from './containers'
import { Brand, Navbar } from './components'
import background from './assets/HexRings.png'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div style={{backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 1520
        }}>
        <WhatHex />
      </div>
      <div className='gradient__books'>
        <Library />
      </div>
      <Footer />
      <Brand />
    </div>
  );
}

export default App;
