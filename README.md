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
- Lister les charmes avec name, nb de slots, effects, location, acquisition, price, tags, lien wiki
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

- Aiguillon 4%
- Art de l'Aiguillon 3%
- Sorts 6%
- Équipements 12%
- Aiguillon des rêves 3%
- Divers 3%
- Charmes 40%
- Éclats de masque 4%
- Fragments de réceptacle 3%
- Boss 17%
- Rêve du Guerrier 7%
- Rêveurs 3%
- Le Colisée des Fous 3%
- Panthéons 4%

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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "icon": ""
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
      "done": "false",
      "icon": ""
    },
    {
      "name": "Pince de mante religieuse",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false",
      "icon": ""
    },
    {
      "name": "Coeur de cristal",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false",
      "icon": ""
    },
    {
      "name": "Ailes de monarque",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false",
      "icon": ""
    },
    {
      "name": "",
      "tags": "La larme d'Isma",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false",
      "icon": ""
    },
    {
      "name": "Cape des ombres",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "2%",
      "done": "false",
      "icon": ""
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
      "done": false,
      "icon": ""
    },
    {
      "name": "Aiguillon éveillé des rêves",
      "tags": "Équipment",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false,
      "icon": ""
    },
    {
      "name": "Ascension",
      "tags": "Succès",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false,
      "icon": ""
    }
  ]
  "divers": [
    {
      "name": "Marque du roi",
      "tags": "Clé",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
      "icon": ""
    },
    {
      "name": "Syntoniseur Divin",
      "tags": "Clé",
      "description": "",
      "location": "",
      "acquisition": "",
      "percentage": "1%",
      "done": false
      "icon": ""
    }
  ],
  "charms": [
    {
      "name": "Boussole murmurante",
      "slots": 1,
      "effects": "Affiche la position du porteur sur la carte lorsqu'elle est ouverte.",
      "location": "Vendue par Iselda à Dirtmouth après avoir rencontré Cornifer.",
      "price": "220 Géo",
      "tags": ["exploration", "utilitaire"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Boussole_murmurante",
      "icon": ""
    },
    {
      "name": "Essaim cueilleur",
      "slots": 1,
      "effects": "Un essaim ramasse automatiquement les Géo laissés au sol.",
      "location": "Vendu par Sly à Dirtmouth.",
      "price": "300 Géo",
      "tags": ["économie", "utilitaire"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Essaim_cueilleur",
      "icon": ""
    },
    {
      "name": "Carapace robuste",
      "slots": 2,
      "effects": "Augmente la durée d'invincibilité après avoir subi des dégâts.",
      "location": "Vendu par Sly à Dirtmouth.",
      "price": "350 Géo",
      "tags": ["défense", "combat"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Carapace_robuste",
      "icon": ""
    },
    {
      "name": "Capturâme",
      "slots": 1,
      "effects": "Augmente la quantité d'Âme obtenue en frappant un ennemi.",
      "location": "Trouvé dans le Monticule Ancestral.",
      "price": "N/A",
      "tags": ["âme", "combat"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Captur%C3%A2me",
      "icon": ""
    },
    {
      "name": "Maître des Âmes",
      "slots": 2,
      "effects": "Réduit le coût en Âme des sorts.",
      "location": "Trouvé dans la Cité des Larmes.",
      "price": "N/A",
      "tags": ["âme", "sorts"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_des_%C3%82mes",
      "icon": ""
    },
    {
      "name": "Avarice fragile",
      "slots": 2,
      "effects": "Augmente la quantité de Géo obtenue, mais se brise à la mort.",
      "location": "Acheté auprès de Leg Eater dans les Terres Fongiques.",
      "price": "250 Géo",
      "tags": ["économie", "risque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Avarice_fragile",
      "icon": ""
    },
    {
      "name": "Avarice incassable",
      "slots": 2,
      "effects": "Augmente la quantité de Géo obtenue sans risque de destruction.",
      "location": "Obtenu auprès de Divine après amélioration.",
      "price": "N/A",
      "tags": ["économie"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Avarice_incassable",
      "icon": ""
    },
    {
      "name": "Force fragile",
      "slots": 3,
      "effects": "Augmente les dégâts de l’aiguillon mais se brise à la mort.",
      "location": "Acheté auprès de Leg Eater dans les Terres Fongiques.",
      "price": "350 Géo",
      "tags": ["attaque", "risque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Force_fragile",
      "icon": ""
    },
    {
      "name": "Force incassable",
      "slots": 3,
      "effects": "Augmente les dégâts de l’aiguillon sans risque de destruction.",
      "location": "Obtenu auprès de Divine après amélioration.",
      "price": "N/A",
      "tags": ["attaque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Force_incassable",
      "icon": ""
    },
    {
      "name": "Cœur fragile",
      "slots": 2,
      "effects": "Augmente la santé maximale mais se brise à la mort.",
      "location": "Acheté auprès de Leg Eater.",
      "price": "350 Géo",
      "tags": ["défense", "risque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_fragile",
      "icon": ""
    },
    {
      "name": "Cœur incassable",
      "slots": 2,
      "effects": "Augmente la santé maximale sans risque de destruction.",
      "location": "Obtenu auprès de Divine après amélioration.",
      "price": "N/A",
      "tags": ["défense"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_incassable",
      "icon": ""
    },

    {
      "name": "Fureur des disparus",
      "slots": 3,
      "effects": "Augmente fortement les dégâts lorsque le porteur n'a plus qu'un masque.",
      "location": "Trouvé à la Passe du Roi.",
      "price": "N/A",
      "tags": ["attaque", "high-risk"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Fureur_des_disparus",
      "icon": ""
    },
    {
      "name": "Marque d’orgueil",
      "slots": 3,
      "effects": "Augmente la portée de l’aiguillon.",
      "location": "Obtenu après avoir vaincu les Mantes Traîtresses.",
      "price": "N/A",
      "tags": ["attaque", "portée"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Marque_d%27orgueil",
      "icon": ""
    },
    {
      "name": "Longnail",
      "slots": 2,
      "effects": "Augmente légèrement la portée de l’aiguillon.",
      "location": "Vendu par Sly.",
      "price": "300 Géo",
      "tags": ["attaque", "portée"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Longnail",
      "icon": ""
    },
    {
      "nom": "Grubsong",
      "slots": 1,
      "effects": "Génère de l’Âme lorsque le porteur subit des dégâts.",
      "location": "Récompense après avoir libéré 10 larves et parlé au Père des Larves.",
      "price": "N/A",
      "tags": ["âme", "défense", "soutien"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Grubsong",
      "icon": ""
    },
    {
      "nom": "Grubberfly’s Elegy",
      "slots": 3,
      "effects": "Permet de lancer des projectiles d’énergie avec l’aiguillon lorsque la santé est complète.",
      "location": "Récompense après avoir libéré toutes les larves.",
      "price": "N/A",
      "tags": ["attaque", "projectile"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Grubberfly%27s_Elegy",
      "icon": ""
    },
    {
      "nom": "Pierre du chamane",
      "slots": 3,
      "effects": "Augmente les dégâts des sorts.",
      "location": "Vendu par Salubra dans les Terres Fongiques.",
      "price": "220 Géo",
      "tags": ["sorts", "attaque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Pierre_du_chamane",
      "icon": ""
    },
    {
      "nom": "Maître des rêves",
      "slots": 1,
      "effects": "Permet d’utiliser l’Aiguillon des Rêves plus rapidement et augmente l’Âme obtenue.",
      "location": "Récompense après avoir collecté 500 Essences.",
      "price": "N/A",
      "tags": ["rêve", "âme"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_des_r%C3%AAves",
      "icon": ""
    },
    {
      "nom": "Sprintmaster",
      "slots": 1,
      "effects": "Augmente légèrement la vitesse de déplacement au sol.",
      "location": "Vendu par Sly.",
      "price": "400 Géo",
      "tags": ["mobilité"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Sprintmaster",
      "icon": ""
    },
    {
      "nom": "Dashmaster",
      "slots": 2,
      "effects": "Permet de se propulser plus souvent et vers le bas.",
      "location": "Trouvé dans les Terres Fongiques.",
      "price": "N/A",
      "tags": ["mobilité"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Dashmaster",
      "icon": ""
    },
    {
      "nom": "Quick Slash",
      "slots": 3,
      "effects": "Augmente la vitesse d’attaque de l’aiguillon.",
      "location": "Trouvé dans le Royaume des Profondeurs.",
      "price": "N/A",
      "tags": ["attaque", "vitesse"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Quick_Slash",
      "icon": ""
    },
    {
      "nom": "Corps robuste",
      "slots": 2,
      "effects": "Empêche le recul lors des coups reçus.",
      "location": "Vendu par Salubra.",
      "price": "120 Géo",
      "tags": ["défense"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Corps_robuste",
      "icon": ""
    },
    {
      "nom": "Baldur Shell",
      "slots": 2,
      "effects": "Protège le porteur pendant la concentration d’Âme.",
      "location": "Trouvé dans le Monticule Ancestral.",
      "price": "N/A",
      "tags": ["défense", "soin"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Baldur_Shell",
      "icon": ""
    },
    {
      "nom": "Quick Focus",
      "slots": 3,
      "effects": "Réduit le temps nécessaire pour se soigner.",
      "location": "Vendu par Salubra.",
      "price": "800 Géo",
      "tags": ["soin", "défense"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Quick_Focus",
      "icon": ""
    },
    {
      "nom": "Deep Focus",
      "slots": 4,
      "effects": "Soigne deux masques à la fois mais plus lentement.",
      "location": "Trouvé dans les Jardins de la Reine.",
      "price": "N/A",
      "tags": ["soin"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Deep_Focus",
      "icon": ""
    },
    {
      "nom": "Thorns of Agony",
      "slots": 1,
      "effects": "Inflige des dégâts aux ennemis proches lorsque le porteur est touché.",
      "location": "Trouvé dans le Chemin Vert.",
      "price": "N/A",
      "tags": ["défense", "contre-attaque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Thorns_of_Agony",
      "icon": ""
    },
    {
      "nom": "Weaversong",
      "slots": 2,
      "effects": "Invoque de petits tisseurs qui attaquent les ennemis proches.",
      "location": "Trouvé dans le Repaire des Tisserands.",
      "price": "N/A",
      "tags": ["invocation", "attaque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Weaversong",
      "icon": ""
    },
    {
      "nom": "Glowing Womb",
      "slots": 2,
      "effects": "Consomme de l’Âme pour invoquer des créatures explosives.",
      "location": "Trouvé dans les Profondeurs.",
      "price": "N/A",
      "tags": ["invocation", "âme"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Glowing_Womb",
      "icon": ""
    },
    {
      "nom": "Flukenest",
      "slots": 3,
      "effects": "Modifie le sort Âme Vengeresse en une nuée de projectiles.",
      "location": "Trouvé après avoir vaincu Flukemarm.",
      "price": "N/A",
      "tags": ["sorts", "modificateur"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Flukenest",
      "icon": ""
    },
    {
      "nom": "Sang de la Ruche",
      "slots": 4,
      "effects": "Régénère le dernier masque perdu après un court délai sans subir de dégâts.",
      "location": "Trouvé dans la Ruche.",
      "price": "N/A",
      "tags": ["défense", "régénération"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Sang_de_la_Ruche",
      "icon": ""
    },
    {
      "nom": "Forme d’Unn",
      "slots": 2,
      "effects": "Permet de se déplacer lentement pendant la concentration d’Âme.",
      "location": "Obtenu auprès d’Unn dans le Lac d’Unn.",
      "price": "N/A",
      "tags": ["soin", "mobilité"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Forme_d%27Unn",
      "icon": ""
    },
    {
      "nom": "Spore Shroom",
      "slots": 1,
      "effects": "Libère un nuage de spores infligeant des dégâts lors de la concentration d’Âme.",
      "location": "Trouvé dans les Terres Fongiques.",
      "price": "N/A",
      "tags": ["soin", "attaque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Spore_Shroom",
      "icon": ""
    },
    {
      "nom": "Blason du Défenseur",
      "slots": 1,
      "effects": "Émet une odeur toxique qui inflige des dégâts aux ennemis proches.",
      "location": "Obtenu après avoir vaincu le Défenseur Bousier.",
      "price": "N/A",
      "tags": ["attaque", "zone"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Blason_du_D%C3%A9fenseur",
      "icon": ""
    },
    {
      "nom": "Mélodie insouciante",
      "slots": 3,
      "effects": "Donne une chance d’ignorer complètement les dégâts subis.",
      "location": "Obtenu après la quête de la troupe Grimm (si le rituel est banni).",
      "price": "N/A",
      "tags": ["défense", "aléatoire"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/M%C3%A9lodie_insouciante",
      "icon": ""
    },
    {
      "nom": "Cœur de cristal",
      "slots": 2,
      "effects": "Augmente les masques de vie temporaires (Lifeblood).",
      "location": "Vendu par Salubra après avoir obtenu plusieurs charmes.",
      "price": "250 Géo",
      "tags": ["défense", "lifeblood"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_de_cristal",
      "icon": ""
    },
    {
      "nom": "Bénédiction de Joni",
      "slots": 4,
      "effects": "Remplace tous les masques par des masques de Lifeblood augmentés.",
      "location": "Trouvé dans le Repos de Joni (Falaises Hurlantes).",
      "price": "N/A",
      "tags": ["défense", "lifeblood"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/B%C3%A9n%C3%A9diction_de_Joni",
      "icon": ""
    },
    {
      "nom": "Cœur du Roi",
      "slots": 5,
      "effects": "Génère lentement de l’Âme en permanence.",
      "location": "Obtenu après avoir complété le Palais Blanc.",
      "price": "N/A",
      "tags": ["âme", "clé"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_du_Roi",
      "icon": ""
    },
    {
      "nom": "Cœur du Vide",
      "slots": 0,
      "effects": "Unifie le Vide et permet d’accéder à la véritable fin.",
      "location": "Transformation automatique du Cœur du Roi dans l’Abîme.",
      "price": "N/A",
      "tags": ["clé", "fin"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_du_Vide",
      "icon": ""
    },
    {
      "nom": "Child of Grimm",
      "slots": 2,
      "effects": "Invoque un familier qui attaque les ennemis.",
      "location": "Obtenu lors de la quête de la Troupe Grimm.",
      "price": "N/A",
      "tags": ["invocation", "quête"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Child_of_Grimm",
      "icon": ""
    },
    {
      "nom": "Hiveblood",
      "slots": 4,
      "effects": "Restaure le dernier masque perdu après un délai.",
      "location": "Trouvé dans la Ruche.",
      "price": "N/A",
      "tags": ["régénération", "défense"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Hiveblood",
      "icon": ""
    },
    {
      "nom": "Rancœur",
      "slots": 2,
      "effects": "Augmente les dégâts des sorts lorsque le porteur subit des dégâts.",
      "location": "Trouvé dans la Cité des Larmes.",
      "price": "N/A",
      "tags": ["sorts", "attaque"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Ranc%C5%93ur",
      "icon": ""
    },
    {
      "nom": "Ombre vive",
      "slots": 2,
      "effects": "Inflige des dégâts en traversant les ennemis avec l’Ombre Ténébreuse.",
      "location": "Trouvé dans le Royaume des Profondeurs.",
      "price": "N/A",
      "tags": ["attaque", "mobilité"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Ombre_vive",
      "icon": ""
    },
    {
      "nom": "Épines acérées",
      "slots": 1,
      "effects": "Augmente les dégâts infligés aux ennemis lors d’un dash à travers eux avec Ombre Ténébreuse.",
      "location": "Trouvé dans les Jardins de la Reine.",
      "price": "N/A",
      "tags": ["attaque", "dash"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/%C3%89pines_ac%C3%A9r%C3%A9es",
      "icon": ""
    },
    {
      "nom": "Maître de l’aiguillon",
      "slots": 1,
      "effects": "Permet de charger plus rapidement les attaques concentrées.",
      "location": "Obtenu auprès de Sheo après apprentissage.",
      "price": "800 Géo",
      "tags": ["attaque", "technique"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_de_l%27aiguillon",
      "icon": ""
    },
    {
      "nom": "Maître des sorts",
      "slots": 2,
      "effects": "Réduit légèrement le coût en Âme des sorts.",
      "location": "Trouvé dans les Jardins de la Reine.",
      "price": "N/A",
      "tags": ["sorts", "âme"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_des_sorts",
      "icon": ""
    },
    {
      "nom": "Sang vivant",
      "slots": 2,
      "effects": "Ajoute deux masques de Lifeblood temporaires lors du repos sur un banc.",
      "location": "Vendu par Salubra après avoir obtenu plusieurs charmes.",
      "price": "250 Géo",
      "tags": ["lifeblood", "défense"],
      "lien_wiki": "https://fr.hollowknight.wiki/w/Sang_vivant",
      "icon": ""
    }
  ],
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
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Proche Disparus",
      "success": "",
      "done": false
    },
    {
      "name": "Proche Disparus",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Vaisseau Corrompu",
      "success": "",
      "done": false
    },
    {
      "name": "Mawlek Maussade",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
      "done": false
    },
    {
      "name": "Défenseur Bousier",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Protecteur Blanc",
      "success": "",
      "done": false
    },
    {
      "name": "Protecteur Blanc",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Défenseur Bousier",
      "success": "",
      "done": false
    },
    {
      "name": "Faux Chevalier",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Chevalier Méprisé",
      "success": "",
      "done": false
    },
    {
      "name": "Chevalier Méprisé",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Faux Chevalier",
      "success": "",
      "done": false
    },
    {
      "name": "Grimm",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Roi des cauchemars Grimm",
      "success": "",
      "done": false
    },
    {
      "name": "Roi des cauchemars Grimm",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Grimm",
      "success": "",
      "done": false
    },
    {
      "name": "Mère Gruz",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
      "done": false
    },
    {
      "name": "Chevalier de la Ruche",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
      "done": false
    },
    {
      "name": "Hornet Protectrice",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Hornet Sentinelle",
      "success": "",
      "done": false
    },
    {
      "name": "Hornet Sentinelle",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Hornet Protectrice",
      "success": "",
      "done": false
    },
    {
      "name": "Dames Mante",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Soeurs D'armes",
      "success": "",
      "done": false
    },
    {
      "name": "Soeurs D'armes",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Dames Mante",
      "success": "",
      "done": false
    },
    {
      "name": "Nosk",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Nosk Ailé",
      "success": "",
      "done": false
    },
    {
      "name": "Nosk Ailé",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Nosk",
      "success": "",
      "done": false
    },
    {
      "name": "Maître d'Âme",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Tyran De l'Âme",
      "success": "",
      "done": false
    },
    {
      "name": "Tyran De l'Âme",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "Maître d'Âme",
      "success": "",
      "done": false
    },
    {
      "name": "Le Collectionneur",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
      "done": false
    },
    {
      "name": "Seigneur Traitre",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
      "done": false
    },
    {
      "name": "Uumuu",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
      "done": false
    },
    {
      "name": "Veilleur",
      "tags": "Boss",
      "description": "",
      "location": "",
      "reward": "",
      "percentage": "1%",
      "variant": "",
      "success": "",
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
  "dreamers": [
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
      "name": "Monameon l'Érudite",
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
