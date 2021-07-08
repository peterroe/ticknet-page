let express = require('express')
let path = require('path')
let compression = require('compression')
let app = express()
var history = require('connect-history-api-fallback');

app.use(compression())
app.use(history())
app.use(express.json({ limit: '2100000kb' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // 这里就过滤掉了请求头包含'x-no-compression'
        return false
    }

    return compression.filter(req, res)
}
// app.use(shouldCompress())

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "Token");
    res.header("Access-Control-Allow-Headers", "*");
    res.send('ok')
})
app.listen('5000', () => {
    console.log('5000 yes')
})