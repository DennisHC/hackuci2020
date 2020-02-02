from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_url_path='')

app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True

@app.route('/') # localhost:5000/
def index():
    return render_template('loginScreen.html')

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

if __name__ == '__main__':
    app.run()