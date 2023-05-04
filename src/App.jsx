import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
