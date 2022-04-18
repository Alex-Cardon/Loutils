import React, { useState } from "react";
import axios from 'axios';

function adFormPicture({ updatePictureId }) {
  const [file, setfile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

    const send = event => {
         const data = new FormData();
         data.append("file", file); 
         axios.post("http://localhost:3000/image", data).then(res => {
            updatePictureId(res.data.data.picture_id)
          });
    };


  return (
    <div className="adFormPicture">
      <header className="adFormPicture-header">
        <form action="#">
          <label htmlFor="file"></label>
          <input type="file" name="picture_id" id="id" accept=".jpg" onChange={event => {
            const file = event.target.files[0];
            setFilePreview(URL.createObjectURL(event.target.files[0]));
            setfile(file);
            // send;
          }} >
          </input>
        </form>
        {filePreview !== null ? 
        <img className="previewimg"  src={filePreview} alt="UploadImage" />
      : null}

        <button onClick={send}>Envoyez la photo</button>
      </header>
    </div>
  );
}

export default adFormPicture;
