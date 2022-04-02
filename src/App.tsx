
import { Provider } from 'react-redux';
import { store } from './state';
import './assets/scss/styles.scss'
import { Comic } from './components/Comic';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <Provider store={store}>
      <div className="main-container">
        <NavBar/>
        <Comic/>
      </div>
    </Provider>
  );
}

export default App;
