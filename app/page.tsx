import Cta from "./components/Cta";
import Testimonials from "./components/Testimonials";
import AboutSec from "./Home-sections/AboutSec";
import Hero from "./Home-sections/Hero";
import OurBlog from "./Home-sections/OurBlog";
import OurExperience from "./Home-sections/OurExperience";
import ServicesSec from "./Home-sections/ServicesSec";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutSec />
    <ServicesSec />
    <OurExperience />
    <OurBlog />
    <Testimonials />
    <Cta />
    </>
  );
}
