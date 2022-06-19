const app = require("./app");
const PORT = 3011;

app.listen(PORT, () => {
  console.info(`sso-server listening on port ${PORT}`);
});
