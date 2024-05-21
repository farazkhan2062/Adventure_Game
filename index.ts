#! /usr/bin/env node

//This project is not GUI based. It is a console-based game.
//You will take the requirements of the game from the video and develop the game in TypeScript and Node.js

import inquirer from "inquirer";
import chalk from "chalk";

let enemies: string[] = ["Skeleton", "Zombie", "Warrior"];
let maxEnemyHealth: number = 75;
let enemyAttackDamage: number = 25;
let health: number = 100;
let attackDamage: number = 50;
let numHealthPotions: number = 3;
let healthPotionHealAmount: number = 30;
let healthPotionDropChance: number = 50; //Percentage
let running: boolean = true;
    let getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * max - min) + min;
    };

    console.log(chalk.yellow.bold("\n\tWelcome to the Dungeon!"));

GAME: 
    while (running) {
  console.log(chalk.blueBright("\t*************************"));
  console.log(chalk.blueBright("\t*************************"));
  let enemyHealth: number = getRandomNumber(1, maxEnemyHealth);
  let enemy: string = enemies[getRandomNumber(0, enemies.length)];
  console.log(chalk.magentaBright("\t# " + enemy + " has appeared! #\n"));

        while (enemyHealth > 0) {
        console.log(chalk.greenBright("\tYour HP: " + health));
        console.log(chalk.blueBright("\t" + enemy + "'s HP: " + enemyHealth));

        let control = await inquirer.prompt
        (
            [
                {
                    name: "command",
                    type: "list",
                    message: "\n\tWhat do you want to do?",
                    choices: ["\tAttack", "\tDrink health potion", "\tRun"],
                },
            ]
        );

            switch (control.command) {
            case "\tAttack":
            let strikeDamage: number = getRandomNumber(1, attackDamage);
            let damagedTaken: number = getRandomNumber(1, enemyAttackDamage);
            health -= damagedTaken;
            enemyHealth -= strikeDamage;

            console.log(chalk.greenBright(`\tYou strike the ${enemy} with dameged ${strikeDamage}`));
            console.log(chalk.red(`\tYou receive ${damagedTaken} in damage`));

            if (health < 1) {
            console.log(chalk.red.bold(`You have taken too much damage, you are too weak to go on!`));
            break;
                    }

            break;
            case "\tDrink health potion":
            if (numHealthPotions > 0) {
            health += healthPotionHealAmount;
            numHealthPotions--;
            console.log(chalk.green.bold(`\tYou drink a health potion, healing yourself for ${healthPotionHealAmount}. You now have ${health} HP. You have ${numHealthPotions} health potions left.`));
                    } 
                    else {
                        console.log(chalk.green.bold(`\tYou have no health potions left!`));
                        }
            break;

            case "\tRun":
            console.log(chalk.red.bold(`\tYou run away from the ${enemy}!`));
            continue GAME;
            break;
        };
                        
    };
                    if (health < 1) {
                    console.log(chalk.red.bold(`\tYou limp out of the dungeon, weak from battle !`));
                    break;
                    }
                    console.log(chalk.yellow("\t*******************************\n"));
                    console.log(chalk.redBright.bold(`\t# ${enemy} was defeated! #`));
                    console.log(chalk.greenBright.bold(`\t#You have ${health} HP left #`));

                    if (getRandomNumber(0, 100) < healthPotionDropChance) {
                    numHealthPotions++;
                    console.log(chalk.green.bold(`\t# The ${enemy} dropped a health potion! #`));
                    console.log(chalk.blueBright.bold(`\t#You now have ${numHealthPotions} health potions.#`));
                    };
                    
                    let stateControl = await inquirer.prompt
                    (
                        [
                            {
                                name: "command",
                                type: "list",
                                message: "\n\tWhat do you want to do?",
                                choices: ["\tContinue Fighting", "\tExit Dungeon"],
                            },
                            
                        ]

                    )

                    if (stateControl.command === "\tContinue Fighting") {
                    console.log(chalk.red.bold(`\tYou can continue your Adventure!\n`));
                    }
                    else{
                    console.log(chalk.red.bold(`\tYou exit the dungeon, successful from your adventures!\n`));
                    break;
                    };
                       
                    
};
console.log(chalk.magentaBright.bold("\t##############################################"));
console.log(chalk.yellowBright.bold.italic("\t************Thank you for playing!************"));
console.log(chalk.magentaBright.bold("\t##############################################"));
