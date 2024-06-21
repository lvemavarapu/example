import react, {useState} from "react";
import axios from 'axios';

function Quiz() {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    function handleMultipleChange(event) {
        setFiles([...event.target.files])
    }

    function handleMultipleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:3001/quiz';
        const formData = new FormData();
        files.forEach((file, index) => {
            formData.append(`file${index}`, file);
        });
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
                setUploadedFiles(response.data.files);
            })
            .catch((error) => {
                console.error("Error uploading files: ", error);
            });
    }
        return (
            <div>
                    <form onSubmit={handleMultipleSubmit}>
                    <h1>React Multi File Upload</h1>
                    <input type="file" multiple onChange={handleMultipleChange}/>
                    <button type="submit">Attach Files</button>
                </form>
                {uploadedFiles.map((file, index) => (
                    <img key={index} src={file} alt={`Uploaded content ${index}`}/>
                ))}
            </div>
        );

}
export default Quiz;