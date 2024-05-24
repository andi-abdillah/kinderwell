import { Link } from "react-router-dom";
import FeelingsData from "../../datas/feelingsItems.json";
import Icon from "../../components/Icon";

export default function FeelingsItems() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-12 mt-16 pb-24">
        {FeelingsData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.color }}
            className="flex gap-4 w-[27rem] h-64 p-6 rounded-3xl shadow-health_card"
          >
            <img
              className="h-52 w-40 drop-shadow-icon"
              src={`./${item.image}`}
              alt={item.image}
            />
            <div className="flex flex-col items-center h-full text-white text-center">
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="text-lg font-semibold my-auto">{item.caption}</p>
              <div className="flex items-center justify-between w-full rounded-full">
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
