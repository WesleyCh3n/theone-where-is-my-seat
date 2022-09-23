import { useState } from "react";
import { seat } from "./seat";

function App() {
  const [name, setName] = useState("");

  return (
    <div
      className="h-screen flex flex-col justify-center items-center p-2"
      style={{ backgroundColor: "#faf0e6" }}
    >
      <div className="mb-4">
        <span className="text-2xl mr-2" style={{ color: "#A57A5A" }}>then One</span>
        <span className="text-lg" style={{ color: "#C8AE7E" }}>- Save The Day -</span>
      </div>
      <span className="text-5xl text-gray-600 mb-4">承恩家妤婚禮</span>
      <span className="text-3xl text-gray-600 mb-12">座位查詢系統</span>
      <input
        className="shadow border rounded-xl min-w-[300px] w-1/3 py-3 px-3
        text-2xl text-gray-700 text-center"
        type="text"
        placeholder="請輸入您的名字"
        onChange={(e) => {
          setName(e.target.value);
          console.log(
            e.target.value in seat
              ? seat[e.target.value as keyof typeof seat]
              : "no",
          );
        }}
      />
      <span className="text-3xl text-gray-600 m-12">
        您的位子 : {name !== ""
          ? name in seat ? seat[name as keyof typeof seat] : "找不到你的名字QQ"
          : "..."}
      </span>
    </div>
  );
}

export default App;
