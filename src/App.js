import { GlobalStyle } from "./styles/global";
import { Products } from './components/Products';
import { Dashboard } from './pages/Dashboard';
import { Header } from "./components/Header";

function App() {

  return (
    <>
        <Header />
        {/* <Products /> */}
        <Dashboard />
      
      <GlobalStyle />
    </>
  );
}

export default App;
