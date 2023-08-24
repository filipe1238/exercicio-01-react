import React from "react";
import ImageDownloader from "../common/ImageDownloader";
import { Dropdown, DropdownButton } from "react-bootstrap";

function ImageDetail({ wallpaper, download }) {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="d-flex align-items-end flex-column">
          <div class="p-0">
            <h3>By {wallpaper.author}</h3>
          </div>
          <div class="p-2">
            <Dropdown>
              <Dropdown.Toggle variant="btn btn-outline-secondary">
                Download
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ImageDownloader imageUrl={wallpaper.download_url} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="text-center">
            <div class="d-flex justify-content-center">
              <img
                className="img-fluid"
                src={wallpaper.download_url}
                alt={wallpaper.author}
              />
            </div>

            <p>
              {wallpaper.width} x {wallpaper.height}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageDetail;
