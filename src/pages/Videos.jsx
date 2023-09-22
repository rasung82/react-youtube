import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import axios from 'axios'
import VideoCards from "../components/VideoCard";
import YoutubeDataApi from "../api/YoutubeDataApi";

export default function Videos() {
  let { keyword } = useParams();

  const {
    isLoading,
    error,
    data:videos
  } = useQuery(['videos', keyword], () => {
    const youtube = new YoutubeDataApi();
    return youtube.search(keyword);
  })
  return (
    <div>
      Videos { keyword ? '😎' : '☕'  }
      { isLoading && <p>Loading...⌛</p>  }
      { error && <p>Something is wrong...😢</p>  }
      { videos &&
        <ul>
          {videos.map(video =>
            <VideoCards key={video.id} video={video} />
          )}
        </ul>
      }

    </div>
  )
}
