const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:admin2022@cluster0.d7lpm.mongodb.net/assets?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Mongodb Connection Successful`);
  })
  .catch((e) => {
    console.log(e);
  });
