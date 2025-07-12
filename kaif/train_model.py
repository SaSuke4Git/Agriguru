import joblib
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression

# Training data
training_data = [
    ("What is the weather in Punjab?", "weather"),
    ("Tell me weather for Tamil Nadu", "weather"),
    ("What to grow in July in Bihar?", "crop_advice"),
    ("Suggest crop for August", "crop_advice"),
    ("hi", "greet"),
    ("hello", "greet"),
    ("good morning", "greet"),
    ("Best crop for Kharif season?", "crop_advice"),
    ("Which fertilizer to use for rice?", "fertilizer_advice"),
    ("How to control pests in wheat?", "pest_control"),
    ("Rainfall forecast for Maharashtra?", "weather"),
    ("What is MSP for wheat?", "market_info"),
    ("How to improve soil fertility?", "soil_advice"),
    ("Which crop is suitable for sandy soil?", "crop_advice"),
    ("How to irrigate sugarcane?", "irrigation_advice"),
    ("Government schemes for farmers?", "scheme_info"),
    ("How to prevent crop diseases?", "pest_control"),
    ("Best time to sow cotton?", "crop_advice"),
    ("Where to sell vegetables in Delhi?", "market_info"),
    ("Organic farming tips?", "organic_farming"),
    ("How to store harvested grains?", "storage_advice"),
    ("Weather update for Uttar Pradesh?", "weather"),
    ("Which pesticide is safe for vegetables?", "pest_control"),
    ("How to increase yield of maize?", "crop_advice"),
    ("Subsidy for drip irrigation?", "scheme_info"),
    ("How to apply for PM-KISAN scheme?", "scheme_info"),
    ("What is the best irrigation method for paddy?", "irrigation_advice"),
    ("How to test soil quality?", "soil_advice"),
    ("Which crop is profitable in Rabi season?", "crop_advice"),
    ("How to control weeds in sugarcane?", "pest_control"),
    ("Where to buy certified seeds?", "market_info"),
    ("How to get crop insurance?", "scheme_info"),
    ("What is the minimum support price for rice?", "market_info"),
    ("How to use organic manure?", "organic_farming"),
    ("Best practices for rainfed farming?", "crop_advice"),
    ("How to prevent fungal diseases in crops?", "pest_control"),
    ("How to market farm produce online?", "market_info"),
    ("How to conserve water in agriculture?", "irrigation_advice"),
    ("What is the best fertilizer for tomatoes?", "fertilizer_advice"),
    ("How to store onions for longer shelf life?", "storage_advice"),
    ("How to get government subsidy for tractors?", "scheme_info"),
    ("What is the weather forecast for Gujarat?", "weather"),
    ("How to improve yield of pulses?", "crop_advice"),
    ("How to control aphids in mustard?", "pest_control"),
    ("How to start organic farming in India?", "organic_farming"),
]

X = [x[0] for x in training_data]
y = [x[1] for x in training_data]

# Pipeline
model = Pipeline([
    ('vectorizer', CountVectorizer()),
    ('classifier', LogisticRegression())
])

model.fit(X, y)

# Save model
joblib.dump(model, "chatbot_model.pkl")
print("Model trained and saved.")