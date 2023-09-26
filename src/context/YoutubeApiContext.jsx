import {createContext, useContext} from "react";
import YoutubeDataApi from "../api/YoutubeDataApi";

export const YoutubeApiContext = createContext();

const youtube = new YoutubeDataApi();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  )
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}
