from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def desk():
    return render_template("index.html")


# def ask(word):#


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
