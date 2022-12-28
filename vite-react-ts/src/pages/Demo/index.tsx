import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import EchartDemo from "../../components/EchartDemo";
import DashBoardFilter from "../../components/DashbordFilter";
import MultiSelect from "../../components/MultiSelect";
import {
  ItemCallback,
  Layout,
  Responsive,
  WidthProvider,
} from "react-grid-layout";
import "./index.less";
import { Button, Select } from "antd";
import { asyncPool } from "./dd";
import axios from "axios";
// import { asyncPool, fetchQueT } from "./dd";
import { debounce } from "loadsh";
import { resolve } from "path";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

type PropsType = {
  data: Array<any> | undefined;
  layout: Layout;
  vertical: boolean;
  onDragStart?: ItemCallback;
  onDragEnd?: ItemCallback;
  onLayoutChange: (layout: Layout) => void;
};

const GridWrap: React.FC<any> = (props) => {
  const { layout, data, onLayoutChange, list } = props;
  const gridRef = useRef<HTMLDivElement>(null);
  const reqList = useRef(new Map());
  const isFetching = useRef(false);
  const count = useRef(0);
  useLayoutEffect(() => {
    console.log(gridRef, "cc");
    // reqList.current = new fetchQueT();
  }, []);

  const fetchTest = async (arr, id: string, callback) => {
    console.log("test");
    try {
      // console.time("100-elements");
      const timeout = (id) => axios.get("/api/tql", { params: { id } });
      for await (const res of asyncPool(1, [...arr.keys()], timeout)) {
        console.log(res, "res");
        arr.get(res.data.id)(res);
      }
      // console.timeEnd("100-elements");
    } catch (error) {
      console.log(error, "eeeeee");
    }
  };
  const queue = [];

  const promiseQueue = (list) => {
    let seq = Promise.resolve();
    console.log(list, "llls");
    queue.forEach((item) => {
      seq = seq.then(item);
    });
    return seq;
  };

  const delay = (() => {
    let timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(() => callback, ms);
    };
  })();

  const fetchData = async (id: any) => {
    // return new Promise(async (resolve, reject) => {
    //   console.log("5");
    const arr = reqList.current;

    //   // return debounce(fetchTest(id), 4000);
    //   count.current += 1;
    //   isFetching.current = true;
    //   console.log(count.current, 9999);
    //   const res = await fetchTest(id);
    //   resolve(res);
    // });
    const fn = () => axios.get("/api/tql", { params: { id } });

    // *function fx(){
    //   debounce(() => {
    //     queue.push(fn);
    //     console.log("xq", queue);
    //   }, 800)();
    // };
    // await fx();

    // return new Promise(async (resolve, reject) => {
    //   console.log(queue, "q");
    //   queue[queue.length - 2].then((res) => resolve(res));
    //   promiseQueue(queue).then((res) => resolve(res));
    // });

    // //delay(() => promiseQueue(queue), 300);
    // return promiseQueue(queue);
    // return new Promise(async (resolve, reject) => {
    //   const fn = () => axios.get("/api/tql", { params: { id } });
    //   for await (const res of asyncPool(1, [id], fn)) {
    //     console.log(res, "res", id);
    //     if (res.data.id === id) {
    //       resolve(res);
    //     }
    //   }
    // });

    // const res = reqList.current.addPromise(fn);
    // console.log(res.next(), "res");
  };

  async function* testD(id) {
    // const fn = () =>
    //   axios.get("/api/tql", { params: { id } }).then((res) => {
    //     console.log("ccc", res);
    //     return res;
    //   });
    // yield await fn();
    const result = await req(id);
    console.log(result, 999);
    yield result;
    // return "result";
  }

  const qs = async (id) => {
    const result = await testD.next(id);
    console.log(result);
    // (result);
    return result;
  };

  // const it = useMemo((id: any) => testD(id), []);

  async function* testFetch(id) {
    console.log("loading---", id);
    // const req = (id) => axios.get("/api/tql", { params: { id } });
    const result = await axios.get("/api/tql", { params: { id } });
    console.log(result, "over---");
    yield result;
    // return result;
  }
  const fs = useCallback(
    debounce((id, arr) => {
      console.log(id, "debounce", arr);
      fetchTest(arr, id);
    }, 1000),
    []
  );

  const getData = (id) => {
    console.log(id, "id");
    return new Promise((resolve, reject) => {
      const fn = () => axios.get("/api/tql", { params: { id } });
      const arr = reqList.current;
      if (!arr.has(id)) {
        arr.set(id, (res) => resolve(res));
      }
      fs(id, arr);
      console.log(id, "iiiloading", arr);
    });
  };

  return (
    <div className="demo">
      <h2>Demo</h2>

      <Button onClick={() => fetchTest()}>request</Button>
      {/* <Button onClick={() => testD()}>test</Button> */}
      {/* 
      <Select
        style={{ marginLeft: 100, width: 220 }}
        mode="multiple"
        autoClearSearchValue={false}
        open
        dropdownRender={() => (
          <MultiSelect
            options={options}
            showClearBtn={true}
            value={val}
            onChange={(arr: any) => console.log(arr, 'change')}
            onClear={() => {
              console.log('clear')
            }}
          />
        )}
        defaultValue={val}
      ></Select> */}

      <ResponsiveReactGridLayout
        className="grid-layout grid-layout-dragging"
        layouts={layout}
        rowHeight={70}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        compactType={null}
        useCSSTransforms={true}
      >
        {list.map((item: any) => (
          <div key={item.i}>
            <EchartDemo
              title={item.i}
              // fetchData={(id) => {
              //   testFetch(id).next();
              // }}
              fetchData={getData}
              id={item.i}
            />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

const Demo: React.FC = () => {
  const layout = {
    lg: [],
  };
  const [list, setList] = useState([
    {
      i: "a",
      x: 0,
      y: 1,
      w: 4,
      h: 4,
    },
    {
      i: "b",
      x: 1,
      y: 0,
      w: 4,
      h: 4,
    },
    {
      i: "c",
      x: 2,
      y: 1,
      w: 4,
      h: 4,
    },
    {
      i: "d",
      x: 3,
      y: 1,
      w: 4,
      h: 4,
    },
    // {
    //   i: "aq",
    //   x: 4,
    //   y: 1,
    //   w: 4,
    //   h: 4,
    // },
    // {
    //   i: "bq",
    //   x: 0,
    //   y: 0,
    //   w: 4,
    //   h: 4,
    // },
    // {
    //   i: "cq",
    //   x: 0,
    //   y: 0,
    //   w: 4,
    //   h: 4,
    // },
    // {
    //   i: "dq",
    //   x: 0,
    //   y: 0,
    //   w: 4,
    //   h: 4,
    // },
  ]);
  const screenList = [
    {
      label: "日期",
      value: "2012",
      type: "date",
      id: 1,
    },
    {
      label: "车型",
      value: "2000",
      type: "select",
      id: 2,
    },
    {
      label: "车况",
      value: "20",
      id: 3,
    },
  ];
  const onLayoutChange = (layout: any) => {
    console.log(layout, "layoutChange");
  };

  const onSortList = (list: any) => {
    console.log("sortFilter", list);
  };

  const onFilter = (list: any) => {
    console.log("filter", list);
  };

  const onAddGraph = () => {};

  const onExport = () => {};

  return (
    <>
      <DashBoardFilter
        title="仪表盘1"
        onFilter={onFilter}
        screenList={screenList}
        onExport={onExport}
        onSortList={onSortList}
        onAddGraph={onAddGraph}
      />
      <Button onClick={() => setList(list.slice(0, -2))}>remove</Button>
      <Button
        onClick={() =>
          setList([
            ...list,
            {
              i: Math.random() * 1000 + "",
              x: 0,
              y: 0,
              w: 4,
              h: 4,
              minW: 4,
              minH: 4,
            },
          ])
        }
      >
        add
      </Button>
      <GridWrap layout={layout} onLayoutChange={onLayoutChange} list={list} />
    </>
  );
};

export default Demo;
