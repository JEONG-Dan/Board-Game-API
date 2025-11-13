# Projet API Board Games
Dan JEONG

## Table des matières

* [Mise en place](#mise-en-place)
    * [Clonez le repo](#clonez-le-repo)
    * [Créez un fichier](#créer-un-fichier)
    * [Lancez le projet](#lancez-le-projet)

## Mise en place
Afin de pouvoir tester le projet, il faut (obviously) commencer par l'installer.

### Clonez le repo :
Pour se faire, commencez par cloner le repository avec les commandes suivantes :
  ```bash
  git clone https://github.com/JEONG-Dan/Board-Game-API/
  cd Board-Game-API
  ```

### Créez un fichier
Ensuite il faut créer un fichier `secret_data.env` à la racine du projet contenant :
```
JWT_KEY="SECRET" # Ici, vous pouvez remplacer "SECRET" par le texte que vous voulez

```

### Lancez le projet
Maintenant que tout est configuré, vous pouvez lancer le projet en entrant sur un terminal la commande suivante :
```bash
npm run start:dev
```
Ici, le `:dev` est optionnel, et pas nécessaire pour juste tester le projet, mais pratique pour apporter une modification.
