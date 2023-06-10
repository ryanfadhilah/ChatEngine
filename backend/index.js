// npm run start

// https://blog.chatengine.io/fullstack-chat/nodejs-reactjs

const express = require("express"); // run HTTP server
const cors = require("cors"); // call server from any other origin
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));



// https://rest.chatengine.io/
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: req.body.username, secret: username, first_name: username },
            { headers: { "private-key": "f0319e37-e219-4302-bdca-76dae9b50ed8" } }
        )
        return res.status(r.status).json(r.data)

    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
    // return res.json({ username: username, secret: "sha256..." });
    // f0319e37-e219-4302-bdca-76dae9b50ed8
});

app.listen(3001);