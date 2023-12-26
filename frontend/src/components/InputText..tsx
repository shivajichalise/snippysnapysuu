const InputText = (props: InputTextProps) => {
  return (
    <input
      type='text'
      className='focus:border-primary-200 text-text-200 bg-300 border-100 block w-full rounded-lg border p-2.5 text-sm placeholder-gray-400 outline-none'
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
    />
  )
}

export default InputText
