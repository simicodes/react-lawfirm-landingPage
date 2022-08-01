import React from "react";

// import components
import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div>
      <Header />
      <div className="h-[2000px]">
        <Banner />
      </div>
    </div>
  );
};

export default App;
