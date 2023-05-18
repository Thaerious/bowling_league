// True if there are no repeat partners
export default function validify(round1, round2) {
    const partners = {};
    for (const element of round1) {
        partners[element.player1] = element.player2;
        partners[element.player2] = element.player1;
    }

    for (const element of round2) {
        if (partners[element.player1] === element.player2) {
            return false;
        }
    }

    return true;
}
