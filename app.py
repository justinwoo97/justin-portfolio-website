import datetime
import io
import json
import os

from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/')
def index():
    age = int((datetime.date.today() - datetime.date(1995, 4, 22)).days / 365)
    return render_template('home.html', age=age)


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404





if __name__ == "__main__":
    print("running py app")
    app.run(host="127.0.0.1", port=5000, debug=True)
