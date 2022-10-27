// Exemple d'héritage. On le met tout en haut, au dessus de la classe.
// class Role {

//     // Inférence T, devine le type
//     public isAdmin=true;

//     constructor(isAdmin=false){
//         this.isAdmin= isAdmin;
//     }

// }

// On 'implémente' l'interface dans cette ligne puis le déclare dans la classe
// Pour l'héritage, on met 'extends'. Ici : extends Role
// attention à l'ordre des éléments dans l'export (export class User extends Role implements IUser)
export class CoursExemple implements IUser {

    public firstName!: string;
    public lastName!: string;
    public imgUrl!: string;

    // ! Inférence : deviner le type de l'attribut en fonction de l'initialisation de cet attribut
    // ! Attention, l'ordre dans le constructor est important
    constructor(
        // isAdmin: boolean, 
        firstName: string, lastName: string, imgUrl: string) {
        // super(isAdmin)
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgUrl = imgUrl;
    }

    // On implémente ici l'interface (en plus de la ligne d'export au dessus)
    getProfilUser(): string {
        return this.firstName
        // this.lastName, this.imgUrl
    }

}

// on crée des interfaces pour imposer des attributs et des méthodes à ceux qui utilisent ces interfaces.
// Lorsqu'on est dans une interface, on ne l'implémente pas,
// Par contre, on lui met obligatoirement le type de retour!

interface IUser {

    // Les attributs qu'on oblige dans cette interface.
    firstName: string;
    lastName: string;
    imgUrl: string;

    // Ici, on ne l'implémente pas, on déclare avec le type de retour !
    getProfilUser(): string;
}
