let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

let teamOneBet = 0
let teamTwoBet = 0

let teamOne = [{
    totalSkill: 0,
}]

let teamTwo = [{
    totalSkill: 0,
}]

function draftPlayers() {
    console.log("Drafting Players")
    assignTeamToPlayers()
    drawTeamOne()
    drawTeamTwo()
}

function assignTeamToPlayers() {
    for (let i = 0; i < players.length; i++) {
        let teamNumber = Math.ceil(Math.random() * 2)
        players[i].teamNumber = teamNumber
        console.log(players[i])
    }
}

function drawTeamOne() {
    //run throught the players array and find which players have a new team name of 1
    //inject those names into the div with the id of teamOnePlayers
    const teamOne = players.filter((player) => player.teamNumber == 1)

    let teamOneEmojis = ''

    teamOne.forEach((person) => teamOneEmojis += `<span class="fs-2">${person.emoji}</span>`)

    const teamOneElem = document.getElementById("teamOnePlayers")
    teamOneElem.innerHTML = teamOneEmojis
}

function drawTeamTwo() {
    const teamTwo = players.filter((player) => player.teamNumber == 2)
    let teamTwoEmojis = ''
    teamTwo.forEach((person) => teamTwoEmojis += `<span class="fs-2">${person.emoji}</span>`)
    const teamTwoElem = document.getElementById('teamTwoPlayers')
    teamTwoElem.innerHTML = teamTwoEmojis
}

function drawBank() {
    const bankElem = document.getElementById('Bank')
    bankElem.innerHTML = bank
    checkBank()
}
function checkBank() {
    if (bank === 0) {
        window.alert("You Have Gone Broke, The Game will Now Reset")
        location.reload()
    }
}

function placeBetTeamOne(bet) {
    let teamOneTotalSkill = 0
    let teamTwoTotalSkill = 0
    teamOneBet += bet
    console.log(`This is Team One's Bet: ${teamOneBet}`)
    const teamOne = players.filter((player) => player.teamNumber == 1)
    for (let i = 0; i < teamOne.length; i++) {
        teamOneTotalSkill += teamOne[i].skill
    }
    const teamTwo = players.filter((player) => player.teamNumber == 2)
    for (let i = 0; i < teamTwo.length; i++) {
        teamTwoTotalSkill += teamTwo[i].skill
    }
    checkTotalSkillTeamOne(teamOneTotalSkill, teamTwoTotalSkill, bet)
    console.log(`This is team one's total skill: ${teamOneTotalSkill}`)
    console.log(`This is team two's total skill: ${teamTwoTotalSkill}`)
    drawBank()
    draftPlayers()
}

function placeBetTeamTwo(bet) {
    let teamOneTotalSkill = 0
    let teamTwoTotalSkill = 0
    teamTwoBet += bet
    const teamOne = players.filter((player) => player.teamNumber == 1)
    for (let i = 0; i < teamOne.length; i++) {
        teamOneTotalSkill += teamOne[i].skill
    }
    console.log(`This is Team Two's Bet: ${teamTwoBet}`)
    const teamTwo = players.filter((player) => player.teamNumber == 2)
    for (let i = 0; i < teamTwo.length; i++) {
        teamTwoTotalSkill += teamTwo[i].skill
    }
    checkTotalSkillTeamTwo(teamTwoTotalSkill, teamOneTotalSkill, bet)
    console.log(`This is team one's total skill: ${teamOneTotalSkill}`)
    console.log(`This is team two's total skill: ${teamTwoTotalSkill}`)
    drawBank()
    draftPlayers()
}

function checkTotalSkillTeamOne(teamOneSkill, teamTwoSkill, bet) {
    if (teamOneSkill > teamTwoSkill) {
        bank += bet
        window.alert(`You won ${bet} Dollars!`)
    } else {
        bank -= bet
        window.alert(`You lost ${bet} Dollars!`)

    }
    console.log(`This is the money in the bank: ${bank}`)
}

function checkTotalSkillTeamTwo(teamTwoSkill, teamOneSkill, bet) {
    if (teamTwoSkill > teamOneSkill) {
        bank += bet
        window.alert(`You won ${bet} Dollars!`)

    } else {
        bank -= bet
        window.alert(`You lost ${bet} Dollars!`)
    }
    console.log(`This is the money in the bank: ${bank}`)

}




//ANCHOR Auto Run Functions

draftPlayers()