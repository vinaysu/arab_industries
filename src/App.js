import styles from './App.module.css';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import Sidebar from './Components/sidebar/Sidebar';

import Perks from './Perks';

import BasicSlider from './Components/basicSlider/BasicSlider'



function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <div className={styles.home} >
        {/* <Sidebar></Sidebar> */}


        {/* <Home /> */}



      </div>

      <BasicSlider />


    </div>
  );
}

export default App;
