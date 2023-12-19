import Card from "./Card"

const LeftContent = () => {
  return (
    <div className='border-200 flex h-[calc(100vh-3.5rem)] w-96 flex-col gap-4 overflow-y-scroll border-r p-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default LeftContent
