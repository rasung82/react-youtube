import {Link} from 'react-router-dom';
import {formatAgo} from "../util/date";


export default function VideoCards({ video }) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  return (
    <li className=''>
      <Link to={`/videos/watch/${video.id}`}>
        <img className='w-full rounded-3xl'  src={thumbnails.medium.url} alt={title} />
      </Link>
      <div>
        <p className='font-semibold my-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  )
}
