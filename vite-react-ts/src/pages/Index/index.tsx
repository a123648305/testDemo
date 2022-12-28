import React, { useMemo, useRef } from "react";
import "./index.less";
import { useFullscreen } from "ahooks";

const getAspectName = (index: number) => {
  switch (index) {
    case 1:
    case "1":
      return "一级指标";
    case 2:
    case "2":
      return "二级指标";
    case 3:
    case "3":
      return "三级指标";
    case 4:
    case "4":
      return "四级指标";
    case 5:
    case "5":
      return "五级指标";
    case 6:
    case "6":
      return "六级指标";
    case 7:
    case "7":
      return "七级指标";
    case -1:
    case "-1":
    default:
      return "全局指标";
  }
};
const ellipsisWord = (text: string, len = 6, symbol = "...") => {
  if (!text) {
    return text;
  }
  return text.length > len
    ? `${String(text).substring(0, len)}${symbol}`
    : text;
};

const AspectBreadCrumbs: React.FC<Props> = (props) => {
  const aspectList = [
    {
      id: 6330,
      name: "2级指标2",
      pid: 6344,
      level: 2,
      label: "2级指标2",
    },
    {
      id: 6329,
      name: "3级指标2",
      pid: 6330,
      level: 3,
      label: "3级指标2",
    },
    {
      id: 6322,
      name: "4级指标2",
      pid: 6329,
      level: 4,
      label: "4级指标2",
    },
    {
      id: 6328,
      name: "4级指标3",
      pid: 6329,
      level: 4,
      label: "4级指标3",
    },
  ];

  const handleAspectChange = (
    k: { id: number; name: string; level: number; pid: number },
    index: number
  ) => {
    console.log(k, index, "click");
  };
  const containerRef = useRef();
  const aspectListLen = aspectList.length;
  const activeKey = 2;
  const isLongAspect = aspectList.find((k) => k.level > 2); // 超过3级 隐藏中间的...

  // console.log(aspectList, "aspectList");

  const [isFullscreen, { toggleFullscreen }] = useFullscreen(containerRef, {});

  return (
    <div className="aspect_list_tip" ref={containerRef}>
      <button onClick={toggleFullscreen}>click</button>
      {aspectList.map((k, idx) => {
        if (isLongAspect && idx > 0 && idx < aspectListLen - 1) {
          return idx === aspectListLen - 2 ? ".../" : null;
        }
        return (
          <>
            <span
              className={`aspect_name ${
                activeKey - 1 === k.level ? "active" : ""
              }`}
              onClick={() => handleAspectChange(k, idx)}
              key={k.name}
              title={k.name}
            >
              {ellipsisWord(k.name, 5)}
            </span>
            <span>
              {idx < aspectListLen - 1 ? "/" : `>${getAspectName(activeKey)}`}
            </span>
          </>
        );
      })}
    </div>
  );
};

export default React.memo(AspectBreadCrumbs);
