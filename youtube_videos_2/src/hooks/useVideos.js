import { useState, useEffect } from "react";
import youtube from "../APIs/youtube";

const useVideos = (defaultSearchTeam) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTeam);
  }, [defaultSearchTeam]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
