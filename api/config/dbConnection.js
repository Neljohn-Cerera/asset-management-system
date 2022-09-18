const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb Connection Successful`);
  })
  .catch((e) => {
    console.log(e);
  });
