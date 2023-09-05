'use client'
import React from 'react'

export default function Home() {
  const [count, setCount] = React.useState(0)

  function incrementar() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </>
  )
}
