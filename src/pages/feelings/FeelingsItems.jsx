import { Link } from "react-router-dom";
import FeelingsData from "../../datas/feelingsItems.json";
import Icon from "../../components/Icon";

export default function FeelingsItems() {
  return (
    <>
      {/* <div className="trapezoid my-12 p-12">
        <ul className="flex relative bg-primary list-none z-10">
          <li>sdfsd</li>
          <li>sdfsd</li>
          <li>sdfsd</li>
        </ul>
      </div> */}

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-24 md:mt-16 pb-24">
        {FeelingsData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row transition duration-500 ease-in-out hover:z-50 hover:-translate-y-6`}
          >
            <img
              className="w-24 md:w-40 drop-shadow-icon -mr-12 md:-mr-20"
              src={`./${item.image}`}
              alt={item.image}
            />
            <div
              style={{ backgroundColor: item.color }}
              className="flex flex-col gap-2 w-80 md:w-96 pl-16 md:pl-24 pr-4 py-6 text-white rounded-3xl shadow-health_card"
            >
              <h2 className="text-lg md:text-3xl font-bold">{item.title}</h2>
              <p className="text-sm md:text-lg font-semibold my-auto">
                {item.caption}
              </p>
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
