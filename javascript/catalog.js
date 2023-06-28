class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents
    }

    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }

    set numberOfStudents(value) {
        if (value.isNaN()) {
            console.log('Invalid Input - must be set to a number.')
        }
        else {
            this._numberOfStudents = value;
        }
    }

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school this.level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randInt = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randInt]
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a family or guardian.')

lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal', 'Lou', 'Harris'])

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Tennis'])

console.log(alSmith.sportsTeams)

