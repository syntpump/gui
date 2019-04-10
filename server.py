from flask import Flask, render_template
from flask import request, jsonify

app = Flask(__name__)


@app.route("/")
def desk():
    return render_template("index.html")


@app.route("/tagged/word/%string word%")
def req():
    data = request.args.get('word', {}, type=str)
    return jsonify(dict(results=str(data)))

# def ask(word):#


if __name__ == "__main__":
    app.run()
