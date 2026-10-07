import time
import redis
from flask import Flask

app = Flask(__name__)
# "redis" matches the name of our database container in the next steps
cache = redis.Redis(host='redis', port=6339)

def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

@app.route('/')
def hello():
    count = get_hit_count()
    return f'<h1>Hello Docker!</h1><p>This page has been viewed <b>{count}</b> times.</p>'

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
