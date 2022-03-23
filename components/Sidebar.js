import Image from 'next/image'
import SidebarLink from './SidebarLink'
import { HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        <Image
          src="https://i.ibb.co/B4J408W/twitter-icon-svg-28.png"
          width={30}
          height={30}
        />
      </div>
      <div className="mt-4 mb-2.5 space-y-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button
        className="ml-auto hidden h-[52px] w-56 rounded-full 
      bg-[#1d9bf0] text-lg font-bold text-white
        shadow-md hover:bg-[#1a8cd8] xl:inline"
      >
        Tweet
      </button>
      <div className="hoverAnimation mt-auto flex items-center justify-center text-[#d9d9d9] xl:ml-auto xl:-mr-4 ">
        <img
          src="https://i.ibb.co/yN3BSLJ/IMG-20210315-171207.jpg"
          alt="dp"
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">User Name</h4>
          <p className="text-[#6e767d]">@username</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  )
}

export default Sidebar
