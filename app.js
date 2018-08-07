import express from 'express'
const app = express()
console.log(process.env.NODE_ENV)
app.listen(4000, () => console.log('server start on port 4000'))