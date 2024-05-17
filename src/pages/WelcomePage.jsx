import PrimaryButton from "../components/PrimaryButton";
import HeroImage from "../assets/images/hero-image.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HealthData from "./../datas/healthItems.json";
import { Link } from "react-router-dom";
import WavesDivider from "../components/WavesDivider";
import CurveDivider from "../components/CurveDivider";
import LittleGirl from "../assets/images/little-girl.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function WelcomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="flex flex-col gap-6 mt-28 md:mt-36 mx-10 max-w-lg">
            <h1 className="text-3xl md:text-5xl font-boogaloo text-[#ffc858]">
              HEY! GROWN UPS!
            </h1>
            <h2 className="text-white text-xl md:text-2xl">
              Find top tips and advice on all aspects of children’s emotional
              and physical health, from keeping kids active and eating well, to
              building their confidence and equipping them to cope with specific
              health issues.
            </h2>
            <PrimaryButton className="text-primary w-max">
              Let’s Go!
            </PrimaryButton>
          </div>
          <img
            className="place-self-end mt-8 lg:mt-16 md:w-3/4 lg:w-max"
            src={HeroImage}
            alt="hero-image"
          />
        </div>
        <CurveDivider />
      </div>

      <div className="relative bg-secondary h-content px-12 py-24 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10">
          <img src={LittleGirl} alt="little-girl" width={600} height="auto" />
          <q className="m-auto md:text-3xl font-semibold text-white md:leading-10">
            Hello, parents and caregivers! Find expert tips on nurturing your
            children’s health, understanding their emotions, and managing
            illness. Let’s support their well-being and growth together!
          </q>
        </div>

        <WavesDivider />
      </div>

      <div className="relative bg-tertiary py-24 text-center">
        <h2 className="mx-6 mb-12 text-white text-2xl md:text-3xl font-bold">
          Explore Your Favorite Adventure Zones
        </h2>
        <Carousel
          className="flex md:mx-16 lg:mx-24 py-8 cursor-pointer"
          responsive={responsive}
        >
          {HealthData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.color }}
              className={`group flex flex-col items-center w-60 mx-auto shadow-health_card ring-[6px] ring-white ring-inset rounded-[35px] transition-500`}
            >
              <img
                className="mt-4 rounded-[25px] group-hover:shadow-health_icon border-8 transition-500"
                src={`./${item.image}`}
                alt={item.image}
                width={230}
                height={230}
              />
              <div
                className="flex flex-col gap-2 grow items-center text-center mb-4 p-5"
                style={{ color: "white" }}
              >
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="mb-2 font-medium text-base">{item.caption}</p>
                <Link to={`${item.slug}`}>
                  <button className="px-5 py-1 font-semibold border-[3px] border-white rounded-full hover:shadow-card">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
