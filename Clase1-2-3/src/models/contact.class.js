import { LEVELS } from "./levels.enum";


export class Contact {
    name= '';
    surname = '';
    email = '';
    state = false;
    level = LEVELS.NORMAL

    constructor(name, surname, email, state, level){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.state = state;
        this.level = level;
    }

}
