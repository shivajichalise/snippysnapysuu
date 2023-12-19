import {
  IconFolderFilled,
  IconPlus,
  IconSourceCode,
  IconStarsFilled,
  IconTag,
} from "@tabler/icons-react"
import Anchor from "./Anchor"
import Button from "./Button"

const Sidebar = () => {
  return (
    <div className='flex h-[calc(100vh-(3.5rem))] w-56 flex-col overflow-y-auto border-r border-200 bg-300 p-4 md:w-72'>
      <div className='mb-4'>
        <Anchor
          to='https://instagram.com'
          icon={<IconSourceCode size={16} />}
          text='Snippets'
        />
        <Anchor
          to='https://instagram.com'
          icon={<IconStarsFilled size={16} />}
          text='Favorites'
        />
      </div>
      <div className='mb-4'>
        <div className='flex items-center justify-between'>
          <label className='text-sm text-accent-200'>Collections</label>
          <Button type='primary' onClick={() => console.log("new collectin")}>
            <IconPlus size={13} />
          </Button>
        </div>
        <Anchor
          to='https://instagram.com'
          icon={<IconFolderFilled size={16} />}
          text='DevOps'
        />
        <Anchor
          to='https://instagram.com'
          icon={<IconFolderFilled size={16} />}
          text='Frontend'
        />
      </div>
      <div className='mb-4'>
        <div className='flex items-center justify-between'>
          <label className='text-sm text-accent-200'>Tags</label>
          <Button type='primary' onClick={() => console.log("new collectin")}>
            <IconPlus size={13} />
          </Button>
        </div>
        <Anchor
          to='https://instagram.com'
          icon={<IconTag size={16} />}
          text='Reactjs'
        />
        <Anchor
          to='https://instagram.com'
          icon={<IconTag size={16} />}
          text='Bash'
        />
      </div>
    </div>
  )
}

export default Sidebar
