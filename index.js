/*3.1: Phonebook backend step1

Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons. */ 

const http = require('http')
const express = require('express')
// const app = express()

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(persons))
})

// app.get('/info', (request, response) => {
//   const currentDate = new Date()
//   response.send(`<h3>Phonebook has info for ${persons.length} people</h3><h3>${currentDate}</h3>`)
// })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
