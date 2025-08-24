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

export default function Statistics() {
  return (
    <div className="w-[807px] bg-[#003A46] rounded-[6px] p-[20px] flex flex-col">
      <h2 className="text-white text-[18px] font-semibold">
        ანგარიშება/სტატისტიკა
      </h2>
      <div className="main mt-[38px] flex flex-row items-start justify-between">
        <div className="left flex flex-col gap-[19px]">
          <div className="total-sales w-[318px] rounded-[6px] bg-[#001519] p-[10px]">
            <h3 className="text-[18px] font-normal text-white">
              საერთო გაყიდვები
            </h3>
            <div className="divider w-[288.2px] h-[1px] bg-[#04AED2]"></div>
            <p className="mt-[9px] text-[16px] text-white font-black">
              ₾12,500 -<span className="font-normal"> მიმდინარე თვე</span>
            </p>
            <p className="text-white text-[12px] font-normal">
              *+8% წინა თვესთან შედარებით
            </p>
          </div>
          <div className="total-deliver w-[318px] rounded-[6px] bg-[#001519] p-[10px]">
            <h3 className="text-[18px] font-normal text-white">
              საერთო მიწოდებები (თვიური)
            </h3>
            <div className="divider w-[288.2px] h-[1px] bg-[#04AED2]"></div>
            <p className="mt-[9px] text-[16px] text-white font-black">
              320 მიწოდება
            </p>
            <p className="text-white text-[12px] font-normal">
              96% დროულად შესრულებული"
            </p>
          </div>
          <div className="inventar w-[318px] rounded-[6px] bg-[#001519] p-[10px]">
            <h3 className="text-[18px] font-normal text-white">ინვენტარი</h3>
            <div className="divider w-[288.2px] h-[1px] bg-[#04AED2]"></div>
            <p className="mt-[9px] text-[16px] text-white font-black">
              5 პროდუქტი კრიტიკულ დონეზე
            </p>
            <p className="text-white text-[12px] font-normal">
              სულ ინვენტარში: 250 ერთეული
            </p>
          </div>
        </div>
        <div className="right">
          <div className="ingredients-chart flex flex-col w-[438px] items-center">
            <p className="text-white text-[18px] font-semibold mb-[8px]">
              ინგრენდიენტების ჩარტი
            </p>
            <div
              style={{
                width: "100%",
                height: 300,
                background: "#001519",
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
          </div>
        </div>
      </div>
      <div className="popular-products mt-[15px] w-[767px] flex flex-col rounded-[6px] bg-[#001519] p-[10px]">
        <h3 className="text-[18px] text-white font-normal">
          პოპულარული პროდუქტები
        </h3>
        <div className="divider w-[288px] h-[1px] bg-[#04AED2]"></div>
        <div className="products flex flex-row items-center justify-between mt-[17px]">
          <p className="text-white text-[17.491px] font-black">
            1. Mango Tango
          </p>
          <p className="text-white text-[17.491px] font-black">
            2. Cookies & Cream
          </p>
          <p className="text-white text-[17.491px] font-black">3. Berry Mix</p>
          <p className="text-white text-[17.491px] font-black">
            4. Strawberry Sorbet
          </p>
        </div>
      </div>
    </div>
  );
}
