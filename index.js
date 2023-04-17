/*3.1: Phonebook backend step1

Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3001/api/persons. */ 

const express = require('express')
const app = express()
const morgan = require('morgan')
 const PORT = 3005
 
 app.use(express.json())//helps parse the Json.
 app.use(morgan('tiny'))
 
 morgan.token('object', function(req, res){
   return `${JSON.stringify(req.body)}`
  
 })
 app.use(morgan(':object'))



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