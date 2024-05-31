import { Link } from "react-router-dom";
import FeelingsData from "../../datas/feelingsItems.json";
import Icon from "../../components/Icon";

export default function FeelingsItems() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:gap-12 mt-36 md:mt-16 pb-24">
        {FeelingsData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.color }}
            className={`flex flex-col md:flex-row gap-4 -mt-16 md:mt-auto w-[27rem] h-content p-6 rounded-3xl shadow-health_card transition duration-500 ease-in-out hover:z-50 hover:-translate-y-6`}
          >
            <img
              className="w-32 md:w-40 md:h-52 m-auto drop-shadow-icon"
              src={`./${item.image}`}
              alt={item.image}
            />
            <div className="flex flex-col items-center h-full text-white text-center">
              <h2 className="text-lg md:text-3xl font-bold">{item.title}</h2>
              <p className="md:text-lg font-semibold my-auto">{item.caption}</p>
              <div className="flex mt-5 items-center justify-between w-full rounded-full">
                <Icon className="text-3xl font-black">more_horiz</Icon>
                <Link
                  to={`${item.slug}`}
                  className="rounded-full bg-white shadow-health_icon"
                >
                  <Icon
                    style={{
                      color: item.color,
                      fontSize: "1.5rem",
                      fontWeight: "black",
                      margin: "8px",
                    }}
                  >
                    arrow_forward
                  </Icon>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
