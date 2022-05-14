const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`app is running at ${port}`);
});

mongoose
	// .connect("mongodb://localhost:27017/myapp", {
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("DB CONNECTED");
	})
	.catch(() => {
		console.log("DB ERROR");
		console.log("DB ERROR");
	});
