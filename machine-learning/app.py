from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)

# Enable CORS
CORS(app)

# Load the model and label encoder
with open('crop_recommendation_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('label_encoder.pkl', 'rb') as encoder_file:
    label_encoder = pickle.load(encoder_file)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the POST request
        data = request.json

        # Extract features from the request
        features = [
            data.get('N'),
            data.get('P'),
            data.get('K'),
            data.get('temperature'),
            data.get('humidity'),
            data.get('ph'),
            data.get('rainfall'),
        ]

        # Ensure features are in the correct format
        features = np.array(features).reshape(1, -1)

        # Predict using the loaded model
        prediction = model.predict(features)

        # Convert numeric prediction back to the crop label
        crop_name = label_encoder.inverse_transform(prediction)[0]

        # Return the prediction as a JSON response
        return jsonify({'predicted_crop': crop_name})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
