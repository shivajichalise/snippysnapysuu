import { IconX } from "@tabler/icons-react"
import IconButton from "./IconButton"
import InputText from "./InputText"
import InputSubmit from "./InputSubmit"
import SpanAlert from "./SpanAlert"
import { FormEvent, useEffect, useRef, useState } from "react"
import axiosClient from "../axios-client"
import ValidationError from "../types/ValidationError"
import AddTagProps from "../types/AddTagProps"

const AddTag = (props: AddTagProps) => {
    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)

    const [errors, setErrors] = useState<ValidationError[]>([])

    const [nameError, setNameError] = useState<ValidationError>()

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if (formRef.current && nameRef.current) {
            const payload = {
                name: nameRef.current.value,
            }

            axiosClient
                .post("/tags", payload)
                .then(({ data }) => {
                    props.setSuccessMessage(data.message)
                    formRef.current?.reset()
                    props.setTags((tags) =>
                        tags ? [...tags, data.data.tag] : [data.data.tag]
                    )
                })
                .catch((err) => {
                    const response = err.response
                    if (response && response.status === 403) {
                        setErrors(response.data.data)
                    }
                })
        } else {
            console.error("")
        }
    }

    useEffect(() => {
        setNameError(errors.find((e) => e.path === "name"))
    }, [errors])

    return (
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex w-full items-center justify-center">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-lg">Add Tag</h1>
                        <IconButton
                            type="primary"
                            onClick={() => props.toggleModal("add_collection")}
                        >
                            <IconX size={15} className="m-1" />
                        </IconButton>
                    </div>
                </div>
                <hr className="bg-200 my-3 h-px w-full rounded-lg border-0" />

                <form onSubmit={submitForm} ref={formRef}>
                    <InputText
                        ref={nameRef}
                        name="name"
                        id="name"
                        placeholder="Name"
                        hasLabel={true}
                        inputLabel="Tag name"
                        required={true}
                    />
                    {nameError && (
                        <SpanAlert type="error" message={nameError.msg} />
                    )}

                    <InputSubmit value="Save" />
                </form>
            </div>
        </div>
    )
}

export default AddTag
