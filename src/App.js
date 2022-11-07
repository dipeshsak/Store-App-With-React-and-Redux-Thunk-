import './App.css';
import { Grommet } from 'grommet';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './containers/Header/Header';
import ProductDetail from './containers/ProductDetail/ProductDetail';
import ProductListing from './containers/ProductListing/ProductListing';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
<Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" exact element={<ProductListing/>}/>
      <Route path="/product/:productId" exact element={<ProductDetail/>}/>
      <Route>404 Not Found!</Route>
      </Routes>
    </div>
    </Router>
    </Grommet>
  );
}

export default App;
