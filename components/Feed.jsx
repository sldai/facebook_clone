import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';

const Feed = () => {
  return (
    <div className='flex-grow justify-center h-screen pb-44 pt-6 mr-4 lg:mr-20 overflow-y-auto scrollbar-hide flex items-start'>
      <div className='max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <InputBox />
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
