export class User {

    readonly id:number = 0;

    // ! Inférence : deviner le type de l'attribut en fonciton de l'initialisation de cet attribut
    constructor(firstName = '', lastName = "", email = '', urlImg = '') {

    }
}
