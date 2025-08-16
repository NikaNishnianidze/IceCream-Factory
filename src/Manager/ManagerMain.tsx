import notificationIcon from "../../public/assets/notificationIcon.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "8 აპრილი", რძე: 120, მარწყვი: 90, შაქარი: 60 },
  { name: "8 აპრილი", რძე: 200, მარწყვი: 150, შაქარი: 100 },
  { name: "8 აპრილი", რძე: 250, მარწყვი: 180, შაქარი: 110 },
  { name: "8 აპრილი", რძე: 220, მარწყვი: 130, შაქარი: 70 },
];

export default function ManagerMain() {
  return (
    <div className="w-[807px] p-[20px] bg-[#003A46] rounded-[6px] flex flex-col gap-[25px]">
      <div className="main-div flex gap-[15px] items-start">
        <div className="ingredients-chart flex flex-col w-[466px]">
          <p className="text-white text-[18px] font-semibold mb-[26px]">
            ინგრენდიენტები ჩარტი
          </p>
          <div
            style={{
              width: "100%",
              height: 300,
              background: "#062b3a",
              padding: 20,
              borderRadius: "8px",
            }}
          >
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid stroke="#1e2d3a" strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  stroke="#ccc"
                  ticks={["8 აპრილი"]}
                  tick={{ fill: "#ccc" }}
                />
                <YAxis
                  stroke="#ccc"
                  ticks={[100, 200, 300]}
                  domain={[0, 300]}
                  tick={{ fill: "#ccc" }}
                />
                <Tooltip />
                <Legend wrapperStyle={{ color: "#ccc" }} />
                <Line
                  type="monotone"
                  dataKey="რძე"
                  stroke="#4e9fff"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="მარწყვი"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="შაქარი"
                  stroke="#ffc658"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-[20px] text-white/80 text-[14px] font-normal">
            *კრიტიკული - შაქარი
          </p>
        </div>
        <div className="data w-[246px] flex flex-col gap-[14px]">
          <p className="text-white text-[18px] font-semibold mb-[12px]">
            მონაცემები
          </p>
          <div className="total-sales w-[246px] bg-[#001519] rounded-[6px] py-[5.5px] px-[7.74px]">
            <p className="text-[18px] text-white font-normal">
              საერთო გაყიდვები
            </p>
            <div className="divider w-[223px] h-[1px] bg-[#04AED2] mt-[3.15px]"></div>
            <h2 className="text-[16px] font-black text-white mt-[3.45px]">
              ₾12,500 -<span className="font-normal"> მიმდინარე თვე</span>
            </h2>
            <p className="text-[12px] text-normal text-white/70 mt-[3.15px]">
              *+8% წინა თვესთან შედარებით
            </p>
          </div>
          <div className="producted w-[246px] bg-[#001519] rounded-[6px] py-[5.5px] px-[7.74px]">
            <p className="text-[18px] text-white font-normal">წარმოებული</p>
            <div className="divider w-[223px] h-[1px] bg-[#04AED2] mt-[3.15px]"></div>
            <h2 className="text-[16px] font-black text-white mt-[3.45px]">
              15 000 ნაყინი
            </h2>
            <p className="text-[12px] text-normal text-white/70 mt-[3.15px]">
              2% დაგვიანება
            </p>
          </div>
          <div className="inventar w-[246px] bg-[#001519] rounded-[6px] py-[5.5px] px-[7.74px]">
            <p className="text-[18px] text-white font-normal">ინვენტარი</p>
            <div className="divider w-[223px] h-[1px] bg-[#04AED2] mt-[3.15px]"></div>
            <h2 className="text-[16px] font-black text-white mt-[3.45px]">
              1 კრიტიკული დონე
            </h2>
            <p className="text-[12px] text-normal text-white/70 mt-[3.15px]">
              სულ ინვენტარში: 523 ერთეული
            </p>
          </div>
        </div>
        <div className="notification">
          <img src={notificationIcon} alt="notification icon" />
        </div>
      </div>
    </div>
  );
}
