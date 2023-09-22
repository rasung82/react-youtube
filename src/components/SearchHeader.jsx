import {useEffect, useState} from "react";
import {BsYoutube, BsSearch} from 'react-icons/bs';
import {useNavigate, useParams, Link} from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  }

  useEffect(() => {
    setText(keyword || '')
  },[keyword])

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <div>
        <Link to='/' className='flex items-center'>
          <BsYoutube className='text-4xl text-brand'/>
          <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
        </Link>
      </div>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50 rounded-full'
          type='text'
          placeholder='  Search...'
          value={text}
          onChange={handleChange}
        />
        <button className='ng-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  )
}
