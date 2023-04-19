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


app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const currentDate = new Date()
    res.send(`<h3>Phonebook has info for ${persons.length} people</h3><h4>${currentDate}</h4>`)
})


app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const entry = persons.find(entry => entry.id == id)
    if(entry){
        res.json(entry)
        
    } else{
        res.status(404).end()
    }
})


app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(entry => entry.id !=id)
    res.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/persons', (req, res) => {
  const body = req.body
  
  if(!body.name){
    return res.status(400).json({error: 'Name is Missing'})
  }
  
  if(!body.number){//confirms if entry is a digit
    return res.status(418).json({error: 'Number is Missing'})
  }
  
  if(persons.some(entry => entry.name === body.name)){
    return res.status(409).json({error: 'Name Must Be Unique'})
  }
  
  let entry = {
    id: generateId(),
    name: body.name,
    number: body.number
  }
  
  persons.push(entry)//pushes entry, making it visible in object
  res.json(entry)
  
})


// app.get('/', () => {
  
// })

app.listen(PORT, () => {
    console.log(`Server Active on ${PORT}`)
})