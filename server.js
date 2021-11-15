const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000

app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			defaultSrc: ["'self'"],
			objectSrc: ["'none'"],
			scriptSrc: ["'self'", "unpkg.com", "polyfill.io"],
			styleSrc: ["'self'", "https: 'unsafe-inline'"],
			upgradeInsecureRequests: [],
            imgSrc: ["'self'", "data:"],
		},
	},
}))

app.use(cors())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () =>{
    console.log("server running on PORT: " + PORT)
})