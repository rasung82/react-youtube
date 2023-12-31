import axios from "axios";

export default class YoutubeDataApi {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {key: process.env.REACT_APP_YOUTUBE_API_KEY}
    })
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async getChannelInfo(id){
    console.log('R) getChannelInfo... ', id);
    return this.httpClient
      .get(`channels`, {
        params: {
          id: id,
          part: 'snippet',
        }
      })
      .then(res => res.data.items[0].snippet)
  }

  async getRelatedVideos(id){
    console.log('R) getRelatedVideos... ', id);
    return this.httpClient
      .get(`search`, {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          videoId: id
        }
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({...item, id:item.id.videoId})) )
  }

  /**
   *
   * @param keyword
   * @returns {Promise<(*&{id: *})[]>}
   */
  async #searchByKeyword(keyword) {
    console.log('R) searchByKeyword... ', keyword);
    return this.httpClient
      .get(`search`, {
        params: {
          part: 'snippet',
          maxResults: '25',
          type: 'video',
          regionCode: 'KR',
          relevanceLanguage: 'ko',
          q: keyword
        }
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({...item, id:item.id.videoId})) )
  }

  async #mostPopular() {
    console.log('R) mostPopular... ');
    return this.httpClient
      .get(`videos`, {
        params: {
          part: 'snippet',
          maxResults: '25',
          chart: 'mostPopular',
          regionCode: 'KR',
          relevanceLanguage: 'ko'
        }
      })
      .then(res => res.data.items)
  }
}
