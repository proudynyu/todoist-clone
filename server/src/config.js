const assert = require('assert');
require('dotenv').config();

const {
    HOST,
    PORT,
    HOST_URL,
    REACT
} = process.env;

assert(HOST, 'Host is required');
assert(PORT, 'Port is required');
assert(HOST_URL, 'Host_url is required');
assert(REACT, 'React is required');

module.exports = {
    host: HOST,
    port: PORT,
    url: HOST_URL,
    whitelist: REACT,
}
