const express = require ('express');
const search = require ('./routes/search.js');
const app = express ();
const cors = require ('cors');

//middlewares
app.use(express.json())
app.use(cors())

//routes 
app.use('/api', search)

app.listen (4000, () => {
    console.log('The app is running on port 4000')
})
