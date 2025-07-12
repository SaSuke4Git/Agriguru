from flask import Flask, request, jsonify
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load("chatbot_model.pkl")

responses = {
    "greet": "Hello! How can I help you with agriculture?",
    "weather": "Please tell me your state name to check the weather.",
    "crop_advice": "In July, you can grow paddy, maize, or soybean. Let me know your location for more specific advice.",
    "fertilizer_advice": "For rice, use urea and DAP. For tomatoes, use NPK 12:32:16. Always follow recommended dosages.",
    "pest_control": "For wheat pests, use recommended pesticides and crop rotation. For aphids in mustard, try neem oil spray.",
    "market_info": "You can sell your produce at local mandis or online platforms like eNAM. Check MSP rates for your crop.",
    "soil_advice": "Test your soil regularly for nutrients. Add organic manure to improve fertility.",
    "irrigation_advice": "Drip irrigation is best for water conservation. Flood irrigation is common for paddy.",
    "scheme_info": "You can apply for PM-KISAN and other government schemes at your nearest agriculture office or online.",
    "organic_farming": "Use compost, green manure, and biofertilizers for organic farming. Avoid chemical pesticides.",
    "storage_advice": "Store grains in dry, cool places. Use airtight containers to prevent pest infestation.","crop_insurance": "You can get crop insurance through Pradhan Mantri Fasal Bima Yojana. Visit your local agriculture office for details.",
    "tractor_subsidy": "Government provides subsidies for tractors. Check with your state agriculture department for eligibility and application process.",
    "rainfed_practices": "For rainfed farming, use drought-resistant crops and conserve soil moisture with mulching and bunding.",
    "online_marketing": "You can market farm produce online using platforms like eNAM, AgriBazaar, and local WhatsApp groups.",
    "soil_testing": "Soil testing labs are available in most districts. Collect samples and submit for analysis to get fertilizer recommendations.",
    "crop_rotation": "Crop rotation helps improve soil health and control pests. Alternate cereals with legumes for best results.",
    "best_fertilizer": "The best fertilizer depends on your crop and soil test. Use balanced NPK and supplement with organic manure.",
    "government_alerts": "Check local agriculture department websites or WhatsApp groups for weather and pest alerts.",
    "contact_expert": "For expert advice, contact your local Krishi Vigyan Kendra or agriculture extension officer.",
}

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "")
    intent = model.predict([message])[0]
    response = responses.get(intent, "Sorry, I didn't understand that.")
    return jsonify({"reply": response})

if __name__ == "__main__":
    app.run(debug=True)