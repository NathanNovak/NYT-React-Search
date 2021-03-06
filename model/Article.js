const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	id: {type: String, required: true},
	topic: {type: String, required: true},
	// date: {type: String, required: true},
	web: {type: String, required: true},
	image: {type: String}
	// date_retrived: {type: Date}
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;