import Header from "../components/Header";
import Banner from "../components/Banner";
import HousingSection from "../components/HousingSection";
import HouseListing from "../components/HouseListing";
import RealEstateFeature from "../components/RealEstateFeature";
import FooterSections from "../components/FooterSections";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <HousingSection />
      <HouseListing />
      <RealEstateFeature />
      <FooterSections />
    </>
  );
}

export default HomePage;
