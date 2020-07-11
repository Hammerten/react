import React, { useState, useEffect } from "react";
import Album from "../Album";

function AlbumCatalog(props) {
  const albums = props.albums;

  return (
    <div className="row">
      {albums.map((album) => {
        return <Album key={album.id} album={album} />;
      })}
    </div>
  );
}

export default AlbumCatalog;
