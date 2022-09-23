import { useState } from "react";
import { seat } from "./seat";

function App() {
  const [name, setName] = useState("");

  return (
    <div
      className="h-screen flex flex-col justify-center items-center p-2
      touch-none"
      style={{ backgroundColor: "#faf0e6" }}
    >
      <div className="mb-8">
        <span className="text-2xl mr-2" style={{ color: "#A57A5A" }}>
          the One
        </span>
        <span className="text-lg" style={{ color: "#C8AE7E" }}>
          - Save The Day -
        </span>
      </div>
      <span className="text-[34px] text-gray-600 mb-8">承恩家妤婚禮</span>
      <span className="text-3xl text-gray-600 mb-12">座位查詢系統</span>
      <input
        className="shadow border rounded-xl min-w-[300px] w-1/3 py-3 px-3
        text-2xl text-gray-700 text-center"
        type="text"
        placeholder="請輸入您的全名"
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
          ? name in seat
            ? seat[name as keyof typeof seat]
            : (
              <span className="text-2xl">
                {"\n"}找不到您的名字{String.fromCodePoint(parseInt("1F616", 16))}
              </span>
            )
          : "..."}
      </span>
      <a
        className="fixed text-sm text-gray-300 bottom-1 right-2"
        style={{
          color: "#D2BD96"
        }}
        href="https://github.com/WesleyCh3n"
        target="_blank"
      >
        @WesleyCh3n
      </a>
    </div>
  );
}

export default App;
