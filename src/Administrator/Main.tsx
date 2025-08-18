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

export default function Main() {
  return (
    <div className="w-[1000px] p-[20px] flex flex-col bg-[#003A46] rounded-[6px]">
      <p className="text-[18px] font-semibold text-white">მთავარი პანელი</p>
      <div className="main-sections flex flex-row items-start justify-between mt-[38px]">
        <div className="left flex flex-col gap-[16px]">
          <div className="total-sales flex flex-col w-[318px] p-[10px] rounded-[6px] bg-[#001519]">
            <p className="text-[18px] font-normal text-white">
              საერთო გაყიდვები
            </p>
            <div className="divider w-[288px] mt-[3px] h-[1px] bg-[#04AED2]"></div>
            <p className="text-[16px] font-semibold text-white mt-[9px]">
              <span className="font-black">₾12,500 -</span> მიმდინარე თვე
            </p>
            <p className="text-[12px] font-normal text-white/70 mt-[3px]">
              *+8% წინა თვესთან შედარებით
            </p>
          </div>
          <div className="producted w-[246px] flex flex-col bg-[#001519] rounded-[6px] p-[10px]">
            <p className="text-[18px] font-normal text-white">წარმოებული</p>
            <div className="divider w-[230px] mt-[3px] h-[1px] bg-[#04AED2]"></div>
            <p className="text-[16px] font-black text-white">15 000 ნაყინი</p>
            <p className="text-white/70 text-[12px] font-normal">
              2% დაგვიანება
            </p>
          </div>
          <div className="delivered w-[259px] flex flex-col bg-[#001519] rounded-[6px] p-[10px]">
            <p className="text-[18px] font-normal text-white">
              მიწოდებული შეკვეთები{" "}
            </p>
            <div className="divider w-[230px] mt-[3px] h-[1px] bg-[#04AED2]"></div>
            <p className="text-[16px] font-semibold text-white mt-[9px]">
              <span className="font-black">132 -</span> მიმდინარე თვე
            </p>
            <p className="text-[16px] font-semibold text-white mt-[9px]">
              <span className="font-black">138 -</span> წინა თვე
            </p>
          </div>
        </div>
        <div className="right flex flex-col gap-[8px]">
          <div className="ingredients-chart flex flex-col w-[466px]">
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
            <p className="mt-[20px] text-white/80 text-[14px] font-normal">
              *კრიტიკული - შაქარი
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
