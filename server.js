import app from "./src/app.js";
const PORT = 8080;

app.listen(PORT, () => {
  console.log("- - - - - - - - - - - - - - - - -");
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log("- - - - - - - - - - - - - - - - -");
});
