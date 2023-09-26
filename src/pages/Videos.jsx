import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import VideoCards from "../components/VideoCard";
import {useYoutubeApi} from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data:videos
  } = useQuery(['videos', keyword], () => {
    // FIXME: 매번 호출 시 인터스턴스 생성하며 내부 로직이 노출되어 있다. --> 우산을 쓰여준다 ?
    //const youtube = new YoutubeDataApi();
    //return youtube.search(keyword);

    // FIXME: Context를 이용한다 !
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
