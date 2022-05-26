
const express = require("express");

const app = express();

const mongoose = require ("mongoose");

const UserModel = require ("./models/users")

const ContactModel = require ("./models/contact")

const annonceModel = require("./models/annonces")

const cors = require ("cors"); 

// app.use(
//     cors({
//       origin: ["http://localhost:3000"],
//       methods: ["GET", "POST"],
//       credentials: true,
//     })
//   );

app.use(express.json());

// app.use(cors());

    
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );


app.listen(3001,() => {
    console.log("server run perfectly")
})

// if connect 

var db = mongoose.connection; 

// db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
// db.once('open', function (){
//     console.log("Connexion à la base OK"); 
// }); 

//   end test bdd connect

// mongoose.connect("mongodb+srv://medbach:medbach123123@cluster0.ok66q.mongodb.net/meltem?retryWrites=true&w=majority")
mongoose.connect('mongodb+srv://medbach:medbach123123@cluster0.ok66q.mongodb.net/meltem?retryWrites=true&w=majority', function(err) {
  if (err) {
    //    throw err;
       console.log("errrrrrrrrrrrrrrrrrr");
    } else { 
        console.log("okkkkkkkkkkkkkok");
    }
});







const authRoutes = require ("./Routes/AuthRoutes");

const cookieParser = require ("cookie-parser");










app.get("/getannonces", (req ,res) => {
    annonceModel.find( {}, (err,result) => {
        if(err){
            res.json(err)
        }
        else {
            res.json(result)

        }
    })
})




app.get("/getdtannonces/:id",(req,res) => {

    annonceModel.findById(req.params.id, function (err, result) {
        console.log(req.params.id);
        if (err){
            console.log
            res.json(err)
        }
        else{
            res.json(result)
        }
    });

})

app.get("/search/ville/:ville",(req,res) => {

    annonceModel.find({ville: req.params.ville}, function (err, result) {
        console.log(req.params.ville);
        if (err){
            console.log
            res.json(err)
        }
        else{
            res.json(result)
        }
    });

})



app.get("/getUsers", (req ,res) => {
    UserModel.find( {}, (err,result) => {
        if(err){
            res.json(err)
        }
        else {
            res.json(result)

        }
    })
})



app.post("/createUser", async (req ,res) => {

    const user = req.body

    const newUser = new UserModel(user)

    await newUser.save();

    res.json(user)
})



app.post("/createContact", async (req ,res) => {

    const contact = req.body

    const newContact = new ContactModel(contact)

    await newContact.save();

    res.json(contact);
})




// app.use(
//     cors({
//       origin: ["http://localhost:3000"],
//       methods: ["GET", "POST"],
//       credentials: true,
//     })
//   );
app.use(cookieParser());


app.use("/", authRoutes);