'use client'
import React, {useState} from "react";
import Image from "next/image";

export default function HomePage() {
    const [file, setFile] = useState<File | undefined>(undefined);

    const handleFileUpload = (event: any) => {
        const selectedFile = event.target.files![0];
        if (selectedFile !== undefined) {
            setFile(selectedFile)
        } else {
            setFile(undefined)
        }
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

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
    };

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="bg-zinc-950 p-5">
                <h1 className="text-4x1 text-center my-4">Upload a file</h1>
                <form onSubmit={handleSubmit}>
                    <input type="file" name="file" onChange={handleFileUpload}
                           className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"/>
                    <input type="submit"
                           value="Upload"
                           disabled={!file}
                           className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"/>
                </form>
                {
                    file && (
                        <div className="bg-zinc-950 p-5 ">
                            <h1 className="text-4x1 text-center my-4">File details</h1>
                            <p>File name: {file.name}</p>
                            <p>File type: {file.type}</p>
                            <p>File size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            <h3>Preview:</h3>
                            <Image src={URL.createObjectURL(file)}
                                   width={256}
                                   height={256}
                                   alt="preview"
                                   className="w-64 h-64 object-cover mx-auto"/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}