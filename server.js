const app = require("./src/app.js");

const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{
    console.log(`Server is listening in http://localhost:${PORT}`);
});