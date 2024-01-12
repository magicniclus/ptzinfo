import { getDatabase, ref, set } from "firebase/database";
import { database } from "./firebase.config";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export function writeUserData(
  nom,
  prenom,
  email,
  telephone,
  codePostal, // Ajout du code postal comme paramètre
  // secteur,
  type,
  situationPerso,
  situationPro,
  revenus,
  nbrDePart,
  projet
) {
  // Créer un nouvel objet Date
  const dateEtHeure = new Date();

  // Convertir en string avec le format local français
  const dateEtHeureFrancais = dateEtHeure.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return new Promise((resolve, reject) => {
    set(ref(database, `contact/${uuidv4()}`), {
      nom,
      prenom,
      email,
      telephone,
      codePostal,
      projet,
      situationPro,
      situationPerso,
      revenus,
      nbrDePart,
      type,
      // secteur,
      dateEtHeureFrancais,
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function writeCRMUserData(
  nom,
  prenom,
  email,
  telephone,
  civilite,
  codePostal, // Ajout du code postal comme paramètre
  // secteur,
  type,
  situationPersonnelle,
  situationProfessionnelle,
  revenusFiscal,
  nbrDePart
) {
  const dateEtHeure = new Date().toISOString();

  // Structure des données pour l'API
  const contactData = {
    nom: nom,
    prenom: prenom,
    email: email,
    telephone_mobile: telephone,
    civilite: civilite,
    code_postal: codePostal,
    id_provenance: 22,
    demande: {
      genres_lot: [
        {
          genre: type,
        },
      ],
      cible: "RP",
      date: dateEtHeure,
      id_programme: 33,
      message:
        "Situation professionnelle : " +
        situationProfessionnelle +
        ", Situation personnelle : " +
        situationPersonnelle +
        ", Revenus fiscaux : " +
        revenusFiscal +
        ", Nombre de part : " +
        nbrDePart,
      //Todo: Ajouter zone de recherche (33 ou 17)
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post("https://api.leizee.com/contacts", contactData, {
        auth: {
          username: "signaturepromotion-castera",
          password: "o53ifo07ox56511qv1m2473jijcg8d",
        },
      })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
