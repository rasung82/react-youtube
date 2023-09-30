import {useYoutubeApi} from "../context/YoutubeApiContext";
import {useQuery} from "@tanstack/react-query";

export default function ChannelInfo({id, name}) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data:channels
  } = useQuery(['channel', id], () => {
    return youtube.getChannelInfo(id)
  })

  return (
    <>
      { isLoading && <p>Loading...⌛</p>  }
      { error && <p>Something is wrong...😢</p>  }
      <div className='flex my-4 mb-8 items-center'>
        <img className='w-10 h-10 rounded-full' src={channels?.thumbnails?.default.url} alt={name} />
        <p className='text-lg font-medium ml-2'>{name}</p>
      </div>
    </>
  )

}