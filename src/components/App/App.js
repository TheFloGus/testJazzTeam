import "./App.css";
import Navigation from "../PageContainer/Navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "../../store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { SpinnerRoundFilled } from "spinners-react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <SpinnerRoundFilled
            size={50}
            thickness={100}
            speed={100}
            color="#bf85fe"
          />
        }
		persistor={persistor}
      >
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
