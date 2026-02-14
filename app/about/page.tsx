import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Mission from "./components/Mission";
import OurValues from "./components/Values";
import WhyIsItGreat from "./components/WhyIsItGreat";
import RecognitionByGovernment from "./components/Clients";
import Footer from "./components/Footer";

const AboutUsPage = () => {
    return (
        <main>
            <Hero />
            <Story />
            <Mission />
            <OurValues />
            <WhyIsItGreat />
            <RecognitionByGovernment />
            <div
                className="pointer-events-none fixed bottom-0 left-0 z-50 h-32 w-full
  backdrop-blur-md
  [mask-image:linear-gradient(to_top,black,transparent)]"
            />


        </main>
    )
}

export default AboutUsPage