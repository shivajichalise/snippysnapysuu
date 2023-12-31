import {
  IconFolderFilled,
  IconPlus,
  IconSourceCode,
  IconStarsFilled,
  IconTag,
} from "@tabler/icons-react"
import Anchor from "./Anchor"
import Button from "./Button"
import collections from "../config/collections"
import tags from "../config/tags"
import SidebarProps from "../types/SidebarProps"

const Sidebar = (props: SidebarProps) => {
  return (
    <div className='border-200 bg-300 flex h-[calc(100vh-(3.5rem))] w-64 flex-col border-r p-4'>
      <div className='mb-4'>
        <Anchor
          to='/'
          icon={<IconSourceCode size={16} />}
          text='Snippets'
          isActive={true}
        />
        <Anchor
          to='#'
          icon={<IconStarsFilled size={16} />}
          text='Favorites'
          isActive={false}
        />
      </div>
      <div className='mb-4'>
        <div className='flex items-center justify-between'>
          <label className='text-accent-200 text-sm'>Collections</label>
          <Button type='primary' onClick={() => console.log("new collectin")}>
            <IconPlus size={13} />
          </Button>
        </div>
        {collections.map((collection) => (
          <Anchor
            key={collection.id}
            to='#'
            icon={<IconFolderFilled size={16} />}
            text={collection.name}
            isActive={false}
          />
        ))}
      </div>
      <div className='mb-4'>
        <div className='flex items-center justify-between'>
          <label className='text-accent-200 text-sm'>Tags</label>
          <Button type='primary' onClick={() => console.log("new Tag")}>
            <IconPlus size={13} />
          </Button>
        </div>
        {tags.map((tags) => (
          <Anchor
            key={tags.id}
            to='#'
            icon={<IconTag size={16} />}
            text={tags.name}
            isActive={false}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
