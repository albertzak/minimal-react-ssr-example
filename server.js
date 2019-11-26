const express = require('express')
const React = require('react')
const ReactDOM = require('react-dom/server')
const { App } = require('./static/client.js')
const port = process.env.PORT || 3000
const app = express()

const html = () => `
<html>
  <head>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div id="app">${ReactDOM.renderToString(React.createElement(App))}</div>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="/client.js"></script>
  </body>
</html>
`

app.get('/', (req, res) => {
  res.type('text/html')
  res.end(html())
})

app.use(express.static('static'))

app.listen(port, (err) => {
  if (err) { throw err }
  console.log('Listening on port', port)
})
