import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
  return (
    <div className='grid place-items-center'>
      <Image src='/f_logo_RGB-Blue_512.png' height={400} width={400} objectFit='contain' alt='' />
      <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  );
}

export default Login;
