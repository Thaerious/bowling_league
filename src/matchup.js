
function spliceRandom(array) {
    const i = Math.floor(Math.random() * array.length);
    return array.splice(i, 1)[0];
}

function fillLanes(numLanes) {
    const lanes = [];
    for (let i = 0; i < numLanes; i++) {
        lanes.push(i + 1);
    }
    return lanes;
}

export function matchup(_teams, numLanes, previous) {
    let best = doMatchup(...arguments);
    let bestRepeats = countRepeatLanes(best, previous);

    for (let i = 0; i < 1000; i++) {
        if (bestRepeats === 0) return best;

        const next = doMatchup(...arguments);
        const nextRepeats = countRepeatLanes(next, previous);

        if (nextRepeats < bestRepeats) {
            best = next;
            bestRepeats = nextRepeats;
        }
    }

    return best;
}

function doMatchup(_teams, numLanes, previous) {
    const teams = [..._teams];
    const matches = [];

    const lanes = fillLanes(numLanes);

    while (teams.length > 0) {
        const match = {
            team1: spliceRandom(teams),
            team2: spliceRandom(teams),
            lane: spliceRandom(lanes)
        }

        matches.push(match);
    }
    return matches;
}

function countRepeatLanes(match1, match2) {
    if (!match2) return 0;
    const playerLanes = {}
    let count = 0;

    for (const match of match1) {
        playerLanes[match.team1.player1] = match.lane;
        playerLanes[match.team1.player2] = match.lane;
        playerLanes[match.team2.player1] = match.lane;
        playerLanes[match.team2.player2] = match.lane;
    }

    for (const match of match2) {
        if (playerLanes[match.team1.player1] === match.lane) count++;
        if (playerLanes[match.team1.player2] === match.lane) count++;
        if (playerLanes[match.team2.player1] === match.lane) count++;
        if (playerLanes[match.team2.player2] === match.lane) count++;
    }

    return count;
}

export { matchup as default, countRepeatLanes }