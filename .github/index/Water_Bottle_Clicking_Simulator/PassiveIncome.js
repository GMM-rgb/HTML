// PassiveIncome.js
// Java Script function for Passive Income handling

function initPassiveIncome(game) {
    const savedGames = JSON.parse(localStorage.getItem("savedGames")) || [];
    const savedGame = savedGames.find(g => g.name === game.name) || {};
    const passiveIncome = savedGame.passiveIncome || {
        level: 0,
        rate: 10,
        cost: 100
    };

    game.passiveIncome = passiveIncome;

    // Update the button text
    updatePassiveIncomeButton(game);

    // Start the passive income generation
    setInterval(() => generatePassiveIncome(game), 1000);
}

function generatePassiveIncome(game) {
    if (game.passiveIncome.level > 0) {
        game.count += game.passiveIncome.rate * game.passiveIncome.level;
        saveGame(game);
        document.getElementById('water-bottle-count').textContent = `Water Bottles: ${game.count}`;
    }
}

function upgradePassiveIncome(game) {
    if (game.count >= game.passiveIncome.cost) {
        game.count -= game.passiveIncome.cost;
        game.passiveIncome.level += 1;
        game.passiveIncome.cost = Math.floor(game.passiveIncome.cost +100); // Increase the cost exponentially
        saveGame(game);

        // Update the button text
        updatePassiveIncomeButton(game);
        //alert(`Passive Income upgraded to level ${game.passiveIncome.level}!`);
    } else {
        alert(`Not enough water bottles! You need ${game.passiveIncome.cost} water bottles to upgrade passive income.`);
    }
}

function updatePassiveIncomeButton(game) {
    const passiveIncomeButton = document.getElementById('passive-income-button');
    passiveIncomeButton.textContent = `Upgrade Passive Income (${game.passiveIncome.cost} bottles)`;
}
