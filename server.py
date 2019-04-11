import flask

app = flask.Flask(__name__)
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True


@app.route("/")
def desk():
    return flask.render_template("index.html.j2")


@app.route("/js/<string:script>")
def get_script(script):
    return flask.send_file(
        "js/" + script,
        mimetype="application/javascript"
    )


@app.route("/css/<string:style>")
def get_style(style):
    return flask.send_file(
        "css/" + style,
        mimetype="text/css"
    )


@app.route("/tagged/word/<string:word>")
def req(word=None):
    # return tagged word#
    data = request.args.get('word', {}, type=str)
    return jsonify(dict(results=str(data)))


@app.route("/tagged/sentence/<string:sentence>")
def tag_sent(sentence=None):
    # return tagged sentence
    return 1


@app.route("/sentence/deptree/<string:sentence>")
def sent_dtree(sentence=None):
    # return tree of syntax dependencies
    return 2


@app.route("/sentence/gramtree/<string:sentence>")
def sent_gtree(sentence=None):
    # return grammatical tree
    return 3


@app.route("/word/guess/<string:word>")
def morph_r(word=None):
    # return morphology rules for word
    return 4


if __name__ == "__main__":
    app.run()
