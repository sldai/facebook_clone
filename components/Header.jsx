import Image from 'next/image';
import { BellIcon, ChevronDownIcon, HomeIcon, Squares2X2Icon, UserGroupIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { PlayIcon, MagnifyingGlassIcon, FlagIcon, ShoppingCartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import HeaderIcon from './HeaderIcon';
import Head from 'next/head';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  useSession();
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      <div className='flex items-center'>
        <Image src='/f_logo_RGB-Blue_100.png' width={40} height={40} layout={'fixed'} alt='' />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <MagnifyingGlassIcon className='h-6 text-gray-600' />
          <input
            className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type='text'
            placeholder='Search'
          />
        </div>
      </div>

      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className='flex items-center sm:space-x-2 justify-end'>

        <p className='whitespace-nowrap font-semibold pr-3'>Your Name</p>
        <Squares2X2Icon className='icon'/>
        <ChatBubbleOvalLeftEllipsisIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>

      </div>
    </div>
  );
};

export default Header;
