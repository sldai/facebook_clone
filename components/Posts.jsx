import { collection, orderBy, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../features/firebase';
import Post from './Post';

const Posts = () => {
  const [realtimePosts] = useCollection(query(collection(db, 'posts'), orderBy('timestamp', 'desc')));

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;
