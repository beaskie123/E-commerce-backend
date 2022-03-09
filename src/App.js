import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to ="/">Amazona</Link>
        </header>
        <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
