/* ─────────────────────────────────────────────────────────
   French dictionary.

   The English copy lives directly in index.html (so the page
   reads fine with no JS and search engines get real content).
   On load, app.js snapshots that English text; this file only
   has to provide the French counterpart for each data-i18n key.

   To edit a translation: find the key, change the string.
   To add one: put data-i18n="my.key" on the element in
   index.html, then add "my.key" here.
   ───────────────────────────────────────────────────────── */

window.I18N_FR = {
  'skip': 'Aller au contenu',

  'nav.craft':   'Métier',
  'nav.ai':      'IA',
  'nav.path':    'Parcours',
  'nav.contact': 'Contact',

  'hero.eyebrow':   'Montréal, Canada',
  'hero.role':      'Ingénieur web senior',
  'hero.cofounder': 'Cofondateur de <strong>KaribouLab&nbsp;Inc.</strong>',
  'hero.lead':      'Je construis des produits de bout en bout — du modèle de données au dernier pixel. Douze ans à livrer du logiciel web, aujourd’hui avec des agents IA au cœur du métier.',
  'hero.cta1':      'Voir ce que je construis',
  'hero.cta2':      'Me contacter',

  'craft.label': 'Métier',
  'craft.title': 'Toute la stack, sinon ce n’est pas un produit.',
  'craft.p1':    'Douze ans de développement web : des interfaces embarquées dans des contrôleurs d’automatisation du bâtiment, des applications utilisées par des milliers d’utilisateurs, des API REST et GraphQL, et des architectures frontend devenues le standard de l’entreprise.',
  'craft.p2':    'Le frontend reste ma préférence — mais une fonctionnalité n’est pas terminée parce que l’écran s’affiche. Je porte le schéma, l’API, l’interface et la mise en production. C’est cette vision de bout en bout qui permet d’anticiper les compromis au lieu de les payer plus tard.',

  'ai.label': 'Travailler avec l’IA',
  'ai.title': 'Faire de l’ingénierie avec l’IA, pas à côté d’elle.',
  'ai.p1':    'L’IA n’a pas remplacé l’ingénierie — elle a déplacé l’endroit où le travail se fait. Je conçois le système, j’écris la spec, puis je lance des agents dessus. Toute mon organisation repose là-dessus : une base de connaissances produit qui centralise la vision, la feuille de route et les specs ; des agents de code qui implémentent à partir de ces specs ; des revues qui maintiennent le niveau d’exigence.',
  'ai.p2':    'C’est ce qui permet à une toute petite équipe de faire avancer plusieurs produits en parallèle.',
  'ai.c1.t':  'La spec avant le code',
  'ai.c1.d':  'Chaque fonctionnalité a une spec écrite, avec critères d’acceptation et cas limites, avant la première ligne. Les agents implémentent à partir de là — rien n’est deviné.',
  'ai.c2.t':  'Workflows agentiques',
  'ai.c2.d':  'Les tickets partent vers des agents autonomes qui créent la branche, développent et ouvrent la PR. J’orchestre le pipeline et je revois ce qui en sort.',
  'ai.c3.t':  'Le jugement reste humain',
  'ai.c3.d':  'L’architecture, les compromis et le choix de ce qui mérite d’être construit restent les miens. L’IA est un levier — pas un pilote automatique.',

  'kl.label': 'Cofondateur',
  'kl.p1':    'Un studio produit montréalais qui construit des applications simples et bien faites — du mobile, du web, et parfois l’outil dont on avait besoin nous-mêmes. Des fondations communes à tous les projets et un processus de développement pensé pour l’IA : c’est ce qui permet à une équipe minuscule de faire avancer un vrai portfolio.',

  'kl.p.echostep':   'Un jeu de podomètre. Les pas quotidiens deviennent une monnaie de jeu, avec classements et défis.',
  'kl.p.panelmap':   'Cartographiez votre panneau électrique une fois, et ne cherchez plus jamais quel disjoncteur fait quoi.',
  'kl.p.gitlabplus': 'Une extension Chrome pour les merge requests — filtres rapides, préréglages de relecteurs, badges d’ancienneté et approbation en un clic.',

  'path.label':        'Parcours',
  'path.title':        'Où j’ai construit des choses.',

  'path.facnet.when':  '2025 → aujourd’hui',
  'path.facnet.role':  'Développeur frontend senior · Team lead',
  'path.facnet.d':     'Un logiciel de facturation sur lequel des entreprises québécoises font tourner leur quotidien. Architecture frontend et tout le travail produit autour — le genre de logiciel où l’exactitude n’est pas négociable.',

  'path.workjam.when': '2019 → 2025 · 6 ans',
  'path.workjam.role': 'Team lead · Responsable technique de la plateforme web · Développeur frontend senior',
  'path.workjam.d':    'Le poste de travail numérique des équipes de terrain — horaires, tâches et communication pour de grandes organisations, à l’échelle de millions d’employés. Arrivé comme développeur frontend senior, j’ai pris la responsabilité technique de la plateforme web, puis la direction de l’équipe : API GraphQL, décisions d’architecture, et le côté humain de la livraison.',

  'path.distech.when': '2014 → 2019 · 5 ans',
  'path.distech.role': 'Ingénieur logiciel, frontend et backend',
  'path.distech.d':    'Automatisation du bâtiment. J’ai construit la plateforme web embarquée dans les contrôleurs installés au plafond : une API REST en Java/Jetty et une application de configuration et de diagnostic en Polymer et Web Components — l’architecture qui est ensuite devenue le standard frontend de l’entreprise. Puis un tableau de bord React mettant la consommation énergétique du bâtiment sous les yeux de ceux qui la paient, en temps réel.',
  'path.edu.t':        'École d’ingénieur',
  'path.edu.d':        'Un diplôme d’ingénieur français orienté cloud et logiciel, avec des échanges en Angleterre et à Montréal. Celui de Montréal a bien pris — je ne suis jamais reparti.',

  'contact.label': 'Contact',
  'contact.title': 'Parlons de ce que vous construisez.',
  'contact.p':     'Ouvert à la discussion — un produit, un poste, ou une idée que vous voulez mettre à l’épreuve.',

  'footer.made': 'Fait à Montréal <span aria-hidden="true">·</span> écrit à la main, sans framework'
};
