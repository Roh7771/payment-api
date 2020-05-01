const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
require("greenlock-express")
  .init({
    packageRoot: __dirname,

    maintainerEmail: "jon@example.com",

    // contact for security and critical bug notices
    configDir: "./greenlock.d",

    // whether or not to run at cloudscale
    cluster: false,
  })
  // Serves on 80 and 443
  // Get's SSL certificates magically!
  .serve(app);
