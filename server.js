const express = require("express");
const morgan = require("morgan");

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public"));
app.use('/public/images/', express.static('./public/images'));


require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`==> Server listening at http://localhost:${PORT}/`);
});