from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    print("hello")
    
    # Get Input Text from POST Request
   
    
    # if not input_text:
    #     print("hello")
        # Response to send if the input_text is undefined
       
        
        # Response to send if the input_text is not undefined
        
        # Send Response         
        
       
app.run(debug=True)



    