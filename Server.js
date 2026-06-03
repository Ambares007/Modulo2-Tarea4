------------------------------------------------------------------------------
Opción 1
------------------------------------------------------------------------------
const express = require('express')
const app = express()
const Puerto = 3001

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente')
})

app.listen(Puerto, () => {
  console.log('Servidor ejecutándose en puerto', + Puerto);
  console.log("Puedes abrir http://localhost:" + Puerto+ " en el navegador.")
})

------------------------------------------------------------------------------
opción 2
------------------------------------------------------------------------------
const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`)
})
