const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const cohort = [{
    id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    numberStudents: 28
},{
    id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    numberStudents: 24
},{
    id: 3,
    cohortName: "17-02-WD-PX",
    cohortCode: "g109",
    numberStudents: 30
},{
    id: 4,
    cohortName: "17-03-WD-BD",
    cohortCode: "g110",
    numberStudents: 29
}];

app.get("/", (req, res) => {
    res.json({cohort});
});

function itemId(objectItems, id) {
    for (var i = 0; i < objectItems.length; i++) {
        if(objectItems[i].id == id) {
            return objectItems[i];
        }
    }
}

app.get("/:id", (req, res) => {
    var haveItem = itemId(cohort, req.params.id);
    if(!haveItem) {
        res.status = 404;
        res.json({error: {message: "No record found!"}
        });
    }
    res.json(haveItem);
});

app.listen(3000, () => {
    console.log("TS-3 Version-1 on localhost:3000");
});
