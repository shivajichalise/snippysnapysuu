import app from "./main"

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('listening')
})
