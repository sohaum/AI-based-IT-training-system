import React,{useEffect, useState} from 'react'
import axios from 'axios';

export default function Home() {
    const [predictions, setPredictions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const fetchPredictions = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:9009/predict');
                setPredictions(response.data.predictions);
            } catch (error) {
                console.error('Error fetching predictions:', error);
            } finally {
                setLoading(false);
            }
        };

        
        fetchPredictions();
    }, []);

    return (
        <div>
            <h1>Image Classification</h1>
            {loading ? (
                <p>Loading predictions...</p>
            ) : (
                <div>
                    <h2>Predictions:</h2>
                    <ul>
                        {predictions.map((prediction, index) => (
                            <li key={index}>
                                <strong>Label:</strong> {prediction.label}
                                <br />
                                <strong>Probability:</strong> {prediction.probability}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}



// -----------------------------------------------------------------------------------

// import { useState } from 'react';
// import axios from 'axios';

// export default function Home() {
//     const [file, setFile] = useState(null);
//     const [predictions, setPredictions] = useState([]);

//     const handleFileUpload = (event) => {
//         const selectedFile = event.target.files[0];
//         setFile(selectedFile);
//     };

//     const handlePredict = async () => {
//         if (!file) {
//             alert('Please select an image first.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('image', file);

//         try {
//             const response = await axios.post('/predict', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setPredictions(response.data.predictions);
//         } catch (error) {
//             console.error('Error making prediction request:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Image Classification</h1>
//             <input type="file" accept="image/*" onChange={handleFileUpload} />
//             <button onClick={handlePredict}>Predict</button>
//             <div>
//                 <h2>Predictions:</h2>
//                 <ul>
//                     {predictions.map((pred, index) => (
//                         <li key={index}>{pred}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }
