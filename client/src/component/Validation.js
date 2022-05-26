
export default function Validation(values) {
    let erreur = {}

    if(!values.nom.trim()) {
        erreur.name= "Champs obligatoire";
    }
    if(!values.prenom.trim()) {
        erreur.prenom= "Champs obligatoire";
    }

    if(!values.email.trim()) {
        erreur.email= "Champs obligatoire";
    }

    if(!values.telephone.trim()) {
        erreur.telephone= "Champs obligatoire";
    }

    if(!values.message.trim()) {
        erreur.message= "Champs obligatoire";
    }

    return erreur
}