import { Link } from "react-router-dom";
import HealthData from "../../datas/healthItems.json";
import Icon from "../../components/Icon";

export default function HealthItems() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-12 mt-16 pb-24">
        {HealthData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.color }}
            className="group flex flex-col items-center w-60 mt-32 hover:scale-105 hover:bg-black/10 shadow-health_card rounded-[80px] transition-500 cursor-pointer"
          >
            <img
              className="-mt-24 rounded-[95px] shadow-health_icon border-8 transition-500"
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
              <p className="font-medium text-base">{item.caption}</p>
              <Link
                to={`${item.slug}`}
                style={{ borderColor: item.color }}
                className="text-center border-[12px] rounded-full -mb-16 bg-white shadow-health_icon"
              >
                <Icon
                  style={{
                    color: item.color,
                    fontSize: "2rem",
                    fontWeight: "black",
                    margin: "8px",
                  }}
                >
                  arrow_forward
                </Icon>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
