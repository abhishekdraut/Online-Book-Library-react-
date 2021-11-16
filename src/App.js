import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
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
import CaretePage from "./pages/create";

function App() {
  return (
    <div className="App">
      <Router>
        <SidebarVisibilityContextProvider>
          <Header />
          <Sidebar />
        </SidebarVisibilityContextProvider>
        
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/books"  element={<Book />} />
          <Route path="/bookdemo" element={<BookDemo />} />
          <Route path="/createpage" element={<CaretePage></CaretePage>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
