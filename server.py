from flask import Flask, render_template
from flask import request, jsonify

app = Flask(__name__)


@app.route("/")
def desk():
    return render_template("index.html")


@app.route("/tagged/word/%string word%")
def req():
    # return tagged word#
    data = request.args.get('word', {}, type=str)
    return jsonify(dict(results=str(data)))


@app.route("/tagged/sentence/")
def tag_sent():
    # return tagged sentence#
    return 1


@app.route("/sentence/deptree/")
def sent_dtree():
    # return tree of syntax dependencies#
    return 2


@app.route("/sentence/gramtree/")
def sent_gtree():
    # return grammatical tree#
    return 3


@app.route("/word/guess/")
def morph_r():
    # return morphology rules for word#
    return 4


if __name__ == "__main__":
    app.run()
