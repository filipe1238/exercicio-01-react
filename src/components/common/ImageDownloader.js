import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

function ImageDownloader({ imageUrl }) {
  const imageMimeType = "image/jpeg";
  const imageExtension = ".jpg";
  const [loading, setLoading] = useOutletContext();

  const downloadImage = () => {
    setLoading(true);
    axios
      .get(imageUrl, {
        responseType: "blob",
      })
      .then((response) => {
        saveAs(
          new Blob([response.data], { type: imageMimeType }),
          "wallpaper-downloaded" + imageExtension
        );
        setLoading(false);
      });
  };

  const viewImage = () => {
    window.open(imageUrl);
  }

  return (
    <div>
      <Dropdown.Item onClick={downloadImage}>
        <FontAwesomeIcon icon={faDownload} /> Download
      </Dropdown.Item>
      <Dropdown.Item onClick={viewImage}>
        <FontAwesomeIcon icon={faSearch} /> View
      </Dropdown.Item>
    </div>
  );
}

export default ImageDownloader;
