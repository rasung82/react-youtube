import {useParams} from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();

  return (
    <div>
      Videos { videoId ? '😎' : '☕'  }
      <iframe
        width="1080"
        height="680"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen />
    </div>
  )
}
