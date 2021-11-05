
import BigCardContainer from "./components/bigCardContainer/bigCardContainer";
import CardPage from "./components/cardPage/cardPage";
import CounterContainer from "./components/counterContainer/counterContainer";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import SecondPage from "./components/secondPage/secondPage";
import Sidebar from "./components/sidebar/sidebar";
import ThirdPage from "./components/thirdPage/thirdPage";
import {SidebarVisibilityContextProvider} from "./store/sidebarVisibilityContext";



function App() {
  const cardData = [
    {
      id: 1,
      title: 'The Chronicles of Narnia',
      image: 'https://source.unsplash.com/xG5VJW-7Bio/108x108',
      description:
        'Journeys to the end of the world, fantastic creatures, and epic battles between good and evil—what more could any reader ask for in one book.',
      authorName: 'C.S. Lewis',
      authorURL: '#',
    },
    {
      id: 2,
      title: 'The Two Towers',
      image: 'https://source.unsplash.com/O7ygzpAL4Mc/108x108',
      description:
        'Epic fantasy adventure film directed by Peter Jackson, based on the second volume of J. R. R. Tolkiens The Lord of the Rings.',
      authorName: 'J.J.R. TOLKIEN',
      authorURL: '#',
    },
    {
      id: 3,
      title: 'Change the way you Think',
      image: 'https://source.unsplash.com/V5BGaJ0VaLU/108x108',
      description:
        'Seeing the wisdom in daily routine, and becoming aware of the cognitive biases that are creating the way you see your life.',
      authorName: 'BRIANNA WIEST',
      authorURL: '#',
    },
  ];
  
  const heroData = {
    title: "Endless entertainment and knowledge",
    subtitle: "Read or listen anytime, anywhere.",
    ctaText: "Read free for 90 days",
    ctaSubText: "Only ₹299/month after. Cancel anytime."
  }
  
  

  return (
    <div className="App">
      <SidebarVisibilityContextProvider>
      <Header/>
      <Sidebar/>
      </SidebarVisibilityContextProvider>
      <Hero {...heroData} />
      <SecondPage/>
      <ThirdPage/>
      <CounterContainer/>
      <CardPage/>
      <BigCardContainer/>
      <Footer/>

      

    </div>
  );
}

export default App;
