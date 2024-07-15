from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

responses = {
    "hi": "Hello! Welcome to my portfolio website.",
    "who are you?": "I'm a full-stack web developer specializing in Web3 and other modern web technologies.",
    "projects": "You can check out my projects in the 'Projects' section of my portfolio.",
    "contact": "Feel free to reach out to me via the 'Contact' section.",
    "bye": "Goodbye! Have a great day!"
}

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '').lower()
    response = responses.get(message, "I'm not sure about that. Can you please check my portfolio for more information?")
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
