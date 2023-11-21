import Badge from "./Badge"

const Card = () => {
  return (
    <div className='bg-primary-300 w-full rounded-md p-4 text-white'>
      <div className='p-2 text-lg font-bold'>
        Overwrite Laravel eloquent builder
      </div>
      <div className='p-2'>
        Overwriting builder query in laravel model to set some default
        conditions
      </div>
      <div className='flex gap-2 p-2'>
        <Badge text='badge' type='info' />
        <Badge text='k cha khabar' type='accent' />
      </div>
    </div>
  )
}
export default Card
