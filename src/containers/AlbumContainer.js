import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, apiToken } from "../configure.json";
import AlbumCatalog from "../components/AlbumCatalog";

function AlbumContainer() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}albums`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
      .then((res) => setAlbums(res.data.result));
  }, []);

  return <AlbumCatalog albums={albums} />;
}

export default AlbumContainer;
