const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const staff = [{
    id: 1,
    fullName: "Kyle Coberly",
    title: "Faculty Director",
    numberDogs: 0
},{
    id: 2,
    fullName: "Danny Fritz",
    title: "Lead Instructor",
    numberDogs: 0
},{
    id: 3,
    fullName: "CJ Reynolds",
    title: "Lead Instructor",
    numberDogs: 0
},{
    id: 4,
    fullName: "Brooks Patton",
    title: "Lead Instructor",
    numberDogs: 0
},{
    id: 5,
    fullName: "Roberto Ortega",
    title: "Lead Instructor",
    numberDogs: 1
},{
    id: 6,
    fullName: "Chad Drummond",
    title: "Instructor",
    numberDogs: 0
},{
    id: 7,
    fullName: "Kim Schlesinger",
    title: "Instructor",
    numberDogs: 0
},{
    id: 8,
    fullName: "Peter Ostiguy",
    title: "Associate Instructor",
    numberDogs: 1
},{
    id: 9,
    fullName: "Cass Torske",
    title: "Resident",
    numberDogs: 1
},{
    id: 10,
    fullName: "Matt Winzer",
    title: "Resident",
    numberDogs: 2
},{
    id: 11,
    fullName: "Aaron Goodman",
    title: "Resident",
    numberDogs: 0
},{
    id: 12,
    fullName: "Michelle Bergquist",
    title: "Resident",
    numberDogs: 1
}];

app.get("/", (req, res) => {
    res.json({staff});
});

function itemId(objectItems, id) {
    for (var i = 0; i < objectItems.length; i++) {
        if(objectItems[i].id == id) {
            return objectItems[i];
        }
    }
}

app.get("/:id", (req, res) => {
    var haveItem = itemId(staff, req.params.id);
    if(!haveItem) {
        res.status = 404;
        res.json({error: {message: "No record found!"}
        });
    }
    res.json(haveItem);
});

app.listen(3000, () => {
    console.log("TS-3 Version-2 on localhost:3000");
});
