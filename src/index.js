import createTeams from "./createTeams.js";
import matchup, { countRepeatLanes } from "./matchup.js";
import validify from "./validify.js";

const names = ["Prince Thornton",
"Ayla Moss",
"Leonardo Baker",
"Arron Coleman",
"Kurtis Prince",
"Mathew Ochoa",
"Emil Mayer",
"Lily-Mae Winter",
"Carys Sparks",
"Luke Kent",
"Otis Hodges",
"Loui Zimmerman",
"Sulaiman Dillon",
"Hannah Foster",
"Rufus Sims",
"Leyla Ortega",
"Bonnie Ware",
"Richard Ryan",
"Sophie Jensen",
"Martha Day",
"Cara Padilla",
"Liliana Nichols",
"Faisal Hampton",
"Zaara Sheppard",
"Lyndon Vaughn",
"Edmund Romero",
"Colin Malone",
"Joao Kramer",
"Darcey Lang",
"Ishaan Rivers",
"Abby Wong",
"Lexie Sloan",];

const LANE_COUNT = 8;

const round1 = createTeams(names)
let round2 = createTeams(names, round1.buy)

let isValid = validify(round1.teams, round2.teams);
while (!isValid) {
    round2 = createTeams(names, round1.buy)
    isValid = validify(round1.teams, round2.teams);
    console.log(isValid);
}

console.log(round1);
console.log(round2);
console.log(isValid);

console.log("ROUND 1");
const match1 = matchup(round1.teams, LANE_COUNT);
console.log(match1);
console.log(round1.buy);
console.log("\nROUND 2");
const match2 = matchup(round2.teams, LANE_COUNT, match1);
console.log(match2);
console.log(round2.buy);

console.log("Repeat Lanes", countRepeatLanes(match1, match2));

