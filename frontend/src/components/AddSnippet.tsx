import { IconX } from "@tabler/icons-react"
import IconButton from "./IconButton"
import InputText from "./InputText"
import InputSelect from "./InputSelect"
import InputSubmit from "./InputSubmit"
import InputTextArea from "./InputTextArea"
import SpanAlert from "./SpanAlert"
import programmingLanguages from "../assets/programmingLanguages"

interface AddSnippetProps {
    toggleModal: () => void
}

const AddSnippet = (props: AddSnippetProps) => {
    return (
        <div className='flex h-full flex-col justify-between'>
            <div className='flex flex-col'>
                <div className='flex w-full items-center justify-center'>
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-lg">Add Snippet</h1>
                        <IconButton type='primary' onClick={() => props.toggleModal()}>
                            <IconX size={15} className="m-1" />
                        </IconButton>
                    </div>
                </div>
                <hr className='bg-200 my-3 h-px w-full rounded-lg border-0' />
                <form>

                    <InputText
                        name="title"
                        id="title"
                        placeholder="Title"
                        hasLabel={true}
                        inputLabel="Title"
                        required={true}
                    />

                    <InputTextArea
                        type="description"
                        name="description"
                        id="description"
                        placeholder="Description"
                        hasLabel={true}
                        inputLabel="Description"
                        required={true}
                        rows={3}
                    />

                    <InputText
                        name="tags"
                        id="tags"
                        placeholder="tag1,tag2,tag3"
                        hasLabel={true}
                        inputLabel="Tags"
                        required={true}
                    />
                    <SpanAlert type="warning" message="Provide tags in comma-separated format" />

                    <InputSelect
                        name="language"
                        id="language"
                        placeholder=""
                        hasLabel={true}
                        inputLabel="Language"
                        required={true}
                        options={programmingLanguages}
                    />

                    <InputTextArea
                        name="code"
                        id="code"
                        placeholder="Code"
                        hasLabel={true}
                        inputLabel="Code"
                        required={true}
                        rows={6}
                    />

                    <InputTextArea
                        name="code_description"
                        id="code_description"
                        placeholder="Code description"
                        hasLabel={true}
                        inputLabel="Code description"
                        rows={4}
                    />
                    <SpanAlert type="warning" message="Explain what the code does if you want." />

                    <InputSubmit value="Save" />
                </form>
            </div>
        </div>
    )

}

export default AddSnippet
