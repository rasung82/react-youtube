import {useQuery} from "@tanstack/react-query";
import {useYoutubeApi} from "../context/YoutubeApiContext";
import VideoCards from "./VideoCard";

export default function RelatedVideos({id}) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data:videos
  } = useQuery(['related', id], () => {
    return youtube.getRelatedVideos(id)
  })

  return (
    <>
      { isLoading && <p>Loading...⌛</p>  }
      { error && <p>Something is wrong...😢</p>  }
      { videos &&
        <ul>
          {videos.map(video =>
            <VideoCards key={video.id} video={video} type='list' />
          )}
        </ul>
      }
    </>
  )
}