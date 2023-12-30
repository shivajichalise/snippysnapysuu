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
    <div className='border-200 bg-300 flex h-[calc(100vh-(3.5rem))] w-64 flex-col border-r p-4'>
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
          <label className='text-accent-200 text-sm'>Collections</label>
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
          <label className='text-accent-200 text-sm'>Tags</label>
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
