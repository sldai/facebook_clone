import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { VideoCameraIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Contact from './Contact';

const contacts = [
  { src: '/Elon_Musk_Royal_Society.jpg', name: 'Elon Musk' },
  { src: '/gates.jpg_background=000000&cropX1=292&cropX2=3684&cropY1=592&cropY2=3987', name: 'Bill Gates' },
  { src: '/Zuckerberg.jpg', name: 'Mark Zuckerberg' },
  { src: '/Queen.jpg', name: 'The Queen' },
  { src: '/James.jpg', name: 'James Bond' },
];

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <MagnifyingGlassIcon className='h-6' />
          <EllipsisHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
