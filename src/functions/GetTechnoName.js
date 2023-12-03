// ================ Fonction qui renvoie le nom d'une techno à partir de son ID =================== //

import { technos } from '../data.js';

export const getTechnoName = (technoID) => {
    let name = "non défini";

    for (let i = 0; i < technos.length; i++) {
        if (technos[i].id === technoID) {
            name = technos[i].name;
            break;
        }
    }

    return name;
}
