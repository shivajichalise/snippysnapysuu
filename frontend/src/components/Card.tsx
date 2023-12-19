import Badge from "./Badge"

const Card = () => {
  return (
    <div className='bg-primary-300 w-full cursor-pointer rounded-md p-4 text-white hover:mb-[5px] hover:mt-[-5px]'>
      <div className='p-2 text-lg font-bold'>
        Overwrite Laravel eloquent builder
      </div>
      <div className='p-2'>
        Overwriting builder query in laravel model to set some default
        conditions
      </div>
      <div className='flex gap-2 p-2'>
        <Badge text='badge' type='primary' rounded />
        <Badge text='k cha khabar' type='primary' rounded />
      </div>
    </div>
  )
}
export default Card
