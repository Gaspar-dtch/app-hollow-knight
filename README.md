# app-hollow-knight

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm e dev
```

### Compile and Minify for Production

```sh
npm e build
```

## Simulation de build

### Lvl 1 -> 
- Lister les charmes avec nom, nb de slots, effets, location, acquisition, prix, tags, lien wiki
- Créer son build : ajouter des charmes -> calcule tes dégats (aiguillon, sorts) et d'autres stats modifier par les charmes
- Filtre par tags

### Lvl 2 -> 
- Proposition de build en fonction du style de jeux
- Comparaison côte à côte de builds

### Lvl 3 -> 
- Enregistrer ses builds
- Pouvoir impoter/exporter son build


## Liste des points d'intérêt avec map

### Lvl 1 -> 
- Lister les points d'intérêt
- Afficher le pourcentage

### Lvl 2 -> 
- Afficher la map
- Afficher les points sur la map

### Lvl 3 -> 
- Cliquer sure collectible -> redirige vers son endroit sur la map



## Store

Aiguillon 4%
Art de l'Aiguillon 3%
Sorts 6%
Équipements 12%
Aiguillon des rêves 3%
Divers 3%
Charmes 40%
Éclats de masque 4%
Fragments de réceptacle 3%
Boos 17%
Rêve du Guerrier 7%
Rêveurs 3%
Divers 3%
Panthéons 4%

{
  "nail": [
    {
      "name": "Vieux aiguillon",
      "tags": "Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    },
    {
      "name": "Aiguillon pointu",
      "tags": "Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    },
    {
      "name": "Aiguillon forgé",
      "tags": "Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    },
    {
      "name": "Aiguillon en spirale",
      "tags": "Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    },
    {
      "name": "Aiguillon pur",
      "tags": "",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    }
  ],
  "nail-arts": [
    {
     "name": "Entaille cyclone",
      "tags": "Art de l'Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    },
    {
     "name": "Entaille éclaire",
      "tags": "Art de l'Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    },
    {
     "name": "Entaille implacable",
      "tags": "Art de l'Aiguillon",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    }
  ],
  "spells": [
    {
      "name": "Esprit vengeur",
      "tags": "Sort",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    },
    {
      "name": "Élan ravageur",
      "tags": "Sort",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    },
    {
      "name": "Spectres hurleurs",
      "tags": "Sort",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    },
    {
      "name": "Âme d'ombre",
      "tags": "Sort",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false" 
    },
    {
      "name": "Ténèbres descendantes",
      "tags": "Sort",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    },
    {
      "name": "Cri des abysses",
      "tags": "Sort",
      "description": "",
      "location": "",
      "acquisition": "",
      "damage": "",
      "percentage": "1%",
      "done": "false"
    },
  ],
  "equipment": [
    {
      "name": "Cape d'ailes de papillon",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false"
    },
    {
      "name": "Pince de mante religieuse",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false"
    },
    {
      "name": "Coeur de cristal",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false"
    },
    {
      "name": "Ailes de monarque",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false"
    },
    {
      "name": "",
      "tags": "La larme d'Isma",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false"
    },
    {
      "name": "Cape des ombres",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false"
    }
  ],
  "dream-nail": [
    {
      "name": "Aiguillon des rêves",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Aiguillon éveillé des rêves",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Ascension",
      "tags": "Succès",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ],
    "divers": [
    {
      "name": "Marque du roi",
      "tags": "Clé",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Syntoniseur Divin",
      "tags": "Clé",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ],
  "charms": [],
  "mask-shards": [
    {
      "name": "Furieux Gardien",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Nid-profond",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sly 1",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sly 2",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sly 3",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sly 4",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Bretta",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Mawlek Maussade",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Larve 5",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Routes Oubliées",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Station de la Reine",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Voyante",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "L'Endeuillée Grise",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Voies d'Eau Royales",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sanctuaire de Pierre",
      "tags": "Éclats de masque",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "La Ruche",
      "tags": "Éclats de masque",
      "percentage": ".25%",
      "done": false
    }
  ],
  "vessel-fragment": [
    {
      "name": "Bassin Ancestral",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Cité des Larmes",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Nid-profond",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sly 1",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sly 2",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Routes Oubliées",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Vertchemin",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Voyante",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Tanière Aux oléoptères",
      "tags": "Fragments de réceptacle",
      "percentage": "1%",
      "done": false
    }
  ],
  "boss": [
    {
      "name": "Vaisseau Corrompu",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Mawlek Maussade",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Défenseur Bousier",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Faux Chevalier",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Grimm",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Roi des cauchemars Grimm",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Mère Gruz",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Chevalier de la Ruche",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Hornet Protectrice",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Hornet Sentinelle",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Dames Mante",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Nosk",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Maître d'Âme",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Le Collectionneur",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Seigneur Traitre",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Uumuu",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Veilleur",
      "tags": "Boos",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ],
  "warrior-dreams": [
    {
      "name": "Hu l'Ancien",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Galien",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Gorb",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Markoth",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Marmu",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Sans-yeux",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Xero",
      "tags": "Rêve du Guerrier",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ],
  "Rêveur": [
    {
      "name": "Herrah la Bête",
      "tags": "Rêveur",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Lurien le Veilleur",
      "tags": "Rêveur",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Monomon l'Érudite",
      "tags": "Rêveur",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ],
  "colosseum-of-fools": [
    {
      "name": "Épreuve du Guerrier",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Épreuve du Conquérant",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Épreuve des fous",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ],
  "pantheons": [
    {
      "name": "Panthéon du Maître",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Panthéon du Peintre",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Panthéon du Grand Maître",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",  
      "percentage": "1%",
      "done": false
    },
    {
      "name": "Panthéon du Chevalier",
      "tags": "Divers",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
    }
  ]
}
