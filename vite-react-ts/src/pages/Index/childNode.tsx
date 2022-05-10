import React, { useEffect, useState } from 'react'

const ChildNode = ({ onChange, obj, visible }) => {
  const [visi, setVisible] = useState(visible)
  useEffect(() => {
    setVisible(visible)
  }, [visible])
  return (
    <div>
      <h2>{JSON.stringify(obj)}</h2>
      <h3>{visi}</h3>
      <button onClick={() => onChange({ ...obj, time: +new Date() })}>
        child Change
      </button>
    </div>
  )
}

export default ChildNode
