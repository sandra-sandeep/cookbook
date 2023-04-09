from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == "admin" and password == "secret_pass":
        return jsonify({"status": "success", "message": "Hello, admin"})
    else:
        return jsonify({"status": "error", "message": "Invalid credentials"})

if __name__ == "__main__":
    app.run(debug=True)
