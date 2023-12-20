import { useState } from "react"

const RightContent = () => {
  const snippet = useState(null)

  return (
    <div className='flex w-full items-center justify-center p-4'>
      {snippet ? (
        <h1 className='text-100'>SnipySnapySuuuuuuu...</h1>
      ) : (
        <h1 className='text-100'>Right content</h1>
      )}
    </div>
  )
}

export default RightContent
