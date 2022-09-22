import { CameraIcon, FaceSmileIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, uploadString } from 'firebase/storage';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { db, storage } from '../features/firebase';

const InputBox = () => {
  const inputRef = useRef(null);
  const inputFileRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current || !inputRef.current.value) return;
    const docRef = await addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: 'user',
      email: 'email',
      image: 'image',
      timestamp: serverTimestamp(),
    });
    if (imageToPost) {
      uploadString(ref(storage, `posts/${docRef.id}`), imageToPost, 'data_url')
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .then((url) => {
          setDoc(docRef, { postImage: url }, { merge: true });
        })
        .catch((e) => console.log(e));
      removeImage();
    }
    inputRef.current.value = null;
  };

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image className='rounded-full' src='/favicon.ico' width={40} height={40} layout='fixed' alt='' />
        <form className='flex flex-1' onSubmit={sendPost}>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            placeholder='Say something'
            ref={inputRef}
          />
          <button hidden type='submit'>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className='flex flex-col filter hover:brightness-110 transform hover:scale-105 cursor-pointer'
          >
            <img className='h-10 object-contain' src={imageToPost} alt='' />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div onClick={() => inputFileRef.current.click()} className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input ref={inputFileRef} onChange={addImageToPost} type='file' hidden />
        </div>

        <div className='inputIcon'>
          <FaceSmileIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
