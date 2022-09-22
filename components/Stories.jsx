import StoryCard from './StoryCard';

const stories = [
  { name: 'Mark Zuckerberg', src: 'https://links.paperreact.com/xql', profile: 'https://link.papareact.com/snf' },
  { name: 'Bill Gates', src: 'https://links.paperreact.com/4u4', profile: 'https://link.papareact.com/zvy' },
];

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {stories.map((story) => (
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
};

export default Stories;
