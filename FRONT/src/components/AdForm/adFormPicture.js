import React, { useState } from "react";
import axios from 'axios';

function adFormPicture({ updatePictureId }) {
  const [file, setfile] = useState(null);

    const send = event => {
         const data = new FormData();
         data.append("file", file); 
         axios.post("http://ec2-3-237-39-254.compute-1.amazonaws.com:3000/image", data).then(res => {
            updatePictureId(res.data.data.picture_id)
          });
    };

  return (
    <div className="adFormPicture">
      <header className="adFormPicture-header">
        <form action="#">
          <label htmlFor="file"></label>
          <input type="file" name="image" id="id" accept=".jpg" onChange={event => {
            const file = event.target.files[0];
            setfile(file);
          }} >
          </input>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default adFormPicture;
