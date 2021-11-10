import CounterContainer from "../components/counterContainer/counterContainer";
import Hero from "../components/hero/hero";
import SecondPage from "../components/secondPage/secondPage";
import ThirdPage from "../components/thirdPage/thirdPage";

function Home() {

    const heroData = {
        title: "Endless entertainment and knowledge",
        subtitle: "Read or listen anytime, anywhere.",
        ctaText: "Read free for 90 days ",
        ctaSubText: "Only ₹299/month after. Cancel anytime."
      }
    return(
        <>
        <Hero {...heroData}/>
        <SecondPage/>
        <ThirdPage/>
        <CounterContainer/>
        </>
    )


    
}
export default Home;