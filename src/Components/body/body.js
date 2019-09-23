import React, { useState } from "react";

import newIdeas from "../../assets/images/cards/undraw_new_ideas_jdea.png";
import people from "../../assets/images/cards/undraw_people_tax5.png";
import detailedAnalysis from "../../assets/images/cards/undraw_detailed_analysis_xn7y.png";

const Body = () => {
  return (
    <section id={"card-topics"}>
      <div className={"container one"}>
        <div className={"card"}>
          <div className={"context"}>
            <img src={newIdeas} alt="" />
            <h6>BASICS</h6>
            <p>
              hakjfkj hfajhk;afhj; aejehej fhjke ;jjadjkfsah jkhjadj hkdjhj
              hdahj kkhjdf
            </p>
          </div>
        </div>

        <div className={"card"}>
          <div className={"context"}>
            <img src={people} alt="" />
            <h6>Advanced : Code w/ Others</h6>
            <p>
              hakjfkj hfajhk;afhj; aejehej fhjke ;jjadjkfsah jkhjadj hkdjhj
              hdahj kkhjdf
            </p>
          </div>
        </div>

        <div className={"card"}>
          <div className={"context"}>
            <img src={detailedAnalysis} alt="" />
            <h6>On GitHub</h6>
            <p>
              hakjfkj hfajhk;afhj; aejehej fhjke ;jjadjkfsah jkhjadj hkdjhj
              hdahj kkhjdf
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
