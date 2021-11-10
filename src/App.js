import BigCardContainer from "./components/bigCardContainer/bigCardContainer";
import CardPage from "./components/cardPage/cardPage";
import CounterContainer from "./components/counterContainer/counterContainer";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import SecondPage from "./components/secondPage/secondPage";
import Sidebar from "./components/sidebar/sidebar";
import ThirdPage from "./components/thirdPage/thirdPage";
import { SidebarVisibilityContextProvider } from "./store/sidebarVisibilityContext";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Book from "./pages/books";
import BookDemo from "./pages/bookDemo";

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarVisibilityContextProvider>
          <Header />
          <Sidebar />
        </SidebarVisibilityContextProvider>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Book />} />
          <Route path="/bookdemo" element={<BookDemo />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
