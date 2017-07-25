from flask import Flask, render_template, request
import sql_queries


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/registration", methods=['POST'])
def registration():
    username = request.form.get('username')
    password = request.form.get('password')
    sql_queries.save_user(username, password)
    return "comp"


def main():
    app.run(debug = True)

if __name__ == '__main__':
    main()
