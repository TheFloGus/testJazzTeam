import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";

function App() {
  return (
	<Provider store={store}>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
	</Provider>
  );
}

export default App;
