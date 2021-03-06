from pysyntext.predefinator import Predefinator

import flask
import json


print("Initializing classes...")

predef = Predefinator(open("config.json"))

db = predef.inited("DB")

morphRecogn = predef.inited(
    "MorphologyRecognizer",
    collection=db.cli.get_collection
)

ctxProc = predef.inited(
    "ContextualProcessor",
    recognizer=morphRecogn,
    rulescoll=db.cli.get_collection
)

cyk = predef.inited(
    "CYKAnalyzer",
    ctx=ctxProc,
    collection=db.cli.get_collection
)

app = flask.Flask(__name__)
app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True


@app.route("/")
def desk():
    return flask.render_template("home_page.html.j2")


@app.route("/process_word")
def disp1():
    return flask.render_template("process_word.html.j2")


@app.route("/tagged_sentence")
def disp2():
    return flask.render_template("tagged_sentence.html.j2")


@app.route("/prod_grammar")
def disp3():
    return flask.render_template("prod_grammar.html.j2")


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


# Return tagged word
@app.route("/tagged/word/<string:word>")
def req(word=None):
    result = morphRecogn.recognize(word, withApplier=True, showDB=True)
    return json.dumps(
        {
            "bestMatch": result[0],
            "allMatches": result[1]
        },
        default=str
    )


@app.route("/tagged/sentence/<string:sentence>")
def tag_sent(sentence=None):
    return json.dumps(
        ctxProc.tagged(sentence),
        default=str
    )
    return 1


@app.route("/sentence/deptree/<string:sentence>")
def sent_dtree(sentence=None):
    # return tree of syntax dependencies
    return 2


@app.route("/sentence/gramtree/<string:sentence>")
def sent_gtree(sentence=None):
    return json.dumps(
        cyk.getGrammar(sentence))


@app.route("/word/guess/<string:word>")
def morph_r(word=None):
    # return morphology rules for word
    return 4


if __name__ == "__main__":
    app.run()
