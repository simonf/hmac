import base64
import hmac
import binascii
from hashlib import sha256

API_SECRET_KEY = "simonrocks"
data = "abcdefghijklmnopqrstuvwxyz"

def verify_webhook():
    dig = hmac.new(
        bytes(API_SECRET_KEY),
        msg=bytes(data),
        digestmod=sha256
        )
    print(base64.b64encode(dig.digest()))
verify_webhook()
