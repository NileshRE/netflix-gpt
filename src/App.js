import { Provider } from "react-redux";
import Body from "./Components/Body";
import Appstore from "./Utils/Appstore";


function App() {
  return (
    <Provider store = {Appstore}>
    <Body/>
    </Provider>
  );
}

export default App;
