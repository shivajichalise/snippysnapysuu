import { Link } from "react-router-dom"
import AppMenuProps from "../types/AppMenuProps"
import Anchor from "./Anchor"
import Button from "./Button"
import { IconX, IconTelescope, IconHome } from "@tabler/icons-react"

const AppMenu = (props: AppMenuProps) => {
  return (
    <div className='flex h-full flex-col justify-between'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          {props.children}
          <Button type='primary' onClick={props.toggleModal}>
            <IconX size={15} className='m-1' />
          </Button>
        </div>
        <hr className='bg-300 my-3 h-px w-full rounded-lg border-0' />
        <div>
          <Anchor
            to='https://instagram.com'
            text='Home'
            icon={<IconHome size={16} />}
          />
          <Anchor
            to='https://instagram.com'
            text='Explore'
            icon={<IconTelescope size={16} />}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <p className='text-accent-200 text-xs'>
            &copy; {new Date().getFullYear()} Snippy Snapy Suu
          </p>
        </div>
        <div>
          <Link
            to='https://instagram.com'
            className='text-primary-200 mr-3 text-xs hover:underline'
          >
            About
          </Link>
          <Link
            to='https://instagram.com'
            className='text-primary-200 mr-3 text-xs hover:underline'
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AppMenu
