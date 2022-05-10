import React from 'react'
import GridLayout from 'react-grid-layout'
import EchartDemo from '../../components/EchartDemo'
import './index.less'

const data = [1, 2, 3, 4, 5]
const layout = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
  { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
]

const Demo: React.FC = () => {
  return (
    <div className="demo">
      <h2>Demo</h2>
      <GridLayout
        className="grid-layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {data.map((item) => (
          <EchartDemo loading={false} title={''} key={item} />
        ))}
      </GridLayout>
    </div>
  )
}

export default Demo
