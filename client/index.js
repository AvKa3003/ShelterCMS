import express from "express"
import { engine } from "express-handlebars"
const app = express()
const PORT = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('static'))

app.get('/', (req, res) => {
  console.log(req.url);
  res.render('index', {layout: false})
})

app.get('/pets/:page', (req, res) => {
  console.log(req.url);
  res.render('pets', {layout: false})
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
})