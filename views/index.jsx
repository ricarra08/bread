const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <ul>
          {
            breads.map((breads, index)=> {
              return (
              <li key={index}>
                <a href={`/breads/${index}`}>
                  {breads.name}
                </a>
              </li>
              )
            })
          }
        </ul>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div> 
      </Default>
    )
}

module.exports = Index
