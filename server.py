import flask

app = flask.Flask(__name__)


@app.route("/")
def desk():
    return flask.render_template("index.html")


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


if __name__ == "__main__":
    app.run()
