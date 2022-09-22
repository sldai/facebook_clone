import StoryCard from './StoryCard';

const stories = [
  { name: 'Elon Musk', src: '/elon-large.jpg', profile: '/elon-small.jpg' },
  { name: 'Jeff Bezoz', src: '/bezoz-large.webp', profile: '/bezoz-small.jpg' },
  { name: 'Mark Zuckerberg', src: '/Zuck-large.jpg', profile: '/Zuck-small.jpg' },
  { name: 'Bill Gates', src: '/Gates-large.jpg', profile: '/Gates-small.jpg' },
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
