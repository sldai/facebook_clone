import Image from 'next/image';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='flex items-center space-x-2 p-4 cursor-pointer'>
      {src && <Image className='rounded-full' src={src} width={30} height={30} layout='fixed' alt=''/>}
      {Icon && <Icon className='h-8 w-8 text-blue-500' />}
      <p className='hidden sm:inline-block font-medium'>{title}</p>
    </div>
  );
}

export default SidebarRow;
