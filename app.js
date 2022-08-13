import express from 'express'
import path from 'path'

const port = process.env.PORT ?? 3000
const app = express()
const __dirname = path.resolve()


app.use(express.static(path.resolve(__dirname, 'src')))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})