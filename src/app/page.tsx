'use client'

import React, {useState} from "react";
import {FormData} from "next/dist/compiled/@edge-runtime/primitives/fetch";

export default function HomePage(){
  const [file, setFile] = useState<File | undefined>(undefined);

  function handleFileUpload(event: any){
    const selectedFile= event.target.files![0];
    if (selectedFile !== undefined){
      setFile(selectedFile)
    }
  }

  return (
    /* Formulario para la subida de archivos  */
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault()

        if (!file) {
          console.log("No file selected");
          return;
        }

        const formData = new FormData();
        formData.set('file', file);

        const response = await fetch(
          '/api/upload',
          {
            method: 'POST',
            body: formData
          });

        const data = await response.json();
        console.log(data);
      }}>
        <label>Upload file</label>
        <input type="file" name="file" onChange={handleFileUpload}/>
        <input type="submit" value="Upload" />
      </form>
    </div>
  )
}