import { IconX } from "@tabler/icons-react"
import IconButton from "./IconButton"
import InputText from "./InputText"
import InputSelect from "./InputSelect"
import InputSubmit from "./InputSubmit"
import InputTextArea from "./InputTextArea"
import SpanAlert from "./SpanAlert"
import Alert from "./Alert"
import programmingLanguages from "../assets/programmingLanguages"
import { FormEvent, useEffect, useRef, useState } from "react"
import axiosClient from "../axios-client"
import ValidationError from "../types/ValidationError"

interface AddSnippetProps {
    toggleModal: () => void
}
;[]
const AddSnippet = (props: AddSnippetProps) => {
    const formRef = useRef<HTMLFormElement>(null)
    const titleRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    const tagsRef = useRef<HTMLInputElement>(null)
    const languageRef = useRef<HTMLSelectElement>(null)
    const codeRef = useRef<HTMLTextAreaElement>(null)
    const codeDescriptionRef = useRef<HTMLTextAreaElement>(null)

    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(false)

    const [errors, setErrors] = useState<ValidationError[]>([])

    const [titleError, setTitleError] = useState<ValidationError>()
    const [descriptionError, setDescriptionError] = useState<ValidationError>()
    const [tagsError, setTagsError] = useState<ValidationError>()
    const [languageError, setLanguageError] = useState<ValidationError>()
    const [codeError, setCodeError] = useState<ValidationError>()
    const [codeDescriptionError, setCodeDescriptionError] =
        useState<ValidationError>()

    const submitForm = (e: FormEvent) => {
        e.preventDefault()

        if (
            formRef.current &&
            titleRef.current &&
            descriptionRef.current &&
            tagsRef.current &&
            languageRef.current &&
            codeRef.current &&
            codeDescriptionRef.current
        ) {
            const tags = tagsRef.current.value
                .split(",")
                .map((tag) => tag.trim())

            const payload = {
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                tags: tags,
                language: languageRef.current.value,
                code: codeRef.current.value,
                code_description: codeDescriptionRef.current.value,
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
        setTitleError(errors.find((e) => e.path === "title"))
        setDescriptionError(errors.find((e) => e.path === "description"))
        setTagsError(errors.find((e) => e.path === "tags"))
        setLanguageError(errors.find((e) => e.path === "language"))
        setCodeError(errors.find((e) => e.path === "code"))
        setCodeDescriptionError(
            errors.find((e) => e.path === "code_description")
        )
    }, [errors])

    return (
        <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex w-full items-center justify-center">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-lg">Add Snippet</h1>
                        <IconButton
                            type="primary"
                            onClick={() => props.toggleModal()}
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
                        ref={titleRef}
                        name="title"
                        id="title"
                        placeholder="Title"
                        hasLabel={true}
                        inputLabel="Title"
                        required={true}
                    />
                    {titleError && (
                        <SpanAlert type="error" message={titleError.msg} />
                    )}

                    <InputTextArea
                        ref={descriptionRef}
                        type="description"
                        name="description"
                        id="description"
                        placeholder="Description"
                        hasLabel={true}
                        inputLabel="Description"
                        required={true}
                        rows={3}
                    />
                    {descriptionError && (
                        <SpanAlert
                            type="error"
                            message={descriptionError.msg}
                        />
                    )}

                    <InputText
                        ref={tagsRef}
                        name="tags"
                        id="tags"
                        placeholder="tag1,tag2,tag3"
                        hasLabel={true}
                        inputLabel="Tags"
                        required={true}
                    />
                    {tagsError && (
                        <SpanAlert type="error" message={tagsError.msg} />
                    )}
                    <SpanAlert
                        type="warning"
                        message="Provide tags in comma-separated format"
                    />

                    <InputSelect
                        ref={languageRef}
                        name="language"
                        id="language"
                        placeholder=""
                        hasLabel={true}
                        inputLabel="Language"
                        required={true}
                        options={programmingLanguages}
                    />
                    {languageError && (
                        <SpanAlert type="error" message={languageError.msg} />
                    )}

                    <InputTextArea
                        ref={codeRef}
                        name="code"
                        id="code"
                        placeholder="Code"
                        hasLabel={true}
                        inputLabel="Code"
                        required={true}
                        rows={6}
                    />
                    {codeError && (
                        <SpanAlert type="error" message={codeError.msg} />
                    )}

                    <InputTextArea
                        ref={codeDescriptionRef}
                        name="code_description"
                        id="code_description"
                        placeholder="Code description"
                        hasLabel={true}
                        inputLabel="Code description"
                        rows={4}
                    />
                    {codeDescriptionError && (
                        <SpanAlert
                            type="error"
                            message={codeDescriptionError.msg}
                        />
                    )}
                    <SpanAlert
                        type="warning"
                        message="Explain what the code does if you want."
                    />

                    <InputSubmit value="Save" />
                </form>
            </div>
        </div>
    )
}

export default AddSnippet
