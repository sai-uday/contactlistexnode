const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv").config();
const connectDb=require("./config/dbconnect")
app.use(express.json());


connectDb();
// router.route("/api/contacts")
//     .get((req, res) => {
//         res.send("get all contacts");
//     })
//     .post((req, res) => {
//         res.send(`from post the data is:${JSON.stringify(req.body)}`)
//     });
// router.route("/api/contacts/:id").get((req,res)=>{
//     res.send(`you want id ${req.params.id}`)
// })
// router.route("/api/contacts/:id").put((req,res)=>{
//     res.send(`you want id ${req.params.id} your body ${JSON.stringify(req.body)}`)
// })
// router.route("/api/contacts/:id").delete((req,res)=>{
//     res.send(`you want id ${req.params.id}`)
// })
app.use("/", require("./Routes/UserContacts"));

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});
