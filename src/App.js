import { Provider } from 'react-redux'
import './App.css';
import { store } from './Redux';
import TacheList from "./tacheList"
import TacheForm from "./tacheForm";
import Tache from "./tache";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Tache/>
     <TacheList/>
     <TacheForm/>
    </div>
    </Provider>
  );
}

export default App;
