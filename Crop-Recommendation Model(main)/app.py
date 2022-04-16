from flask import Flask, render_template, request
import pickle
import numpy as np
model= pickle.load(open('model.pkl', 'rb'))
app=Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict_crop():
    Nitrogen = request.form.get('Nitrogen')
    Phosphorus = request.form.get('Phosphorus')
    Potassium = request.form.get('Potassium')
    Temperature = request.form.get('Temperature')
    Humidity = request.form.get('Humidity')
    pH = request.form.get('pH')
    Rainfall = request.form.get('Rainfall')


    result = model.predict(np.array([Nitrogen,Phosphorus,Potassium,Temperature,Humidity,pH,Rainfall]).reshape(1,7))

    return render_template('index.html',result=result)

    return string(result)
if __name__=='__main__':
    app.run(debug=True)