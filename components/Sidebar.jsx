import { CalendarIcon, ComputerDesktopIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/solid';
import SiderbarRow from './SidebarRow';

function Sidebar() {
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SiderbarRow Icon={UsersIcon} title='Friends' />
      <SiderbarRow Icon={UserGroupIcon} title='Groups' />
      <SiderbarRow Icon={ComputerDesktopIcon} title='Watch' />
      <SiderbarRow Icon={ShoppingBagIcon} title='Marketplace' />
      <SiderbarRow Icon={CalendarIcon} title='Events' />
      <SiderbarRow Icon={ClockIcon} title='Memories' />
      <SiderbarRow Icon={ChevronDownIcon} title='See More' />
    </div>
  );
}

export default Sidebar;
