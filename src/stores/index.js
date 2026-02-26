import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const store = [
  {
    "catName": "Aiguillon 4%",
    "items": [
      {
        "name": "Vieux aiguillon",
        "tags": "Aiguillon",
        "description": "",
        "location": "",
        "acquisition": "",
        "damage": "",
        "percentage": "1%",
        "done": "false",
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
        "done": "false",
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
        "done": "false",
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
        "done": "false",
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
        "done": "false",
        "icon": ""
      }
    ]
  },
  {
    "catName": "Art de l'Aiguillon 3%",
    "items": [
      {
        "name": "Entaille cyclone",
        "tags": "Art de l'Aiguillon",
        "description": "",
        "location": "",
        "acquisition": "",
        "damage": "",
        "percentage": "1%",
        "done": "false",
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
        "done": "false",
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
        "done": "false",
        "icon": ""
      }
    ]
  },
  {
    "catName": "Sorts 6%",
    "items": [
      {
        "name": "Esprit vengeur",
        "tags": "Sort",
        "description": "",
        "location": "",
        "acquisition": "",
        "damage": "",
        "percentage": "1%",
        "done": "false",
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
        "done": "false",
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
        "done": "false",
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
        "done": "false",
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
        "done": "false",
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
        "done": "false",
        "icon": ""
      },
    ]
  },
  {
    "catName": "Équipements 12%",
    "items": [
      {
        "name": "Cape d'ailes de papillon",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "2%",
        "done": "false",
        "icon": ""
      },
      {
        "name": "Pince de mante religieuse",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "2%",
        "done": "false",
        "icon": ""
      },
      {
        "name": "Coeur de cristal",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "2%",
        "done": "false",
        "icon": ""
      },
      {
        "name": "Ailes de monarque",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "2%",
        "done": "false",
        "icon": ""
      },
      {
        "name": "La larme d'Isma",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "2%",
        "done": "false",
        "icon": ""
      },
      {
        "name": "Cape des ombres",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "2%",
        "done": "false",
        "icon": ""
      }
    ]
  },
  {
    "catName": "Aiguillon des rêves 3%",
    "items": [
      {
        "name": "Aiguillon des rêves",
        "tags": "Équipement",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Aiguillon éveillé des rêves",
        "tags": "Équipement",
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
  },
  {
    "catName": "Divers 3%",
    "items": [
      {
        "name": "Marque du roi",
        "tags": "Clé",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Syntoniseur Divin",
        "tags": "Clé",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      }
    ]
  },
  {
    "catName": "Charmes 40%",
    "items": [
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
        "tags": ["éconameie", "utilitaire"],
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
        "tags": ["éconameie", "risque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Avarice_fragile",
        "icon": ""
      },
      {
        "name": "Avarice incassable",
        "slots": 2,
        "effects": "Augmente la quantité de Géo obtenue sans risque de destruction.",
        "location": "Obtenu auprès de Divine après amélioration.",
        "price": "N/A",
        "tags": ["éconameie"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Avarice_incassable",
        "icon": ""
      },
      {
        "name": "Force fragile",
        "slots": 3,
        "effects": "Augmente les dégâts de l'aiguillon mais se brise à la mort.",
        "location": "Acheté auprès de Leg Eater dans les Terres Fongiques.",
        "price": "350 Géo",
        "tags": ["attaque", "risque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Force_fragile",
        "icon": ""
      },
      {
        "name": "Force incassable",
        "slots": 3,
        "effects": "Augmente les dégâts de l'aiguillon sans risque de destruction.",
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
        "name": "Marque d'orgueil",
        "slots": 3,
        "effects": "Augmente la portée de l'aiguillon.",
        "location": "Obtenu après avoir vaincu les Mantes Traîtresses.",
        "price": "N/A",
        "tags": ["attaque", "portée"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Marque_d%27orgueil",
        "icon": ""
      },
      {
        "name": "Longnail",
        "slots": 2,
        "effects": "Augmente légèrement la portée de l'aiguillon.",
        "location": "Vendu par Sly.",
        "price": "300 Géo",
        "tags": ["attaque", "portée"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Longnail",
        "icon": ""
      },
      {
        "name": "Grubsong",
        "slots": 1,
        "effects": "Génère de l'Âme lorsque le porteur subit des dégâts.",
        "location": "Récompense après avoir libéré 10 larves et parlé au Père des Larves.",
        "price": "N/A",
        "tags": ["âme", "défense", "soutien"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Grubsong",
        "icon": ""
      },
      {
        "name": "Grubberfly's Elegy",
        "slots": 3,
        "effects": "Permet de lancer des projectiles d'énergie avec l'aiguillon lorsque la santé est complète.",
        "location": "Récompense après avoir libéré toutes les larves.",
        "price": "N/A",
        "tags": ["attaque", "projectile"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Grubberfly%27s_Elegy",
        "icon": ""
      },
      {
        "name": "Pierre du chamane",
        "slots": 3,
        "effects": "Augmente les dégâts des sorts.",
        "location": "Vendu par Salubra dans les Terres Fongiques.",
        "price": "220 Géo",
        "tags": ["sorts", "attaque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Pierre_du_chamane",
        "icon": ""
      },
      {
        "name": "Maître des rêves",
        "slots": 1,
        "effects": "Permet d'utiliser l'Aiguillon des Rêves plus rapidement et augmente l'Âme obtenue.",
        "location": "Récompense après avoir collecté 500 Essences.",
        "price": "N/A",
        "tags": ["rêve", "âme"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_des_r%C3%AAves",
        "icon": ""
      },
      {
        "name": "Sprintmaster",
        "slots": 1,
        "effects": "Augmente légèrement la vitesse de déplacement au sol.",
        "location": "Vendu par Sly.",
        "price": "400 Géo",
        "tags": ["mobilité"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Sprintmaster",
        "icon": ""
      },
      {
        "name": "Dashmaster",
        "slots": 2,
        "effects": "Permet de se propulser plus souvent et vers le bas.",
        "location": "Trouvé dans les Terres Fongiques.",
        "price": "N/A",
        "tags": ["mobilité"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Dashmaster",
        "icon": ""
      },
      {
        "name": "Quick Slash",
        "slots": 3,
        "effects": "Augmente la vitesse d'attaque de l'aiguillon.",
        "location": "Trouvé dans le Royaume des Profondeurs.",
        "price": "N/A",
        "tags": ["attaque", "vitesse"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Quick_Slash",
        "icon": ""
      },
      {
        "name": "Corps robuste",
        "slots": 2,
        "effects": "Empêche le recul lors des coups reçus.",
        "location": "Vendu par Salubra.",
        "price": "120 Géo",
        "tags": ["défense"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Corps_robuste",
        "icon": ""
      },
      {
        "name": "Baldur Shell",
        "slots": 2,
        "effects": "Protège le porteur pendant la concentration d'Âme.",
        "location": "Trouvé dans le Monticule Ancestral.",
        "price": "N/A",
        "tags": ["défense", "soin"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Baldur_Shell",
        "icon": ""
      },
      {
        "name": "Quick Focus",
        "slots": 3,
        "effects": "Réduit le temps nécessaire pour se soigner.",
        "location": "Vendu par Salubra.",
        "price": "800 Géo",
        "tags": ["soin", "défense"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Quick_Focus",
        "icon": ""
      },
      {
        "name": "Deep Focus",
        "slots": 4,
        "effects": "Soigne deux masques à la fois mais plus lentement.",
        "location": "Trouvé dans les Jardins de la Reine.",
        "price": "N/A",
        "tags": ["soin"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Deep_Focus",
        "icon": ""
      },
      {
        "name": "Thorns of Agony",
        "slots": 1,
        "effects": "Inflige des dégâts aux ennemis proches lorsque le porteur est touché.",
        "location": "Trouvé dans le Chemin Vert.",
        "price": "N/A",
        "tags": ["défense", "contre-attaque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Thorns_of_Agony",
        "icon": ""
      },
      {
        "name": "Weaversong",
        "slots": 2,
        "effects": "Invoque de petits tisseurs qui attaquent les ennemis proches.",
        "location": "Trouvé dans le Repaire des Tisserands.",
        "price": "N/A",
        "tags": ["invocation", "attaque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Weaversong",
        "icon": ""
      },
      {
        "name": "Glowing Womb",
        "slots": 2,
        "effects": "Consomme de l'Âme pour invoquer des créatures explosives.",
        "location": "Trouvé dans les Profondeurs.",
        "price": "N/A",
        "tags": ["invocation", "âme"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Glowing_Womb",
        "icon": ""
      },
      {
        "name": "Flukenest",
        "slots": 3,
        "effects": "Modifie le sort Âme Vengeresse en une nuée de projectiles.",
        "location": "Trouvé après avoir vaincu Flukemarm.",
        "price": "N/A",
        "tags": ["sorts", "modificateur"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Flukenest",
        "icon": ""
      },
      {
        "name": "Sang de la Ruche",
        "slots": 4,
        "effects": "Régénère le dernier masque perdu après un court délai sans subir de dégâts.",
        "location": "Trouvé dans la Ruche.",
        "price": "N/A",
        "tags": ["défense", "régénération"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Sang_de_la_Ruche",
        "icon": ""
      },
      {
        "name": "Forme d'Unn",
        "slots": 2,
        "effects": "Permet de se déplacer lentement pendant la concentration d'Âme.",
        "location": "Obtenu auprès d'Unn dans le Lac d'Unn.",
        "price": "N/A",
        "tags": ["soin", "mobilité"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Forme_d%27Unn",
        "icon": ""
      },
      {
        "name": "Spore Shroom",
        "slots": 1,
        "effects": "Libère un nuage de spores infligeant des dégâts lors de la concentration d'Âme.",
        "location": "Trouvé dans les Terres Fongiques.",
        "price": "N/A",
        "tags": ["soin", "attaque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Spore_Shroom",
        "icon": ""
      },
      {
        "name": "Blason du Défenseur",
        "slots": 1,
        "effects": "Émet une odeur toxique qui inflige des dégâts aux ennemis proches.",
        "location": "Obtenu après avoir vaincu le Défenseur Bousier.",
        "price": "N/A",
        "tags": ["attaque", "zone"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Blason_du_D%C3%A9fenseur",
        "icon": ""
      },
      {
        "name": "Mélodie insouciante",
        "slots": 3,
        "effects": "Donne une chance d'ignorer complètement les dégâts subis.",
        "location": "Obtenu après la quête de la troupe Grimm (si le rituel est banni).",
        "price": "N/A",
        "tags": ["défense", "aléatoire"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/M%C3%A9lodie_insouciante",
        "icon": ""
      },
      {
        "name": "Cœur de cristal",
        "slots": 2,
        "effects": "Augmente les masques de vie temporaires (Lifeblood).",
        "location": "Vendu par Salubra après avoir obtenu plusieurs charmes.",
        "price": "250 Géo",
        "tags": ["défense", "lifeblood"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_de_cristal",
        "icon": ""
      },
      {
        "name": "Bénédiction de Joni",
        "slots": 4,
        "effects": "Remplace tous les masques par des masques de Lifeblood augmentés.",
        "location": "Trouvé dans le Repos de Joni (Falaises Hurlantes).",
        "price": "N/A",
        "tags": ["défense", "lifeblood"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/B%C3%A9n%C3%A9diction_de_Joni",
        "icon": ""
      },
      {
        "name": "Cœur du Roi",
        "slots": 5,
        "effects": "Génère lentement de l'Âme en permanence.",
        "location": "Obtenu après avoir complété le Palais Blanc.",
        "price": "N/A",
        "tags": ["âme", "clé"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_du_Roi",
        "icon": ""
      },
      {
        "name": "Cœur du Vide",
        "slots": 0,
        "effects": "Unifie le Vide et permet d'accéder à la véritable fin.",
        "location": "Transformation automatique du Cœur du Roi dans l'Abîme.",
        "price": "N/A",
        "tags": ["clé", "fin"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/C%C5%93ur_du_Vide",
        "icon": ""
      },
      {
        "name": "Child of Grimm",
        "slots": 2,
        "effects": "Invoque un familier qui attaque les ennemis.",
        "location": "Obtenu lors de la quête de la Troupe Grimm.",
        "price": "N/A",
        "tags": ["invocation", "quête"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Child_of_Grimm",
        "icon": ""
      },
      {
        "name": "Hiveblood",
        "slots": 4,
        "effects": "Restaure le dernier masque perdu après un délai.",
        "location": "Trouvé dans la Ruche.",
        "price": "N/A",
        "tags": ["régénération", "défense"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Hiveblood",
        "icon": ""
      },
      {
        "name": "Rancœur",
        "slots": 2,
        "effects": "Augmente les dégâts des sorts lorsque le porteur subit des dégâts.",
        "location": "Trouvé dans la Cité des Larmes.",
        "price": "N/A",
        "tags": ["sorts", "attaque"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Ranc%C5%93ur",
        "icon": ""
      },
      {
        "name": "Ombre vive",
        "slots": 2,
        "effects": "Inflige des dégâts en traversant les ennemis avec l'Ombre Ténébreuse.",
        "location": "Trouvé dans le Royaume des Profondeurs.",
        "price": "N/A",
        "tags": ["attaque", "mobilité"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Ombre_vive",
        "icon": ""
      },
      {
        "name": "Épines acérées",
        "slots": 1,
        "effects": "Augmente les dégâts infligés aux ennemis lors d'un dash à travers eux avec Ombre Ténébreuse.",
        "location": "Trouvé dans les Jardins de la Reine.",
        "price": "N/A",
        "tags": ["attaque", "dash"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/%C3%89pines_ac%C3%A9r%C3%A9es",
        "icon": ""
      },
      {
        "name": "Maître de l'aiguillon",
        "slots": 1,
        "effects": "Permet de charger plus rapidement les attaques concentrées.",
        "location": "Obtenu auprès de Sheo après apprentissage.",
        "price": "800 Géo",
        "tags": ["attaque", "technique"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_de_l%27aiguillon",
        "icon": ""
      },
      {
        "name": "Maître des sorts",
        "slots": 2,
        "effects": "Réduit légèrement le coût en Âme des sorts.",
        "location": "Trouvé dans les Jardins de la Reine.",
        "price": "N/A",
        "tags": ["sorts", "âme"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Ma%C3%AEtre_des_sorts",
        "icon": ""
      },
      {
        "name": "Sang vivant",
        "slots": 2,
        "effects": "Ajoute deux masques de Lifeblood temporaires lors du repos sur un banc.",
        "location": "Vendu par Salubra après avoir obtenu plusieurs charmes.",
        "price": "250 Géo",
        "tags": ["lifeblood", "défense"],
        "lien_wiki": "https://fr.hollowknight.wiki/w/Sang_vivant",
        "icon": ""
      }
    ]
  },
  {
    "catName": "Boss 17%",
    "items": [
      {
        "name": "Vaisseau Corrompu",
        "tags": "Boss",
        "description": "",
        "location": "",
        "reward": "",
        "percentage": "1%",
        "variant": "Proche Disparus",
        "success": "",
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
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
        "done": false,
        "icon": ""
      }
    ]
  },
  {
    "catName": "Rêve du Guerrier 7%",
    "items": [
      {
        "name": "Hu l'Ancien",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Galien",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Gorb",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Markoth",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Marmu",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Sans-yeux",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Xero",
        "tags": "Rêve du Guerrier",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      }
    ]
  },
  {
    "catName": "Rêveurs 3%",
    "items": [
      {
        "name": "Herrah la Bête",
        "tags": "Rêveur",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Lurien le Veilleur",
        "tags": "Rêveur",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Monameon l'Érudite",
        "tags": "Rêveur",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      }
    ]
  },
  {
    "catName": "Le Colisée des Fous 3%",
    "items": [
      {
        "name": "Épreuve du Guerrier",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Épreuve du Conquérant",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Épreuve des fous",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      }
    ]
  },
  {
    "catName": "Panthéon 4%",
    "items": [
      {
        "name": "Panthéon du Maître",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Panthéon du Peintre",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Panthéon du Grand Maître",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      },
      {
        "name": "Panthéon du Chevalier",
        "tags": "Divers",
        "description": "",
        "location": "",
        "acquisition": "",
        "percentage": "1%",
        "done": false,
        "icon": ""
      }
    ]
  },
]