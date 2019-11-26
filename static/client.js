const isClient = (typeof window === 'object')
const React = isClient ? window.React : require('react')

const App = () =>
  React.createElement('button', { onClick: () => alert('Hello 🦄') }, 'Click me')

if (isClient) {
  const ReactDOM = window.ReactDOM
  ReactDOM.hydrate(React.createElement(App), document.getElementById('app'), () =>
    console.log('Hydrated')
  )
} else {
  module.exports = { App }
}
