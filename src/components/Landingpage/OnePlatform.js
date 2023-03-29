import React from "react";
import Cards from "../common/Cards";
import micon from "../../assects/micon.png";
import hrVec from "../../assects/hrVec.png";
import financeVec from "../../assects/financeVec.png";
import pmVec from "../../assects/pmVec.png";
import customerSuppVec from "../../assects/customerSuppVec.png";
import consultingVec from "../../assects/consultingVec.png";
import designVec from "../../assects/designVec.png";
import govJob from "../../assects/govJob.png";

const data = [
  {
    title: "Marketing & Communication",
    subtitle: "237 Jobs Available",
    icon: micon,
  },
  {
    title: "Design & Development",
    subtitle: "237 Jobs Available",
    icon: designVec,
  },
  {
    title: "HR & Development",
    subtitle: "237 Jobs Available",
    icon: hrVec,
  },
  {
    title: "Finance Management",
    subtitle: "237 Jobs Available",
    icon: financeVec,
  },
  {
    title: "Project Management",
    subtitle: "237 Jobs Available",
    icon: pmVec,
  },
  {
    title: "Customer Support",
    subtitle: "237 Jobs Available",
    icon: customerSuppVec,
  },
  {
    title: "Business & Consulting",
    subtitle: "237 Jobs Available",
    icon: consultingVec,
  },
  {
    title: "Government Job",
    subtitle: "237 Jobs Available",
    icon: govJob,
  },
];
function OnePlatform() {
  return (
    <div className="one-platform-container">
      <h1>
        One Platform Many <span>Solutions</span>
      </h1>
      <div>
        {data.map((item, index) => {
          return (
            <Cards
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OnePlatform;
