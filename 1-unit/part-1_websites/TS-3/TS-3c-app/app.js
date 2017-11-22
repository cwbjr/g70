const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const students = [{
    id: 1,
    firstName: "Alice",
    lastName: "Zephyr",
    homeTown: "Seattle"
},{
    id: 2,
    firstName: "Bob",
    lastName: "Yellow",
    homeTown: "Vancouver"
},{
    id: 3,
    firstName: "Claire",
    lastName: "Xylitol",
    homeTown: "Toledo"
},{
    id: 4,
    firstName: "Daniel",
    lastName: "Winston",
    homeTown: "Akron"
},{
    id: 5,
    firstName: "Edina",
    lastName: "Veritas",
    homeTown: "Wichita"
}];

app.get("/", (req, res) => {
    res.json({students});
});

function itemId(objectItems, id) {
    for (var i = 0; i < objectItems.length; i++) {
        if(objectItems[i].id == id) {
            return objectItems[i];
        }
    }
}

app.get("/:id", (req, res) => {
    var haveItem = itemId(students, req.params.id);
    if(!haveItem) {
        res.status = 404;
        res.json({error: {message: "No record found!"}
        });
    }
    res.json(haveItem);
});

app.listen(3000, () => {
    console.log("TS-3 Version-3 on localhost:3000");
});
