# Board Game API

## Objectifs de ce projet

Vous devez implémenter une API Restful permettant de réaliser des opérations basiques ( Create , Read, Update, Delete) sur des objets "Jeu de Société" stockés au sein d'une base de données MariaDB. 

Votre api doit répondre aux URI suivantes : 

| Verbe HTTP    | URI |  Attendu | Bonus     | Status Possibles  |
|--------|-------------|-----------------------------------|------------------------------------------------------------|---|
| GET    | /games      | Liste de tous les jeux de société, ordonnées par défaut dans l'ordre alphabétique| Bonus : accepter les query parameters offset et limit      | 200, 401  |
| GET    | /games/[id] | Afficher un jeu de société        |                                                            | 200,401,404  |
| POST | /games      | Ajout d'un jeu de société         |                   | 201, 400, 401  |
| PUT    | /games/[id] | Mise à jour d'un jeu de société   |                                                            | 200, 400, 401 ,404 |
| DELETE | /games/[id]| Supprimer un jeu de société       | | 204,401,404  |

## Authentification
Afin de pouvoir consommer votre API, votre application nécessitera une authentification via token JWT. 

Un seul compte utilisateur existera, celui de `marcel` ayant pour mot de passe `azerty`.

## Contraintes applicatives

Etant donné qu'il s'agit d'un simple exercice lié à une API, il vous est demandé de ne générer qu'un seul modèle.
Néanmoins, votre script doit vérifier la qualités des données reçues lors d'une création ou mise à jour. 


### Resources fournies
Vous disposez, au sein du dossier `data` d'une liste de 20 000 jeux de société, stockés au sein d'un fichier CSV. 
Ces données sont à importer au sein d'une base de données. 
