import UserProfileMenuProps from "../types/UserProfileMenuProps"
import Anchor from "./Anchor"
import Button from "./Button"
import { IconX, IconLogout, IconUser, IconUserCog } from "@tabler/icons-react"

const UserProfileMenu = (props: UserProfileMenuProps) => {
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
            text='Profile'
            icon={<IconUser size={16} />}
          />
          <Anchor
            to='https://instagram.com'
            text='Account settings'
            icon={<IconUserCog size={16} />}
          />
        </div>
      </div>
      <div>
        <Anchor
          to='https://instagram.com'
          text='instagram'
          icon={<IconLogout size={16} />}
        />
      </div>
    </div>
  )
}

export default UserProfileMenu
