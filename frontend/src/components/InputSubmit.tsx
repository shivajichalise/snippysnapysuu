import InputSubmitProps from "../types/InputSubmitProps"

const InputSubmit = (props: InputSubmitProps) => {
    const {id, name, value} = props

    return (
        <div className="my-3">
            <input
                type='submit'
                className='focus:border-primary-200 bg-primary-light-200 hover:bg-primary-300 border-100 w-full cursor-pointer rounded-lg border p-2 text-sm outline-none'
                id={id}
                name={name}
                value={value}
            />
        </div>
    )
}

export default InputSubmit
