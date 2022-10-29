const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.json({ "message": "hello root" }) });
app.get('/index', (req, res) => { res.json({ "message": "hello world" }) });

app.listen(8000, () => { console.log("server id running on port '8000' "); })
