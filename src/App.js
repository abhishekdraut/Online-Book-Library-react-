
import BigCardContainer from "./components/bigCardContainer/bigCardContainer";
import CardPage from "./components/cardPage/cardPage";
import CounterContainer from "./components/counterContainer/counterContainer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import SecondPage from "./components/secondPage/secondPage";
import Sidebar from "./components/sidebar/sidebar";
import ThirdPage from "./components/thirdPage/thirdPage";



function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Hero/>
      <SecondPage/>
      <ThirdPage/>
      <CounterContainer/>
      <CardPage/>
      <BigCardContainer/>

      

    </div>
  );
}

export default App;
