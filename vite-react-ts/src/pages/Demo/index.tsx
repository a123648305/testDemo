import React, { useLayoutEffect, useRef, useState } from 'react'
import EchartDemo from '../../components/EchartDemo'
import DashBoardFilter from '../../components/DashbordFilter'
import MultiSelect from '../../components/MultiSelect'
import {
  ItemCallback,
  Layout,
  Responsive,
  WidthProvider,
} from 'react-grid-layout'
import './index.less'
import { Button, Select } from 'antd'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

type PropsType = {
  data: Array<any> | undefined
  layout: Layout
  vertical: boolean
  onDragStart?: ItemCallback
  onDragEnd?: ItemCallback
  onLayoutChange: (layout: Layout) => void
}

const GridWrap: React.FC<any> = (props) => {
  const { layout, data, onLayoutChange, list } = props
  const gridRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    console.log(gridRef, 'cc')
  }, [])

  const [val, setVal] = useState(['12', '20'])
  const [selectList, setSelectList] = useState([])
  const options = [
    {
      id: '699e2ba04ccd4c5ca9a8f3f04ec22418',
      name: '项目管理员',
    },
    {
      id: 'aa5bc7b22c224b4f9f13eb8109b35c0c',
      name: '项目成员',
    },
    {
      id: 'f88b4891aef147eda57fb2039581ce6b',
      name: '新问卷调研权限',
    },
    {
      id: 'e834585e188b473b8d211d5c016c5e93',
      name: '咕咕咕咕细细细细细',
    },
    {
      id: '26da439f051d48c4987a1a79b5b772ca',
      name: '无话题分析',
    },
    {
      id: '4e6fe6acbfa84e40b675439206d724e8',
      name: '查看问卷消息页面信息',
    },
    {
      id: 'f1ffa2ecd96c481ea0bae2fd24ba5f18',
      name: '1233456',
    },
    {
      id: 'f79d92c180c8454db02e57e9878f1449',
      name: '111111',
    },
    {
      id: '7aba06f9716a4c179504f62c6c966617',
      name: '仅工作台待办-没有预警和工单',
    },
    {
      id: 'ae5d0b1f2e264c27892d1f30e3ea2ae7',
      name: '项目设置-数据链接',
    },
  ]

  return (
    <div className="demo">
      <h2>Demo</h2>

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
      ></Select>

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
          <div key={item.i} style={{ width: 300 }}>
            <EchartDemo loading={false} title={item.i} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  )
}

const Demo: React.FC = () => {
  const layout = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4 },
      { i: 'b', x: 0, y: 0, w: 3, h: 4, minW: 4, minH: 4 },
      { i: 'c', x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4 },
    ],
  }
  const [list, setList] = useState([
    { i: 'a', x: 0, y: 0, w: 8, h: 10, minW: 4, minH: 4 },
    { i: 'b', x: 0, y: 0, w: 6, h: 4, minW: 4, minH: 4 },
    { i: 'c', x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4 },
  ])
  const screenList = [
    {
      label: '日期',
      value: '2012',
      type: 'date',
      id: 1,
    },
    {
      label: '车型',
      value: '2000',
      type: 'select',
      id: 2,
    },
    {
      label: '车况',
      value: '20',
      id: 3,
    },
  ]
  const onLayoutChange = (layout: any) => {
    console.log(layout, 'layoutChange')
  }

  const onSortList = (list: any) => {
    console.log('sortFilter', list)
  }

  const onFilter = (list: any) => {
    console.log('filter', list)
  }

  const onAddGraph = () => {}

  const onExport = () => {}

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
              i: Math.random() * 1000 + '',
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
  )
}

export default Demo
