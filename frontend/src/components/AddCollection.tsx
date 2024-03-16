import { IconX } from "@tabler/icons-react"
import IconButton from "./IconButton"
import InputText from "./InputText"
import InputSubmit from "./InputSubmit"
import SpanAlert from "./SpanAlert"
import Alert from "./Alert"
import { FormEvent, useEffect, useRef, useState } from "react"
import axiosClient from "../axios-client"
import ValidationError from "../types/ValidationError"

interface AddCollectionProps {
    toggleModal: (add: string) => void
}

const AddCollection = (props: AddCollectionProps) => {
    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)

    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(false)

    const [errors, setErrors] = useState<ValidationError[]>([])

    const [nameError, setNameError] = useState<ValidationError>()

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if (formRef.current && nameRef.current) {
            const payload = {
                name: nameRef.current.value,
            }

            axiosClient
                .post("/snippets", payload)
                .then(({ data }) => {
                    setSuccessMessage(data.message)
                    formRef.current?.reset()
                    setSuccess(true)
                })
                .catch((err) => {
                    const response = err.response
                    if (response && response.status === 403) {
                        setErrors(response.data.data)
                    }
                    setSuccess(false)
                })
        } else {
            console.error("")
        }
    }

    useEffect(() => {
        setNameError(errors.find((e) => e.path === "title"))
    }, [errors])

    return (
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex w-full items-center justify-center">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-lg">Add Collection</h1>
                        <IconButton
                            type="primary"
                            onClick={() => props.toggleModal("add_collection")}
                        >
                            <IconX size={15} className="m-1" />
                        </IconButton>
                    </div>
                </div>
                <hr className="bg-200 my-3 h-px w-full rounded-lg border-0" />

                {success && <Alert type="primary" message={successMessage} />}
                {!success && (
                    <Alert type="error" message="Error creating snippet." />
                )}
                <form onSubmit={submitForm} ref={formRef}>
                    <InputText
                        ref={nameRef}
                        name="name"
                        id="name"
                        placeholder="Name"
                        hasLabel={true}
                        inputLabel="Collection name"
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

export default AddCollection
