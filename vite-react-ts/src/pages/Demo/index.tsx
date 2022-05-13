import React, { useLayoutEffect, useRef, useState } from 'react'
import GridLayout from 'react-grid-layout'
import EchartDemo from '../../components/EchartDemo'
import { Layout, ItemCallback } from 'react-grid-layout'
import DashBoardFilter from '../../components/DashbordFilter'
import './index.less'
import SortDemo from '../../components/sortDemo'

type PropsType = {
  data: Array<any> | undefined
  layout: Layout
  vertical: boolean
  onDragStart?: ItemCallback
  onDragEnd?: ItemCallback
  onLayoutChange: (layout: Layout) => void
}

const GridWrap: React.FC<any> = (props) => {
  const { layout, data, onLayoutChange, onDragStart, onDragEnd } = props
  const [isDraging, SetIsDraging] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    console.log(gridRef, 'cc')
  }, [])

  return (
    <div className="demo">
      <h2>Demo</h2>
      <GridLayout
        className={
          isDraging ? 'grid-layout grid-layout-dragging' : 'grid-layout'
        }
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        // compactType="vertical"
        onLayoutChange={onLayoutChange}
        onDragStart={(e) => {
          SetIsDraging(true)
          onDragStart && onDragStart(e)
        }}
        onDragStop={(e) => {
          SetIsDraging(false)
          onDragEnd && onDragEnd(e)
        }}
      >
        {layout.map((item: any) => (
          <div key={item.i}>
            <EchartDemo loading={false} title={item.i} />
          </div>
        ))}
      </GridLayout>
    </div>
  )
}

const Demo: React.FC = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4 },
    { i: 'b', x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4 },
    { i: 'c', x: 0, y: 0, w: 4, h: 4, minW: 4, minH: 4 },
  ]

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
      <GridWrap layout={layout} onLayoutChange={onLayoutChange} data={[]} />
    </>
  )
}

export default Demo
