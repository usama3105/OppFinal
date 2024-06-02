#!/usr/bin/env node
import inquirer from 'inquirer';
class Person {
    constructor(public name: string, public age: number) {}

    introduce(): void {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

async function main() {
    const { name, age } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        },
        {
            type: 'number',
            name: 'age',
            message: 'Enter your age:',
        },
    ]);

    const person = new Person(name, age);
    person.introduce();
}

main();
