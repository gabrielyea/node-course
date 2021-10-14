import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'

const { urlencoded, json } = bp

const db = {
  todos: [],
}

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev'))

app.get('/todo', (req, res) => {
  res.json({ data: db.todos })
})

app.get('/todo/:id', (req, res) => {
  const todo = db.todos.find((t) => t.id === +req.params.id) 
  res.json({ data: db.todos })
})

app.post('/todo', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text }
  db.todos.push(newTodo)

  res.status(201)
  res.json({ data: newTodo })
})

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})
