from flask import Flask, request, jsonify
from flask_cors import CORS
# import joblib
# import numpy as np
# from PIL import Image
# from io import BytesIO

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['GET'])
def predict():
    return jsonify({
        'predictions': [
            {
                'label': 'Man',
                'probability': 0.83333
            },
            {
                'label': 'Woman',
                'probability': 0.16667
            }
        ]
    })


if __name__ == '__main__':
    app.run(debug=True, port=9009) #Running on http://127.0.0.1:9009