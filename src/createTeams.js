

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function spliceRandom(array) {
    return array.splice(getRandomInt(array.length), 1)[0];
}

function getRandom(array) {
    return array[getRandomInt(array.length)];
}

export default function createTeams(_names, _buy = []) {
    const names = [..._names];
    const buy = [..._buy];

    const numTeams = Math.trunc(names.length / 4) * 2;    
    const teams = [];
    for (let i = 0; i < numTeams; i++) {
        teams[i] = {player1: "", player2: ""}
    }

    let countAssigned = 0;

    while (buy.length > 0) {
        const team = getRandom(teams);
        if (team.player1 !== "" && team.player2 !== "") continue;

        const player = spliceRandom(buy);
        if (team.player1 == "") team.player1 = player
        else team.player2 = player;

        names.splice(names.indexOf(player), 1);
        countAssigned++;
    }

    while (countAssigned < teams.length * 2) {
        const team = getRandom(teams);
        if (team.player1 !== "" && team.player2 !== "") continue;

        if (team.player1 == "") team.player1 = spliceRandom(names);
        else team.player2 = spliceRandom(names);    

        countAssigned++;
    }    

    return {
        teams: teams,
        buy : names
    };
}