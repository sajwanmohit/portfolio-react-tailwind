import { useState } from "react"

function useCounter(initialValue: number) {
  const [counter, setCount] = useState(initialValue)

  const increment = () => setCount(counter + 1)
  const decrement = () => setCount(counter - 1)

  return { counter, increment, decrement }
}

export default useCounter