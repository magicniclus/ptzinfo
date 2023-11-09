import { getDatabase, ref, set } from "firebase/database";
import { database } from "./firebase.config";
import { v4 as uuidv4 } from "uuid";

export function writeUserData(nom, prenom, email, telephone) {
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
  secteur,
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
    code_postal: secteur === "gironde" ? "33000" : "17000",
    id_provenance: 22,
    demande: {
      genres_lot: [
        {
          genre: type,
        },
      ],
      cible: "RP",
      date: dateEtHeure,
      id_programme: 26,
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
