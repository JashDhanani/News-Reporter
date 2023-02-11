import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Settings from './components/Settings';

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <div className="sideCon">
          <Sidebar />
          <Routes>
            <Route path='/home' element={<Home setProgress={setProgress}/>}/>
            <Route path='/about' element={<About setProgress={setProgress}/>}/>
            <Route path='/settings' element={<Settings setProgress={setProgress}/>}/>
            <Route path='/' element={<News setProgress={setProgress} key={"in"} name={"General"} pageSize={6} catagory={"in"}/>}/>
            <Route path='/india' element={<News setProgress={setProgress} key={"India"} name={"India"} pageSize={6} catagory={"in"}/>}/>
            <Route path='/us' element={<News setProgress={setProgress} key={"USA"} name={"USA"} pageSize={6} catagory={"us"}/>}/>
            <Route path='/rusia' element={<News setProgress={setProgress} key={"Rusia"} name={"Rusia"} pageSize={6} catagory={"ru"}/>}/>
            <Route path='/france' element={<News setProgress={setProgress} key={"France"} name={"France"} pageSize={6} catagory={"fr"}/>}/>
            <Route path='/germany' element={<News setProgress={setProgress} key={"Germany"} name={"Germany"} pageSize={6} catagory={"de"}/>}/>
            <Route path='/searchresult' element={<News setProgress={setProgress} key={"SearchResult"} name={"Search-Result"} pageSize={6} catagory={"de"}/>}/>
            {/* <News pageSize={6} catagory={"in"} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
