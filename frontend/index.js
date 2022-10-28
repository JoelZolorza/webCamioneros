const express = require('express');
//const cors = require('cors')
const app = express();
const port = 8000;
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router)
//app.use(cors())

app.use('/css', express.static(`${__dirname}/static/css`));
app.use('/js', express.static(`${__dirname}/static/js`));
app.use('/img', express.static(`${__dirname}/static/img`));

app.listen(port, () => {
    console.log(`Front listo en el puerto ${port}`);
})


