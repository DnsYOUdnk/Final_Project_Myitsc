import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { dataContext } from "./dataContext/dataContext";
import { useState } from "react";
import { getLikedData, changeLikedData } from "./utils/changeMarkedLike";
import { getReceivedMediaData } from './utils/changePaginationMediaPage'
import './styles/style.css';
import './styles/media.css';

function App() {
  const likedData = getLikedData();
  const [markedElements, setMarkedElements] = useState(likedData);

  return (
      <dataContext.Provider value = {{ 
        markedElements, 
        setMarkedElements, 
        changeLikedData, 
        getReceivedMediaData
         }}>
        <div className="App">
          < Header /> 
          < Main />
          < Footer />
        </div>
      </dataContext.Provider>
  );
}

export default App;