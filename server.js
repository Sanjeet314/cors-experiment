const express = require("express");
const path = require("path");
const helmet = require("helmet");
const app = express();
const port = 8080;

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      //scriptSrc: ["'self'", "http://localhost:3000/"],
    },
  })
);

app.use((req, res, next) => {
  res.set("Cross-Origin-Resource-Policy", "same-site, http://localhost:3000");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
