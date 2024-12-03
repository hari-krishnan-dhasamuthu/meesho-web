import React from 'react';
import './App.css';
import Header from './header';
import Headnext from './Headnext';
import Body from './Body';
import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';
import Body4 from './Body4';
import Body5 from './Body5';
import Body6 from './Body6';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './New';
import New2 from './new2';
import New3 from './New3';
import EnterPhone from './EnterPhone';
import Noth from './Noth';
import DisplayClothes from './DisplayClothes';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>


        <Routes>
          <Route path="/" element={
            <>
              <div className='fic'>
                <Header />
                <hr />
                <Headnext />

                <hr />
              </div>
              <br />
              <br />
              <br /><br />
              <br />
              <br />
              <br />
              <br />

              <Body />
              <br />
              <br />
              <br />
              <div style={{ display: "flex" }}>
                <div className='len' ></div>
                <h1>Top Categories to choose from</h1>
                <div className='len1' ></div>
              </div>
              <br />
              <br />
              <Body1 />
              <br />
              <Body2 />

              <br />
              <Body3 />
              <br />
              <br />
              <br />
              <br /><br /><br /><br /><br /><br /><br />
              <Body4 />
              <br />

              <Body5 />
              <br />
              <Body6 />
            </>
          } />
          <Route path="/p" element={<New2 />} />
          <Route path="/about" replace-={true} element={<New2 />} />
          <Route path='/about1' element={<New3 />} />
          <Route path="/enter-phone" element={<EnterPhone />} />
          <Route path="/ani" element={<Noth />} />
          <Route path="/lokl" element={<DisplayClothes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
