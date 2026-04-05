// =============================================
// THE LAST MEADOW
// =============================================
(function () {
  if (window._meadowCleanup)
    try {
      window._meadowCleanup();
    } catch (e) {}
  const oldGui = document.getElementById("meadowAutoGUI");
  oldGui && oldGui.remove();
  const svgDataUri = (e) => `data:image/svg+xml;utf8,${encodeURIComponent(e)}`,
    CDN = "https://cdn.discordapp.com/assets/content/",
    ICONS = {
      adventure:
        CDN +
        "282df26638d817cd1c3a926aeb51e7b2e871ce100b27fb56280a373af69c2cab.svg",
      craft:
        CDN +
        "b7febb5be9c15a67c50fc5978c3ecd1d258d0c424a0dc3ce41b2c8ac65c9e339.svg",
      wrongGame:
        CDN +
        "2c3bebb28ddf2cd9ecb1ba820617b9c88a7d21f203efa707c33bd597b82e0281.svg",
      battle:
        CDN +
        "19393b516c6014a9b5564ee7d03b33323e52c893ef9f989c8f6aeda1bcfb9756.svg",
      settings:
        CDN +
        "f89c2c158bfa6ddea9304df708f207b8a69853ddda9ee13f2066b7085605a475.svg",
      logo:
        CDN +
        "c9463738992e8f18a383be2725a5fa11d5f06b8a0820f0325033c086dd9dd649.png",
      flagBR: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#1f8f3a"/><polygon points="32,10 54,32 32,54 10,32" fill="#f4c430"/><circle cx="32" cy="32" r="12" fill="#22408c"/></svg>',
      ),
      flagFR: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="21.33" height="64" x="0" fill="#1d4ed8"/><rect width="21.34" height="64" x="21.33" fill="#ffffff"/><rect width="21.33" height="64" x="42.67" fill="#dc2626"/></svg>',
      ),
      flagEN: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#b91c1c"/><g fill="#ffffff"><rect y="6" width="64" height="6"/><rect y="18" width="64" height="6"/><rect y="30" width="64" height="6"/><rect y="42" width="64" height="6"/><rect y="54" width="64" height="6"/></g><rect width="28" height="28" fill="#1e3a8a"/></svg>',
      ),
      flagTR: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#e11d48"/><circle cx="27" cy="32" r="14" fill="#ffffff"/><circle cx="31" cy="32" r="11" fill="#e11d48"/><polygon points="43,32 47,34 46,29 50,26 45,26 43,21 41,26 36,26 40,29 39,34" fill="#ffffff"/></svg>',
      ),
      flagRU: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="21.33" y="0" fill="#ffffff"/><rect width="64" height="21.34" y="21.33" fill="#1d4ed8"/><rect width="64" height="21.33" y="42.67" fill="#dc2626"/></svg>',
      ),
      flagDE: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="21.33" y="0" fill="#111111"/><rect width="64" height="21.34" y="21.33" fill="#dc2626"/><rect width="64" height="21.33" y="42.67" fill="#f4c430"/></svg>',
      ),
      flagIT: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="21.33" height="64" x="0" fill="#16a34a"/><rect width="21.34" height="64" x="21.33" fill="#ffffff"/><rect width="21.33" height="64" x="42.67" fill="#dc2626"/></svg>',
      ),
      flagKA: svgDataUri(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#ffffff"/><rect x="26" width="12" height="64" fill="#dc2626"/><rect y="26" width="64" height="12" fill="#dc2626"/><g fill="#dc2626"><rect x="10" y="8" width="4" height="12"/><rect x="6" y="12" width="12" height="4"/><rect x="50" y="8" width="4" height="12"/><rect x="46" y="12" width="12" height="4"/><rect x="10" y="44" width="4" height="12"/><rect x="6" y="48" width="12" height="4"/><rect x="50" y="44" width="4" height="12"/><rect x="46" y="48" width="12" height="4"/></g></svg>',
      ),
    },
    ROT_MAP = {
      0: "ArrowUp",
      90: "ArrowRight",
      180: "ArrowDown",
      270: "ArrowLeft",
    },
    TEXTS = {
      pt: {
        adventure: "Aventura",
        craft: "Criação",
        wrongGame: "Jogo Errado",
        battle: "Batalha",
        drag: "Arraste para mover",
        speeds: "Configurações de velocidade",
        advLabel: "Aventura (ms)",
        minigameDelay: "Batalha (ms)",
        craftLabel: "Criação (ms)",
        speedTip: "Menor = mais rápido",
        craftIdle: "Aguardando",
        craftEntering: "Abrindo",
        craftSolving: "Resolvendo",
        craftExiting: "Voltando",
        battleIdle: "Aguardando",
        battleEntering: "Abrindo",
        battleActive: "Defendendo",
        battleDone: "Vitória",
        battleExiting: "Voltando",
        paused: "Pausado",
        done: "Concluído",
        noResources: "Sem recursos",
        stats: "Estatísticas",
        account: "Conta",
        level: "Level atual",
        levelsGained: "Levels upados",
        advCount: "Aventuras",
        craftCount: "Criações",
        battleCount: "Batalhas",
        clicksCount: "Cliques",
        tabGeneral: "General",
        tabAchievements: "Conquistas",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          'Dispara 500 cliques rápidos para a conquista "Wrong Game".',
      },
      fr: {
        adventure: "Aventure",
        craft: "Artisanat",
        wrongGame: "Mauvais Jeu",
        battle: "Combat",
        drag: "Glisser pour deplacer",
        speeds: "Reglages de vitesse",
        advLabel: "Aventure (ms)",
        minigameDelay: "Combat (ms)",
        craftLabel: "Artisanat (ms)",
        speedTip: "Plus bas = plus rapide",
        craftIdle: "En attente",
        craftEntering: "Ouverture",
        craftSolving: "Resolution",
        craftExiting: "Retour",
        battleIdle: "En attente",
        battleEntering: "Ouverture",
        battleActive: "Defense",
        battleDone: "Victoire",
        battleExiting: "Retour",
        paused: "Pause",
        done: "Termine",
        noResources: "Pas de ressources",
        stats: "Statistiques",
        account: "Compte",
        level: "Niveau actuel",
        levelsGained: "Niveaux gagnes",
        advCount: "Aventures",
        craftCount: "Artisanats",
        battleCount: "Combats",
        clicksCount: "Clics",
        tabGeneral: "General",
        tabAchievements: "Succes",
        wrongGameAction: "Wrong Game",
        wrongGameHelp: 'Envoie 500 clics rapides pour le succes "Wrong Game".',
      },
      en: {
        adventure: "Adventure",
        craft: "Craft",
        wrongGame: "Wrong Game",
        battle: "Battle",
        drag: "Drag to move",
        speeds: "Speed Settings",
        advLabel: "Adventure (ms)",
        minigameDelay: "Battle (ms)",
        craftLabel: "Craft (ms)",
        speedTip: "Lower = faster",
        craftIdle: "Waiting",
        craftEntering: "Opening",
        craftSolving: "Solving",
        craftExiting: "Going back",
        battleIdle: "Waiting",
        battleEntering: "Opening",
        battleActive: "Defending",
        battleDone: "Victory",
        battleExiting: "Going back",
        paused: "Paused",
        done: "Done",
        noResources: "No resources",
        stats: "Stats",
        account: "Account",
        level: "Current level",
        levelsGained: "Levels gained",
        advCount: "Adventures",
        craftCount: "Crafts",
        battleCount: "Battles",
        clicksCount: "Clicks",
        tabGeneral: "General",
        tabAchievements: "Achievements",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          'Sends 500 rapid clicks for the "Wrong Game" achievement.',
      },
      tr: {
        adventure: "Macera",
        craft: "\u00dcretim",
        wrongGame: "Yanl\u0131\u015f Oyun",
        battle: "Sava\u015f",
        drag: "Ta\u015f\u0131mak i\u00e7in s\u00fcr\u00fckle",
        speeds: "H\u0131z Ayarlar\u0131",
        advLabel: "Macera (ms)",
        minigameDelay: "Sava\u015f (ms)",
        craftLabel: "\u00dcretim (ms)",
        speedTip: "Daha d\u00fc\u015f\u00fck = daha h\u0131zl\u0131",
        craftIdle: "Bekliyor",
        craftEntering: "A\u00e7\u0131l\u0131yor",
        craftSolving: "\u00c7\u00f6z\u00fcl\u00fcyor",
        craftExiting: "Geri d\u00f6n\u00fcl\u00fcyor",
        battleIdle: "Bekliyor",
        battleEntering: "A\u00e7\u0131l\u0131yor",
        battleActive: "Savunuyor",
        battleDone: "Zafer",
        battleExiting: "Geri d\u00f6n\u00fcl\u00fcyor",
        paused: "Duraklat\u0131ld\u0131",
        done: "Tamamland\u0131",
        noResources: "Kaynak yok",
        stats: "\u0130statistikler",
        account: "Hesap",
        level: "Seviye",
        levelsGained: "Kazan\u0131lan seviyeler",
        advCount: "Maceralar",
        craftCount: "\u00dcretimler",
        battleCount: "Sava\u015flar",
        clicksCount: "T\u0131klamalar",
        tabGeneral: "Genel",
        tabAchievements: "Ba\u015far\u0131lar",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          '"Wrong Game" ba\u015far\u0131m\u0131 i\u00e7in 500 h\u0131zl\u0131 t\u0131klama g\u00f6nderir.',
      },
      ru: {
        adventure: "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",
        craft: "\u041a\u0440\u0430\u0444\u0442",
        wrongGame: "\u041d\u0435 \u0442\u0430 \u0438\u0433\u0440\u0430",
        battle: "\u0411\u0438\u0442\u0432\u0430",
        drag: "\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f",
        speeds: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438",
        advLabel: "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 (\u043c\u0441)",
        minigameDelay: "\u0411\u0438\u0442\u0432\u0430 (\u043c\u0441)",
        craftLabel: "\u041a\u0440\u0430\u0444\u0442 (\u043c\u0441)",
        speedTip: "\u041c\u0435\u043d\u044c\u0448\u0435 = \u0431\u044b\u0441\u0442\u0440\u0435\u0435",
        craftIdle: "\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435",
        craftEntering: "\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435",
        craftSolving: "\u0420\u0435\u0448\u0435\u043d\u0438\u0435",
        craftExiting: "\u0412\u043e\u0437\u0432\u0440\u0430\u0442",
        battleIdle: "\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435",
        battleEntering: "\u041e\u0442\u043a\u0440\u044b\u0442\u0438\u0435",
        battleActive: "\u0417\u0430\u0449\u0438\u0442\u0430",
        battleDone: "\u041f\u043e\u0431\u0435\u0434\u0430",
        battleExiting: "\u0412\u043e\u0437\u0432\u0440\u0430\u0442",
        paused: "\u041f\u0430\u0443\u0437\u0430",
        done: "\u0413\u043e\u0442\u043e\u0432\u043e",
        noResources: "\u041d\u0435\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432",
        stats: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",
        account: "\u0410\u043a\u043a\u0430\u0443\u043d\u0442",
        level: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c",
        levelsGained: "\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043e \u0443\u0440\u043e\u0432\u043d\u0435\u0439",
        advCount: "\u041f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",
        craftCount: "\u041a\u0440\u0430\u0444\u0442\u044b",
        battleCount: "\u0411\u0438\u0442\u0432\u044b",
        clicksCount: "\u041a\u043b\u0438\u043a\u0438",
        tabGeneral: "\u041e\u0431\u0449\u0435\u0435",
        tabAchievements: "\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 500 \u0431\u044b\u0441\u0442\u0440\u044b\u0445 \u043a\u043b\u0438\u043a\u043e\u0432 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f "Wrong Game".',
      },
      de: {
        adventure: "Abenteuer",
        craft: "Herstellung",
        wrongGame: "Falsches Spiel",
        battle: "Kampf",
        drag: "Zum Verschieben ziehen",
        speeds: "Geschwindigkeitseinstellungen",
        advLabel: "Abenteuer (ms)",
        minigameDelay: "Kampf (ms)",
        craftLabel: "Herstellung (ms)",
        speedTip: "Niedriger = schneller",
        craftIdle: "Wartet",
        craftEntering: "\u00d6ffnet",
        craftSolving: "L\u00f6st",
        craftExiting: "Kehrt zur\u00fcck",
        battleIdle: "Wartet",
        battleEntering: "\u00d6ffnet",
        battleActive: "Verteidigt",
        battleDone: "Sieg",
        battleExiting: "Kehrt zur\u00fcck",
        paused: "Pausiert",
        done: "Fertig",
        noResources: "Keine Ressourcen",
        stats: "Statistiken",
        account: "Konto",
        level: "Aktuelles Level",
        levelsGained: "Erhaltene Level",
        advCount: "Abenteuer",
        craftCount: "Herstellungen",
        battleCount: "K\u00e4mpfe",
        clicksCount: "Klicks",
        tabGeneral: "Allgemein",
        tabAchievements: "Erfolge",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          'Sendet 500 schnelle Klicks f\u00fcr den "Wrong Game"-Erfolg.',
      },
      it: {
        adventure: "Avventura",
        craft: "Creazione",
        wrongGame: "Gioco Sbagliato",
        battle: "Battaglia",
        drag: "Trascina per spostare",
        speeds: "Impostazioni velocit\u00e0",
        advLabel: "Avventura (ms)",
        minigameDelay: "Battaglia (ms)",
        craftLabel: "Creazione (ms)",
        speedTip: "Pi\u00f9 basso = pi\u00f9 veloce",
        craftIdle: "In attesa",
        craftEntering: "Apertura",
        craftSolving: "Risoluzione",
        craftExiting: "Ritorno",
        battleIdle: "In attesa",
        battleEntering: "Apertura",
        battleActive: "Difesa",
        battleDone: "Vittoria",
        battleExiting: "Ritorno",
        paused: "In pausa",
        done: "Fatto",
        noResources: "Risorse esaurite",
        stats: "Statistiche",
        account: "Account",
        level: "Livello attuale",
        levelsGained: "Livelli ottenuti",
        advCount: "Avventure",
        craftCount: "Creazioni",
        battleCount: "Battaglie",
        clicksCount: "Clic",
        tabGeneral: "Generale",
        tabAchievements: "Obiettivi",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          'Invia 500 clic rapidi per l\'obiettivo "Wrong Game".',
      },
      ka: {
        adventure: "\u10d7\u10d0\u10d5\u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10d5\u10d0\u10da\u10d8",
        craft: "\u10e5\u10e0\u10d0\u10e4\u10e2\u10d8",
        wrongGame: "\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8 \u10d7\u10d0\u10db\u10d0\u10e8\u10d8",
        battle: "\u10d1\u10e0\u10eb\u10dd\u10da\u10d0",
        drag: "\u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10d0\u10d3\u10d2\u10d8\u10da\u10d4\u10d1\u10da\u10d0\u10d3 \u10d2\u10d0\u10d3\u10d0\u10d0\u10d7\u10e0\u10d8\u10d4",
        speeds: "\u10e1\u10d8\u10e9\u10e5\u10d0\u10e0\u10d8\u10e1 \u10de\u10d0\u10e0\u10d0\u10db\u10d4\u10e2\u10e0\u10d4\u10d1\u10d8",
        advLabel: "\u10d7\u10d0\u10d5\u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10d5\u10d0\u10da\u10d8 (ms)",
        minigameDelay: "\u10d1\u10e0\u10eb\u10dd\u10da\u10d0 (ms)",
        craftLabel: "\u10e5\u10e0\u10d0\u10e4\u10e2\u10d8 (ms)",
        speedTip: "\u10dc\u10d0\u10d9\u10da\u10d4\u10d1\u10d8 = \u10e3\u10e4\u10e0\u10dd \u10e1\u10ec\u10e0\u10d0\u10e4\u10d8",
        craftIdle: "\u10da\u10dd\u10d3\u10d8\u10dc\u10d8",
        craftEntering: "\u10d2\u10d0\u10ee\u10e1\u10dc\u10d0",
        craftSolving: "\u10d0\u10db\u10dd\u10ee\u10e1\u10dc\u10d0",
        craftExiting: "\u10d3\u10d0\u10d1\u10e0\u10e3\u10dc\u10d4\u10d1\u10d0",
        battleIdle: "\u10da\u10dd\u10d3\u10d8\u10dc\u10d8",
        battleEntering: "\u10d2\u10d0\u10ee\u10e1\u10dc\u10d0",
        battleActive: "\u10d3\u10d0\u10ea\u10d5\u10d0",
        battleDone: "\u10d2\u10d0\u10db\u10d0\u10e0\u10ef\u10d5\u10d4\u10d1\u10d0",
        battleExiting: "\u10d3\u10d0\u10d1\u10e0\u10e3\u10dc\u10d4\u10d1\u10d0",
        paused: "\u10e8\u10d4\u10e9\u10d4\u10e0\u10d4\u10d1\u10e3\u10da\u10d8",
        done: "\u10d3\u10d0\u10e1\u10e0\u10e3\u10da\u10d3\u10d0",
        noResources: "\u10e0\u10d4\u10e1\u10e3\u10e0\u10e1\u10d4\u10d1\u10d8 \u10d0\u10e0 \u10d0\u10e0\u10d8\u10e1",
        stats: "\u10e1\u10e2\u10d0\u10e2\u10d8\u10e1\u10e2\u10d8\u10d9\u10d0",
        account: "\u10d0\u10dc\u10d2\u10d0\u10e0\u10d8\u10e8\u10d8",
        level: "\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4 \u10d3\u10dd\u10dc\u10d4",
        levelsGained: "\u10db\u10d8\u10e6\u10d4\u10d1\u10e3\u10da\u10d8 \u10d3\u10dd\u10dc\u10d4\u10d4\u10d1\u10d8",
        advCount: "\u10d7\u10d0\u10d5\u10d2\u10d0\u10d3\u10d0\u10e1\u10d0\u10d5\u10da\u10d4\u10d1\u10d8",
        craftCount: "\u10e5\u10e0\u10d0\u10e4\u10e2\u10d4\u10d1\u10d8",
        battleCount: "\u10d1\u10e0\u10eb\u10dd\u10da\u10d4\u10d1\u10d8",
        clicksCount: "\u10d9\u10da\u10d8\u10d9\u10d4\u10d1\u10d8",
        tabGeneral: "\u10d6\u10dd\u10d2\u10d0\u10d3\u10d8",
        tabAchievements: "\u10db\u10d8\u10e6\u10ec\u10d4\u10d5\u10d4\u10d1\u10d8",
        wrongGameAction: "Wrong Game",
        wrongGameHelp:
          '"Wrong Game" \u10db\u10d8\u10e6\u10ec\u10d4\u10d5\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1 \u10d0\u10d2\u10d6\u10d0\u10d5\u10dc\u10d8\u10e1 500 \u10e1\u10ec\u10e0\u10d0\u10e4 \u10d3\u10d0\u10d9\u10da\u10d8\u10d9\u10d4\u10d1\u10d0\u10e1.',
      },
    };
  let advInterval = null,
    clkInterval = null,
    renderInterval = null,
    pollInterval = null,
    clkCount = 0,
    advOn = !1,
    crOn = !1,
    btOn = !1,
    clkRunning = !1,
    dragging = !1,
    lang = "en",
    advDelay = 200,
    crDelay = 520,
    activeNav = null,
    activeTab = "general";
  const CS_IDLE = 0,
    CS_ENTERING = 1,
    CS_SOLVING = 2,
    CS_EXITING = 3,
    CS_WAITING = 4;
  let crState = CS_IDLE,
    crTimer = null,
    crBusy = !1,
    crTotalWait = 0,
    crWaitStart = 0;
  const BS_IDLE = 0,
    BS_ENTERING = 1,
    BS_ACTIVE = 2,
    BS_DONE = 3,
    BS_EXITING = 4,
    BS_WAITING = 5;
  let btState = BS_IDLE,
    btTimer = null,
    btRAF = null,
    btBusy = !1,
    btTotalWait = 0,
    btWaitStart = 0,
    btLockedTarget = null,
    btGameDoc = null,
    btGameWin = null;
  const uiState = {
    accountName: "--",
    currentLevel: "--",
    initialLevel: null,
    levelsGained: 0,
    adventureRuns: 0,
    craftRuns: 0,
    battleRuns: 0,
    totalClicks: 0,
  };
  const RANGER_HASH =
    "16fb25536f00a7996cbdf5bfff2ef0d09459f580af9e67d380263f5ead43055e";
  const GO_BACK_BTN_SEL = ".button__65fca.buttonWhite__65fca.clickable__5c90e";
  const OUT_OF_RESOURCES_RE = /out of resources/i;
  const PRIEST_MATCHED_CLASS = "matched__0dcd3";
  const CFG = {
    pollMs: 25,
    keyDelayMs: 70,
    openDelayMs: 180,
    minigameDelayMs: 90,
    recoverStuckMs: 1500,
    palTopDelta: 120,
    palDualCoverRatio: 1.08,
    priestClickDelayMs: 28,
    priestTripletDelayMs: 120,
    goBackScanMs: 60,
    goBackCooldownMs: 250,
  };
  const KEY_MAP = {
    ArrowLeft: {
      key: "ArrowLeft",
      code: "ArrowLeft",
      keyCode: 37,
      which: 37,
    },
    ArrowRight: {
      key: "ArrowRight",
      code: "ArrowRight",
      keyCode: 39,
      which: 39,
    },
    ArrowUp: {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      which: 38,
    },
    ArrowDown: {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      which: 40,
    },
    " ": { key: " ", code: "Space", keyCode: 32, which: 32 },
    Space: { key: " ", code: "Space", keyCode: 32, which: 32 },
  };
  let crIconEl,
    crTextEl,
    btIconEl,
    btTextEl,
    btMode = null,
    priestBusy = !1,
    lastSeqKey = "",
    lastGoBackClickAt = 0,
    lastBattleActionAt = 0,
    crRecoverSince = 0,
    btRecoverSince = 0,
    activationSeq = 0,
    craftActivationOrder = 0,
    battleActivationOrder = 0;
  function hd(e) {
    return e + (2 * Math.random() - 1) * e * 0.15;
  }
  function sleep(e) {
    return new Promise((t) => setTimeout(t, e));
  }
  function isVisible(e) {
    if (!(e instanceof Element)) return !1;
    if (!document.contains(e)) return !1;
    const t = e.getBoundingClientRect();
    if (t.width < 2 || t.height < 2) return !1;
    const n = getComputedStyle(e);
    if ("none" === n.display || "hidden" === n.visibility) return !1;
    const a = parseFloat(n.opacity || "1");
    return !Number.isFinite(a) || a >= 0.02;
  }
  function normalizeKeyName(e) {
    if (!e) return null;
    const t = String(e).trim();
    return "Space" === t || "Spacebar" === t
      ? " "
      : "Left" === t
        ? "ArrowLeft"
        : "Right" === t
          ? "ArrowRight"
          : "Up" === t
            ? "ArrowUp"
            : "Down" === t
              ? "ArrowDown"
              : t;
  }
  function sendKey(e, t) {
    if (!e) return;
    const n = normalizeKeyName(t),
      a = KEY_MAP[n];
    if (!a) return;
    const o = {
      bubbles: !0,
      cancelable: !0,
      ...a,
    };
    try {
      e.dispatchEvent(new KeyboardEvent("keydown", o));
      e.dispatchEvent(new KeyboardEvent("keypress", o));
      e.dispatchEvent(new KeyboardEvent("keyup", o));
    } catch (e) {}
  }
  function emitPointer(e, t, n) {
    if (
      !e ||
      "function" != typeof e.dispatchEvent ||
      "function" != typeof PointerEvent
    )
      return;
    try {
      e.dispatchEvent(new PointerEvent(t, n));
    } catch (e) {}
  }
  function emitMouse(e, t, n) {
    if (!e || "function" != typeof e.dispatchEvent) return;
    try {
      e.dispatchEvent(new MouseEvent(t, n));
    } catch (e) {}
  }
  function hardClick(e) {
    if (!e) return !1;
    try {
      "function" == typeof e.focus && e.focus({ preventScroll: !0 });
    } catch (e) {}
    const t = e.getBoundingClientRect();
    if (t.width < 2 || t.height < 2) return !1;
    const n = t.left + t.width / 2,
      a = t.top + t.height / 2,
      o = document.elementFromPoint(n, a),
      r = [e, o].filter(Boolean),
      i = {
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: n,
        clientY: a,
      },
      l = {
        ...i,
        button: 0,
        buttons: 1,
      },
      c = {
        ...i,
        button: 0,
        buttons: 0,
      },
      d = {
        ...l,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0,
      },
      s = {
        ...c,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0,
      };
    for (const e of r)
      (emitPointer(e, "pointerdown", d), emitMouse(e, "mousedown", l));
    for (const e of r)
      (emitPointer(e, "pointerup", s),
        emitMouse(e, "mouseup", c),
        emitMouse(e, "click", c));
    try {
      e.click();
    } catch (e) {}
    try {
      e.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          bubbles: !0,
          cancelable: !0,
        }),
      );
      e.dispatchEvent(
        new KeyboardEvent("keyup", {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          which: 13,
          bubbles: !0,
          cancelable: !0,
        }),
      );
    } catch (e) {}
    return !0;
  }
  function tx(e) {
    return TEXTS[lang][e] || e;
  }
  function refreshAccountInfo() {
    const e = (function () {
      const e = document.querySelector(".accountPopoutButtonWrapper__37e49"),
        t = e?.querySelector(
          '.title_b6c092[data-text-variant="text-md/medium"]',
        ),
        n = (t?.textContent || "").trim();
      return n && n.length <= 32 ? n : null;
    })();
    e && (uiState.accountName = e);
    const t = (function () {
      const e = document.querySelector(
        '.levelText_f61205[data-text-variant="heading-xxl/bold"]',
      );
      return (e?.textContent || "").trim() || null;
    })();
    t && (uiState.currentLevel = t);
    const n = (function () {
        const e = document.querySelector(".accountPopoutButtonWrapper__37e49"),
          t = e?.querySelector(".wrapper__44b0c .avatar__44b0c");
        return t?.src || t?.getAttribute("src") || null;
      })(),
      a = document.getElementById("accountAvatar"),
      o = document.getElementById("accountName"),
      r = document.getElementById("accountLevel");
    (a && n && (a.style.backgroundImage = `url("${n}")`),
      o && (o.textContent = uiState.accountName),
      r && (r.textContent = `${tx("level")}: ${uiState.currentLevel}`));
  }
  function setActiveTab(e) {
    activeTab = e;
    const t = document.getElementById("tabGeneral"),
      n = document.getElementById("tabAchievements"),
      a = document.getElementById("generalPanel"),
      o = document.getElementById("achievementsPanel"),
      r = "general" === e;
    (a && (a.style.display = r ? "block" : "none"),
      o && (o.style.display = r ? "none" : "block"),
      t &&
        ((t.style.background = r ? "#00c78b" : "#1a1a1a"),
        (t.style.color = r ? "#1a1a1a" : "#ffffff")),
      n &&
        ((n.style.background = r ? "#1a1a1a" : "#00c78b"),
        (n.style.color = r ? "#ffffff" : "#1a1a1a")));
  }
  function fmtTime(e) {
    return `${String(Math.floor(e / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`;
  }
  function setText(e, t) {
    e && e.textContent !== t && (e.textContent = t);
  }
  function setCSS(e, t, n) {
    e && e.style[t] !== n && (e.style[t] = n);
  }
  function v5Click(e) {
    e &&
      setTimeout(
        () => {
          (e.click(),
            e.dispatchEvent(
              new MouseEvent("mousedown", {
                bubbles: !0,
              }),
            ),
            e.dispatchEvent(
              new MouseEvent("mouseup", {
                bubbles: !0,
              }),
            ));
        },
        130 * Math.random() + 90,
      );
  }
  function dualClick(e) {
    return (
      !!e &&
      ((function (e) {
        if (!e) return !1;
        const t =
            e.querySelector('[role="button"]') ||
            e.querySelector(".clickable__5c90e") ||
            e.closest('[role="button"]') ||
            e.closest(".clickable__5c90e") ||
            e,
          n = t.getBoundingClientRect();
        if (0 === n.width || 0 === n.height) return !1;
        const a = n.left + n.width / 2 + (4 * Math.random() - 2),
          o = n.top + n.height / 2 + (4 * Math.random() - 2),
          r = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            clientX: a,
            clientY: o,
            button: 0,
          };
        (t.dispatchEvent(
          new PointerEvent("pointerover", {
            ...r,
            pointerId: 1,
          }),
        ),
          t.dispatchEvent(
            new PointerEvent("pointerenter", {
              ...r,
              pointerId: 1,
              bubbles: !1,
            }),
          ),
          t.dispatchEvent(new MouseEvent("mouseover", r)),
          t.dispatchEvent(
            new MouseEvent("mouseenter", {
              ...r,
              bubbles: !1,
            }),
          ),
          t.dispatchEvent(
            new PointerEvent("pointerdown", {
              ...r,
              pointerId: 1,
            }),
          ),
          t.dispatchEvent(new MouseEvent("mousedown", r)),
          t.focus && t.focus(),
          t.dispatchEvent(
            new PointerEvent("pointerup", {
              ...r,
              pointerId: 1,
            }),
          ),
          t.dispatchEvent(new MouseEvent("mouseup", r)),
          t.dispatchEvent(new MouseEvent("click", r)),
          ("button" !== t.getAttribute("role") &&
            null === t.getAttribute("tabindex")) ||
            (t.dispatchEvent(
              new KeyboardEvent("keydown", {
                key: "Enter",
                code: "Enter",
                bubbles: !0,
              }),
            ),
            t.dispatchEvent(
              new KeyboardEvent("keyup", {
                key: "Enter",
                code: "Enter",
                bubbles: !0,
              }),
            )));
      })(e),
      setTimeout(() => v5Click(e), 150),
      !0)
    );
  }
  function findActivityCard(e) {
    const t = document.querySelector(".gameActions__8e80e");
    if (!t) return null;
    const n = t.querySelectorAll(".activityButton__8af73"),
      a = (function (e) {
        return (
          {
            adventure: 0,
            craft: 1,
            battle: 2,
          }[e] ?? -1
        );
      })(e);
    return (a >= 0 && n[a]) || null;
  }
  function findBtn(e) {
    const t = findActivityCard(e);
    if (!t) return null;
    const n = t.querySelector('.button__65fca[role="button"]');
    return !n || n.className.includes("disabled__65fca") ? null : n;
  }
  function getResourcePopup() {
    const e = document.querySelector(".container__139d4");
    if (!e) return null;
    const t = e.textContent || "";
    return t.includes("out of resources") || t.includes("try again") ? e : null;
  }
  function dismissPopup() {
    const e = getResourcePopup();
    if (!e) return !1;
    const n = Date.now();
    if (n - lastGoBackClickAt < CFG.goBackCooldownMs) return !1;
    let t =
      e.closest("[role='dialog']")?.querySelector(GO_BACK_BTN_SEL) ||
      e.querySelector(GO_BACK_BTN_SEL) ||
      e.querySelector('.button__65fca[role="button"]');
    return (
      !t &&
        (t =
          [...document.querySelectorAll(GO_BACK_BTN_SEL)].find(isVisible) ||
          null),
      !!t &&
        ((lastGoBackClickAt = n),
        hardClick(t),
        setTimeout(() => hardClick(t), CFG.goBackScanMs),
        !0)
    );
  }
  function isSuccessScreen() {
    if (
      document.querySelector(
        ".rewardsContainer__24749 .continueButtonWrapper__24749 .clickable__5c90e",
      )
    )
      return !0;
    const e = document.querySelector(".container__73695");
    if (e) {
      if (e.textContent.includes("Success")) return !0;
    } else
      for (const e of document.querySelectorAll("[data-text-variant]"))
        if (e.textContent.includes("Success")) return !0;
    return !isMainScreen() && !!findContinueBtn();
  }
  function findContinueBtn() {
    return (
      document.querySelector(
        ".continueButtonWrapper__24749 .button__65fca.clickable__5c90e",
      ) ||
      document.querySelector(".continueButtonWrapper__24749 .clickable__5c90e")
    );
  }
  async function goBackToMain(e) {
    for (let t = 0; t < e; t++) {
      if (isMainScreen()) return !0;
      const e = findContinueBtn();
      if (e && (dualClick(e), await sleep(600), isMainScreen())) return !0;
      const t =
        document.querySelector('.back__51dc1[role="button"]') ||
        document.querySelector('[aria-label="Back"][role="button"]') ||
        document.querySelector('img[alt="Back"]')?.closest('[role="button"]') ||
        null;
      if (t && (dualClick(t), await sleep(600), isMainScreen())) return !0;
      e || t || (await sleep(400));
    }
    return isMainScreen();
  }
  function isMainScreen() {
    return !!findActivityCard("adventure");
  }
  function readCountdownFor(e) {
    const t = findActivityCard(e);
    if (!t) return null;
    const n = t.querySelector(".countdownText__8af73");
    if (!n) return null;
    const a = n.textContent?.trim().match(/(\d+):(\d+)/);
    return a ? 60 * parseInt(a[1]) + parseInt(a[2]) : null;
  }
  function readCraftCountdown() {
    return readCountdownFor("craft");
  }
  function readBattleCountdown() {
    return readCountdownFor("battle");
  }
  function getCraftArrows() {
    const e = document.querySelector(".sequences__34527");
    if (!e) return null;
    const t = e.querySelectorAll(".character__34527 img");
    return t.length > 0 ? [...t] : null;
  }
  function readCraftSequence() {
    const e = document.querySelector(".sequences__34527");
    if (!e) return null;
    const t = e.querySelectorAll(".character__34527");
    if (!t.length) return null;
    const n = [...e.querySelectorAll(".character__34527 img[alt]")]
      .map((e) => normalizeKeyName(e.getAttribute("alt")))
      .filter((e) => KEY_MAP[e]);
    if (n.length) {
      const e = n.join(",");
      return {
        arrows: n.map((e) => ({
          key: e,
          done: !1,
          error: !1,
        })),
        hasError: !1,
        sequenceKey: e,
        useAlt: !0,
      };
    }
    const a = [];
    let o = !1;
    for (const e of t) {
      const t = e.querySelector("img");
      if (!t) continue;
      const r = t.className || "",
        i = r.includes("arrowSuccess"),
        l = r.includes("arrowError") || r.includes("arrowFail");
      l && (o = !0);
      const c = (t.style.transform || "").match(/rotateZ\((\d+)deg\)/);
      a.push({
        key: ROT_MAP[c ? c[1] : "0"] || "ArrowUp",
        done: i,
        error: l,
      });
    }
    return {
      arrows: a,
      hasError: o,
      sequenceKey: a.map((e) => e.key).join(","),
      useAlt: !1,
    };
  }
  function findGameDocument() {
    const e =
      document.querySelector(".game__24749") ||
      document.querySelector(".game__5c62c");
    if (e && e.getBoundingClientRect().width > 0)
      return {
        doc: document,
        win: window,
      };
    for (const e of document.querySelectorAll("iframe"))
      try {
        const t = e.contentDocument || e.contentWindow?.document;
        if (!t) continue;
        if (t.querySelector(".game__24749") || t.querySelector(".game__5c62c"))
          return {
            doc: t,
            win: e.contentWindow,
          };
      } catch (e) {}
    return {
      doc: document,
      win: window,
    };
  }
  function getRangerTargets() {
    return [
      ...document.querySelectorAll(".targetContainer_b6b008, .target_b6b008"),
    ].filter(isVisible);
  }
  function hasPriestBoard() {
    return (
      [
        ...document.querySelectorAll(".gridItem__0dcd3, .gridItem__5c62c"),
      ].filter(isVisible).length >= 3
    );
  }
  function getBattleType() {
    if (getShield()) return "paladin";
    if (hasPriestBoard()) return "priest";
    if (getRangerTargets().length) return "ranger";
    return null;
  }
  function getBattleGame() {
    return (
      (btGameDoc || document).querySelector(".game__24749") ||
      (btGameDoc || document).querySelector(".game__5c62c") ||
      document.querySelector(".game__24749") ||
      document.querySelector(".game__5c62c")
    );
  }
  function getShield() {
    return (
      (btGameDoc || document).querySelector(".shield_cce732") ||
      document.querySelector(".shield_cce732")
    );
  }
  function readBattleScore() {
    const e =
      document.querySelector(".leftHeader__24749") ||
      document.querySelector('[class*="leftHeader"]');
    if (!e) return null;
    const t = e.querySelector('[data-text-variant="heading-xxl/normal"]');
    if (!t) return null;
    const n = t.textContent?.match(/(\d+)\s*\/\s*(\d+)/);
    return n
      ? {
          cur: +n[1],
          max: +n[2],
        }
      : null;
  }
  function getPriestGlyphSignature(e) {
    const t =
      e.querySelector(".gridAssetGlyph__0dcd3") ||
      e.querySelector(".gridAssetFront__0dcd3 svg") ||
      e.querySelector("svg");
    if (!t) return null;
    const n = [...t.querySelectorAll("path")]
      .map((e) => e.getAttribute("d") || "")
      .join("|");
    if (n && n.length > 12) return n;
    const a = (t.innerHTML || "").replace(/\s+/g, "");
    return a || null;
  }
  function buildPriestGroups() {
    const e = [
        ...document.querySelectorAll(".gridItem__0dcd3, .gridItem__5c62c"),
      ].filter(
        (e) =>
          isVisible(e) &&
          !e.classList.contains(PRIEST_MATCHED_CLASS) &&
          !e.className.includes(PRIEST_MATCHED_CLASS),
      ),
      t = new Map();
    for (const n of e) {
      const e = getPriestGlyphSignature(n);
      e && (t.has(e) || t.set(e, []), t.get(e).push(n));
    }
    return [...t.values()]
      .filter((e) => e.length >= 3)
      .map((e) => e.slice(0, 3));
  }
  async function solvePriestBoardOnce() {
    if (priestBusy || "priest" !== btMode) return;
    const e = Date.now();
    if (e - lastBattleActionAt < CFG.minigameDelayMs) return;
    priestBusy = !0;
    try {
      const e = buildPriestGroups();
      if (!e.length) return;
      for (const t of e) {
        const e = t.filter(
          (e) =>
            document.contains(e) &&
            isVisible(e) &&
            !e.classList.contains(PRIEST_MATCHED_CLASS) &&
            !e.className.includes(PRIEST_MATCHED_CLASS),
        );
        if (e.length < 3) continue;
        for (const t of e)
          "priest" === btMode &&
            ((lastBattleActionAt = Date.now()),
            hardClick(t),
            await sleep(CFG.minigameDelayMs));
        await sleep(CFG.minigameDelayMs);
      }
    } finally {
      priestBusy = !1;
    }
  }
  function processRangerTargets() {
    const e = Date.now();
    if (e - lastBattleActionAt < CFG.minigameDelayMs) return;
    for (const e of getRangerTargets()) {
      const t = e.querySelector(".clickable__5c90e") || e;
      lastBattleActionAt = Date.now();
      hardClick(t);
      sendKey(document.body, " ");
      break;
    }
  }
  function canNav(e) {
    return null === activeNav || activeNav === e;
  }
  function isCraftReadyForRun() {
    if (getCraftArrows()) return !0;
    const e = readCraftCountdown();
    return (null === e || e <= 0) && isMainScreen();
  }
  function isBattleReadyForRun() {
    if (getBattleType()) return !0;
    const e = readBattleCountdown();
    return (null === e || e <= 0) && isMainScreen();
  }
  function hasRunPriority(e) {
    if ("craft" === e) {
      if (!btOn || !battleActivationOrder || !isBattleReadyForRun()) return !0;
      if (!craftActivationOrder) return !1;
      return craftActivationOrder <= battleActivationOrder;
    }
    if ("battle" === e) {
      if (!crOn || !craftActivationOrder || !isCraftReadyForRun()) return !0;
      if (!battleActivationOrder) return !1;
      return battleActivationOrder <= craftActivationOrder;
    }
    return !0;
  }
  function lockNav(e) {
    activeNav = e;
  }
  function unlockNav(e) {
    activeNav === e && (activeNav = null);
  }
  function resetCraftSession() {
    (unlockNav("craft"),
      (crState = CS_IDLE),
      (crBusy = !1),
      (lastSeqKey = ""),
      (crRecoverSince = 0));
  }
  function resetBattleSession() {
    (cancelAnimationFrame(btRAF),
      (btRAF = null),
      unlockNav("battle"),
      (btState = BS_IDLE),
      (btBusy = !1),
      (btLockedTarget = null),
      (btMode = null),
      (priestBusy = !1),
      (btGameDoc = null),
      (btGameWin = null),
      (lastBattleActionAt = 0),
      (btRecoverSince = 0));
  }
  function recoverStuckActivities() {
    const e = Date.now();
    if (
      crOn &&
      !dragging &&
      !crBusy &&
      crState === CS_SOLVING &&
      !getCraftArrows() &&
      !isSuccessScreen() &&
      !getResourcePopup()
    ) {
      crRecoverSince || (crRecoverSince = e);
      if (e - crRecoverSince >= CFG.recoverStuckMs) {
        const t = readCraftCountdown();
        (resetCraftSession(),
          null !== t && t > 0
            ? ((crTotalWait = t),
              (crWaitStart = e),
              (crState = CS_WAITING))
            : ((crTotalWait = 0), (crWaitStart = 0)));
      }
    } else crRecoverSince = 0;
    if (
      btOn &&
      !dragging &&
      !btBusy &&
      btState === BS_ACTIVE &&
      !getBattleType() &&
      !isSuccessScreen() &&
      !getResourcePopup()
    ) {
      btRecoverSince || (btRecoverSince = e);
      if (e - btRecoverSince >= CFG.recoverStuckMs) {
        const t = readBattleCountdown();
        (resetBattleSession(),
          null !== t && t > 0
            ? ((btTotalWait = t),
              (btWaitStart = e),
              (btState = BS_WAITING))
            : ((btTotalWait = 0), (btWaitStart = 0)));
      }
    } else btRecoverSince = 0;
  }
  function reconcileActiveNav() {
    if ("craft" === activeNav) {
      const e = readCraftCountdown();
      if (
        crState === CS_WAITING ||
        (crState === CS_IDLE && !getCraftArrows()) ||
        (null !== e && e > 0)
      ) {
        unlockNav("craft");
      }
    }
    if ("battle" === activeNav) {
      const e = readBattleCountdown();
      if (
        btState === BS_WAITING ||
        (btState === BS_IDLE && !getBattleType()) ||
        (null !== e && e > 0)
      ) {
        unlockNav("battle");
      }
    }
  }
  function autoAdv() {
    const e = findBtn("adventure");
    e && (v5Click(e), uiState.adventureRuns++, uiState.totalClicks++);
  }
  function startAdv() {
    (stopAdv(), (advInterval = setInterval(autoAdv, advDelay)));
  }
  function stopAdv() {
    (clearInterval(advInterval), (advInterval = null));
  }
  function startSharedPoll() {
    clearInterval(pollInterval);
    pollInterval = setInterval(() => {
      recoverStuckActivities();
      reconcileActiveNav();
      dismissPopup();
      "ranger" === btMode && processRangerTargets();
      "priest" === btMode && solvePriestBoardOnce();
      refreshAccountInfo();
    }, CFG.pollMs);
  }
  function startCraft() {
    (stopCraft(), (crState = CS_IDLE));
    const e = () => {
      (!(async function () {
        if (crOn && !dragging && !crBusy) {
          crBusy = !0;
          try {
            if (getResourcePopup())
              return (
                dismissPopup(),
                await sleep(500),
                unlockNav("craft"),
                (crState = CS_WAITING),
                void (crBusy = !1)
              );
            if (isSuccessScreen()) {
              (uiState.craftRuns++, await goBackToMain(3), unlockNav("craft"));
              const e = readCraftCountdown();
              return (
                (crTotalWait = null !== e && e > 0 ? e : 0),
                (crWaitStart = Date.now()),
                (crState = CS_WAITING),
                void (crBusy = !1)
              );
            }
            switch (crState) {
              case CS_IDLE: {
                if (getCraftArrows()) {
                  (lockNav("craft"), (crState = CS_SOLVING));
                  break;
                }
                const e = readCraftCountdown();
                if (null !== e && e > 0) {
                  ((crTotalWait = e),
                    (crWaitStart = Date.now()),
                    unlockNav("craft"),
                    (crState = CS_WAITING));
                  break;
                }
                if (
                  !canNav("craft") ||
                  !hasRunPriority("craft") ||
                  !isMainScreen()
                )
                  break;
                const t = findBtn("craft");
                t &&
                  (lockNav("craft"),
                  hardClick(t),
                  setTimeout(() => hardClick(t), 180),
                  (crState = CS_ENTERING));
                break;
              }
              case CS_ENTERING: {
                let e = 0;
                for (; e < 4e3; ) {
                  if (getResourcePopup())
                    return (
                      dismissPopup(),
                      await sleep(500),
                      unlockNav("craft"),
                      void (crState = CS_WAITING)
                    );
                  if (getCraftArrows()) {
                    crState = CS_SOLVING;
                    break;
                  }
                  if (e > 800 && isMainScreen()) {
                    const e = findBtn("craft");
                    e && (hardClick(e), setTimeout(() => hardClick(e), 180));
                  }
                  (await sleep(200), (e += 200));
                }
                crState === CS_ENTERING &&
                  (unlockNav("craft"), (crState = CS_IDLE));
                break;
              }
              case CS_SOLVING:
                await sleep(300);
                for (let n = 0; n < 5 && crOn; n++) {
                  const n = readCraftSequence();
                  if (!n) {
                    lastSeqKey = "";
                    crState = CS_EXITING;
                    break;
                  }
                  if (n.hasError) {
                    lastSeqKey = "";
                    await sleep(1200);
                    continue;
                  }
                  if (
                    n.useAlt &&
                    n.sequenceKey &&
                    n.sequenceKey === lastSeqKey
                  ) {
                    await sleep(CFG.keyDelayMs);
                    continue;
                  }
                  const a = n.arrows.filter((e) => !e.done);
                  if (!a.length) {
                    lastSeqKey = "";
                    crState = CS_EXITING;
                    break;
                  }
                  if (n.useAlt) {
                    lastSeqKey = n.sequenceKey || "";
                    for (const e of a) {
                      sendKey(document, e.key);
                      sendKey(document.body, e.key);
                      document.activeElement &&
                        document.activeElement !== document.body &&
                        sendKey(document.activeElement, e.key);
                      await sleep(CFG.minigameDelayMs);
                    }
                    await sleep(CFG.minigameDelayMs);
                    if (!getCraftArrows()) {
                      lastSeqKey = "";
                      crState = CS_EXITING;
                      break;
                    }
                    continue;
                  }
                  if (
                    ((t = a[0].key),
                    sendKey(document, t),
                    await sleep(CFG.minigameDelayMs),
                    await sleep(CFG.minigameDelayMs),
                    !getCraftArrows())
                  ) {
                    lastSeqKey = "";
                    crState = CS_EXITING;
                    break;
                  }
                  const o = readCraftSequence();
                  if (!o) {
                    lastSeqKey = "";
                    crState = CS_EXITING;
                    break;
                  }
                  o.hasError && (await sleep(1200));
                }
                crState !== CS_SOLVING ||
                  getCraftArrows() ||
                  (crState = CS_EXITING);
                break;
              case CS_EXITING: {
                (await sleep(300), await goBackToMain(3), unlockNav("craft"));
                const e = readCraftCountdown();
                ((crTotalWait = null !== e && e > 0 ? e : 0),
                  (crWaitStart = Date.now()),
                  (crState = CS_WAITING));
                break;
              }
              case CS_WAITING: {
                const e = readCraftCountdown();
                null === e || e <= 0
                  ? (await sleep(2e3), (crState = CS_IDLE))
                  : (unlockNav("craft"),
                    0 === crTotalWait &&
                      ((crTotalWait = e), (crWaitStart = Date.now())));
                break;
              }
            }
          } finally {
            crBusy = !1;
          }
          var e, t;
        }
      })(),
        (crTimer = setTimeout(e, hd(crDelay))));
    };
    crTimer = setTimeout(e, hd(crDelay));
  }
  function stopCraft() {
    (clearTimeout(crTimer), (crTimer = null), resetCraftSession());
  }
  function battleFrame() {
    if (!btOn || btState !== BS_ACTIVE) return;
    if ("ranger" === btMode) {
      processRangerTargets();
      btRAF = requestAnimationFrame(battleFrame);
      return;
    }
    if ("priest" === btMode) {
      solvePriestBoardOnce();
      btRAF = requestAnimationFrame(battleFrame);
      return;
    }
    if (Date.now() - lastBattleActionAt < CFG.minigameDelayMs) {
      btRAF = requestAnimationFrame(battleFrame);
      return;
    }
    const e = btGameDoc || document,
      t = e.querySelector(".game__24749"),
      n = e.querySelector(".shield_cce732"),
      a = e.querySelector(".container__24749") || (t ? t.parentElement : null);
    if (!t || !n) return void (btRAF = requestAnimationFrame(battleFrame));
    const o = t.getBoundingClientRect(),
      r = a ? a.getBoundingClientRect() : null;
    let i =
      o.width > 0 && o.height > 0
        ? o
        : r && r.width > 0 && r.height > 0
          ? r
          : null;
    const l = parseFloat(n.style.top),
      c = [];
    for (const e of t.querySelectorAll(".projectile_cce732")) {
      const t = parseFloat(e.style.left),
        n = parseFloat(e.style.top);
      isNaN(t) ||
        isNaN(n) ||
        c.push({
          el: e,
          x: t,
          y: n,
        });
    }
    let d = null;
    if (
      (btLockedTarget &&
        ((d = c.find((e) => e.el === btLockedTarget)),
        d || (btLockedTarget = null)),
      !d && c.length > 0)
    ) {
      const e = isNaN(l) ? c : c.filter((e) => e.y < l);
      if (e.length > 0) {
        e.sort((e, t) => t.y - e.y);
        const t = e[0],
          n = e[1],
          a = parseFloat(getComputedStyle(n || document.body).width || "0"),
          o = parseFloat(getComputedStyle(t.el).width || "0"),
          r = Math.max(
            96,
            parseFloat(getComputedStyle(n || document.body).width || "0"),
          );
        if (
          n &&
          t &&
          t.y - n.y <= CFG.palTopDelta &&
          Math.abs(t.x - n.x) <=
            Math.max(r, o || 0, a || 0) * CFG.palDualCoverRatio
        ) {
          d = {
            el: t.el,
            x: (t.x + n.x) / 2,
            y: t.y,
          };
        } else d = t;
      }
      btLockedTarget = d ? d.el : null;
    }
    const s = n.style.left.includes("%");
    let u = d ? d.x : s ? 50 : i ? i.width / 2 : 500;
    if (((u = Math.max(20, Math.min((i ? i.width : 2e3) - 20, u))), i)) {
      lastBattleActionAt = Date.now();
      const e = {
        clientX: i.left + u,
        clientY: i.top + 0.85 * i.height,
        bubbles: !0,
        cancelable: !0,
        view: btGameWin || window,
      };
      (t.dispatchEvent(new MouseEvent("mousemove", e)),
        t.dispatchEvent(
          new PointerEvent("pointermove", {
            ...e,
            pointerId: 1,
          }),
        ),
        a &&
          a !== t &&
          (a.dispatchEvent(new MouseEvent("mousemove", e)),
          a.dispatchEvent(
            new PointerEvent("pointermove", {
              ...e,
              pointerId: 1,
            }),
          )),
        (btGameDoc || document).dispatchEvent(new MouseEvent("mousemove", e)),
        (btGameWin || window).dispatchEvent(new MouseEvent("mousemove", e)));
    }
    if (Math.abs(parseFloat(n.style.left) - u) >= 50)
      if (s) {
        const e = i ? i.width : 2e3;
        n.style.left = ((u / e) * 100).toFixed(2) + "%";
      } else n.style.left = u + "px";
    btRAF = requestAnimationFrame(battleFrame);
  }
  function startBattle() {
    (stopBattle(), (btState = BS_IDLE));
    const e = () => {
      (!(async function () {
        if (btOn && !dragging && !btBusy) {
          btBusy = !0;
          try {
            if (getResourcePopup())
              return (
                dismissPopup(),
                await sleep(500),
                unlockNav("battle"),
                cancelAnimationFrame(btRAF),
                (btRAF = null),
                (btState = BS_WAITING),
                void (btBusy = !1)
              );
            if (isSuccessScreen()) {
              (uiState.battleRuns++,
                cancelAnimationFrame(btRAF),
                (btRAF = null),
                await goBackToMain(3),
                unlockNav("battle"));
              const e = readBattleCountdown();
              return (
                (btTotalWait = null !== e && e > 0 ? e : 0),
                (btWaitStart = Date.now()),
                (btState = BS_WAITING),
                void (btBusy = !1)
              );
            }
            switch (btState) {
              case BS_IDLE: {
                const e = getBattleType();
                if (e) {
                  const t = findGameDocument();
                  ((btMode = e),
                    (btGameDoc = t.doc),
                    (btGameWin = t.win),
                    lockNav("battle"),
                    (btState = BS_ACTIVE),
                    (btLockedTarget = null),
                    cancelAnimationFrame(btRAF),
                    (btRAF = requestAnimationFrame(battleFrame)));
                  break;
                }
                const n = readBattleCountdown();
                if (null !== n && n > 0) {
                  ((btTotalWait = n),
                    (btWaitStart = Date.now()),
                    unlockNav("battle"),
                    (btState = BS_WAITING));
                  break;
                }
                if (
                  !canNav("battle") ||
                  !hasRunPriority("battle") ||
                  !isMainScreen()
                )
                  break;
                const t = findBtn("battle");
                t &&
                  (lockNav("battle"),
                  hardClick(t),
                  setTimeout(() => hardClick(t), CFG.openDelayMs),
                  (btState = BS_ENTERING));
                break;
              }
              case BS_ENTERING: {
                let e = 0;
                for (; e < 4e3; ) {
                  if (getResourcePopup())
                    return (
                      dismissPopup(),
                      await sleep(500),
                      unlockNav("battle"),
                      void (btState = BS_WAITING)
                    );
                  const t = getBattleType();
                  if (t) {
                    ((btState = BS_ACTIVE),
                      (btMode = t),
                      (btLockedTarget = null));
                    const e = findGameDocument();
                    ((btGameDoc = e.doc),
                      (btGameWin = e.win),
                      cancelAnimationFrame(btRAF),
                      (btRAF = requestAnimationFrame(battleFrame)));
                    break;
                  }
                  if (e > 800 && isMainScreen()) {
                    const e = findBtn("battle");
                    e &&
                      (hardClick(e),
                      setTimeout(() => hardClick(e), CFG.openDelayMs));
                  }
                  (await sleep(200), (e += 200));
                }
                btState === BS_ENTERING &&
                  (unlockNav("battle"), (btState = BS_IDLE));
                break;
              }
              case BS_ACTIVE: {
                btMode || (btMode = getBattleType());
                if ("paladin" === btMode) {
                  const e = readBattleScore();
                  e &&
                    e.cur >= e.max &&
                    (uiState.battleRuns++,
                    cancelAnimationFrame(btRAF),
                    (btRAF = null),
                    (btLockedTarget = null),
                    (btMode = null),
                    (btState = BS_DONE));
                } else if ("priest" === btMode) {
                  hasPriestBoard() || !isSuccessScreen() || (btState = BS_DONE);
                } else if ("ranger" === btMode) {
                  processRangerTargets();
                }
                break;
              }
              case BS_DONE:
                (await sleep(1e3), (btState = BS_EXITING));
                break;
              case BS_EXITING: {
                (await sleep(300), await goBackToMain(3), unlockNav("battle"));
                const e = readBattleCountdown();
                ((btTotalWait = null !== e && e > 0 ? e : 0),
                  (btWaitStart = Date.now()),
                  (btState = BS_WAITING));
                break;
              }
              case BS_WAITING: {
                const e = readBattleCountdown();
                null === e || e <= 0
                  ? (await sleep(2e3), (btState = BS_IDLE))
                  : (unlockNav("battle"),
                    0 === btTotalWait &&
                      ((btTotalWait = e), (btWaitStart = Date.now())));
                break;
              }
            }
          } finally {
            btBusy = !1;
          }
        }
      })(),
        (btTimer = setTimeout(e, hd(400))));
    };
    btTimer = setTimeout(e, hd(400));
  }
  function stopBattle() {
    (clearTimeout(btTimer), (btTimer = null), resetBattleSession());
  }
  function do500Clicks() {
    if (clkRunning) return;
    ((clkRunning = !0), (clkCount = 0));
    const e = (
        document.querySelector(".container__6952e") || document.body
      ).getBoundingClientRect(),
      t = e.left + e.width / 2,
      n = e.top + e.height / 2 - 50;
    clkInterval = setInterval(() => {
      if (clkCount >= 500) {
        (clearInterval(clkInterval), (clkRunning = !1));
        const e = document.getElementById("achWrongGame");
        return void (
          e &&
          (setText(e.querySelector(".btnText"), tx("done")),
          (e.style.background = "#00c78b"),
          (e.style.color = "#1a1a1a"))
        );
      }
      (clkCount++, uiState.totalClicks++);
      const e = document.getElementById("achWrongGame");
      if (e) {
        const t = clkCount / 5;
        ((e.style.background = `linear-gradient(90deg,#00c78b ${t}%,#f5c400 ${t}%)`),
          setText(
            e.querySelector(".btnText"),
            `${tx("wrongGame")} (${Math.round(t)}%)`,
          ));
      }
      const a = document.elementFromPoint(t, n);
      a &&
        a.dispatchEvent(
          new MouseEvent("click", {
            clientX: t + (90 * Math.random() - 45),
            clientY: n + (90 * Math.random() - 45),
            bubbles: !0,
          }),
        );
    }, 34);
  }
  function updateLang() {
    const e = document.getElementById("langIcon");
    if (e) {
      const t = {
        pt: ICONS.flagBR,
        en: ICONS.flagEN,
        fr: ICONS.flagFR,
        tr: ICONS.flagTR,
        ru: ICONS.flagRU,
        de: ICONS.flagDE,
        it: ICONS.flagIT,
        ka: ICONS.flagKA,
      };
      e.style.backgroundImage = `url("${t[lang] || ICONS.flagBR}")`;
    }
    const t = {
      pt: "Portugu\u00eas",
      en: "English",
      fr: "Fran\u00e7ais",
      tr: "T\u00fcrk\u00e7e",
      ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
      de: "Deutsch",
      it: "Italiano",
      ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
    };
    document.querySelectorAll("[data-lang-option]").forEach((e) => {
      const n = e.getAttribute("data-lang-option"),
        a = n === lang,
        o = e.querySelector("span:last-child");
      ((e.style.background = a ? "#00c78b" : "#f8f1e3"),
        (e.style.justifyContent = "flex-start"),
        (e.style.whiteSpace = "nowrap"),
        (e.style.color = "#1a1a1a"),
        (e.style.boxShadow = a ? "inset 0 0 0 2px #1a1a1a" : "none"));
      o && n && t[n] && (o.textContent = t[n]);
    });
    const n = document.querySelector("#advBtn .btnText");
    (n && setText(n, tx("adventure")),
      setText(document.getElementById("tabGeneral"), tx("tabGeneral")),
      setText(
        document.getElementById("tabAchievements"),
        tx("tabAchievements"),
      ),
      setText(
        document.querySelector("#achWrongGame .btnText"),
        tx("wrongGameAction"),
      ),
      setText(document.getElementById("wrongGameHelp"), tx("wrongGameHelp")),
      setText(document.getElementById("speedsTitle"), tx("speeds")));
    const a = document.getElementById("advLabel");
    a && (a.childNodes[0].textContent = tx("advLabel") + " : ");
    const o = document.getElementById("sliderMinigameDelay")?.previousSibling;
    o &&
      o.nodeType === Node.ELEMENT_NODE &&
      (o.childNodes[0].textContent = tx("minigameDelay") + " : ");
    const r = document.getElementById("craftLabel");
    (r && (r.childNodes[0].textContent = tx("craftLabel") + " : "),
      setText(document.getElementById("speedTip"), tx("speedTip")),
      refreshAccountInfo());
  }
  function makeBtn(e, t, n) {
    const a = document.createElement("button");
    ((a.id = e),
      (a.style.cssText =
        "width:100%;padding:14px;margin-bottom:8px;border:none;border-radius:8px;font-weight:bold;display:flex;align-items:center;gap:12px;justify-content:center;cursor:pointer;font-size:14px;min-height:48px;background:#1a1a1a;color:white;box-sizing:border-box"));
    const o = document.createElement("img");
    ((o.src = t),
      (o.draggable = !1),
      (o.style.cssText =
        "height:22px;width:22px;vertical-align:middle;filter:invert(1)"));
    const r = document.createElement("span");
    return (
      (r.className = "btnText"),
      a.appendChild(o),
      a.appendChild(r),
      n.appendChild(a),
      {
        btn: a,
        img: o,
        span: r,
      }
    );
  }
  (!(function () {
    const e = document.createElement("div");
    ((e.id = "meadowAutoGUI"),
      (e.style.cssText =
        "position:fixed;top:100px;left:40px;z-index:999999;width:270px;height:400px;background:#f8f1e3;border:5px solid #1a1a1a;border-radius:12px;box-shadow:8px 8px 0 #1a1a1a;font-family:system-ui,sans-serif;color:#1a1a1a;padding:12px;user-select:none;overflow:visible;box-sizing:border-box"),
      (e.innerHTML = `<button id="closeBtn" type="button" style="position:absolute;top:-18px;right:-18px;width:34px;height:34px;border:4px solid #1a1a1a;border-radius:50%;background:#ff6b57;color:#1a1a1a;font-size:18px;font-weight:900;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:4px 4px 0 #1a1a1a;z-index:4">×</button>\n    <div id="dragHeader" style="background:#00c78b;color:white;padding:10px 44px;margin:-12px -12px 12px -12px;border-radius:7px 7px 0 0;cursor:grab;display:flex;align-items:center;justify-content:center;position:relative;min-height:34px">\n        <div id="langPicker" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);z-index:3;width:24px;display:flex;align-items:center;justify-content:center">\n          <button id="langButton" type="button" style="display:flex;align-items:center;justify-content:center;padding:0;border:none;background:transparent;cursor:pointer">\n            <span id="langIcon" style="width:24px;height:24px;border-radius:50%;display:block;background:url('${ICONS.flagBR}') center/cover no-repeat;box-shadow:0 0 0 2px #1a1a1a"></span>\n          </button>\n          <div id="langMenu" style="display:none;position:absolute;top:38px;left:0;min-width:112px;padding:8px;background:#f8f1e3;border:3px solid #1a1a1a;border-radius:12px;box-shadow:5px 5px 0 #1a1a1a">\n            <button type="button" data-lang-option="pt" style="width:100%;display:flex;align-items:center;gap:8px;padding:8px;border:none;border-radius:8px;background:#f8f1e3;color:#1a1a1a;font-weight:700;cursor:pointer">\n              <span style="width:18px;height:18px;border-radius:50%;display:block;flex:none;background:url('${ICONS.flagBR}') center/cover no-repeat"></span>\n              <span>Português</span>\n            </button>\n            <button type="button" data-lang-option="en" style="width:100%;display:flex;align-items:center;gap:8px;padding:8px;border:none;border-radius:8px;background:#f8f1e3;color:#1a1a1a;font-weight:700;cursor:pointer">\n              <span style="width:18px;height:18px;border-radius:50%;display:block;flex:none;background:url('${ICONS.flagEN}') center/cover no-repeat"></span>\n              <span>English</span>\n            </button>\n            <button type="button" data-lang-option="fr" style="width:100%;display:flex;align-items:center;gap:8px;padding:8px;border:none;border-radius:8px;background:#f8f1e3;color:#1a1a1a;font-weight:700;cursor:pointer">\n              <span style="width:18px;height:18px;border-radius:50%;display:block;flex:none;background:url('${ICONS.flagFR}') center/cover no-repeat"></span>\n              <span>Français</span>\n            </button>\n          </div>\n        </div>\n        <img src="${ICONS.logo}" style="height:34px;max-width:100%;display:block;pointer-events:none" draggable="false">\n        <div id="settingsPicker" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);z-index:3;width:24px;display:flex;align-items:center;justify-content:center">\n          <button id="settingsBtn" type="button" style="display:flex;align-items:center;justify-content:center;padding:0;border:none;background:transparent;cursor:pointer">\n            <img src="${ICONS.settings}" style="height:18px;width:18px;display:block;filter:invert(1)" draggable="false">\n          </button>\n          <div id="settingsPanel" style="display:none;position:absolute;top:30px;right:-6px;width:220px;max-width:220px;padding:12px;background:#f8f1e3;border:3px solid #1a1a1a;border-radius:12px;box-shadow:5px 5px 0 #1a1a1a;color:#1a1a1a;box-sizing:border-box">\n            <div id="speedsTitle" style="font-weight:bold;margin-bottom:8px;text-align:center;color:#1a1a1a"></div>\n            <div style="margin-bottom:12px;color:#1a1a1a"><label id="advLabel" style="font-size:13px;color:#1a1a1a">Aventure (ms) : <span id="valAdv">${advDelay}</span></label><input type="range" id="sliderAdv" min="50" max="900" value="${advDelay}" style="width:100%"></div>\n            <div style="color:#1a1a1a"><label id="craftLabel" style="font-size:13px;color:#1a1a1a">Artisanat (ms) : <span id="valCraft">${crDelay}</span></label><input type="range" id="sliderCraft" min="300" max="800" value="${crDelay}" style="width:100%"></div>\n            <div id="speedTip" style="text-align:center;margin-top:10px;font-size:11px;opacity:.7;color:#1a1a1a"></div>\n          </div>\n        </div>\n    </div>\n    <div style="display:flex;align-items:center;justify-content:flex-start;gap:12px;margin-bottom:14px">\n        <div id="accountBox" style="display:flex;align-items:center;gap:8px;min-width:0">\n            <span id="accountAvatar" style="width:22px;height:22px;border-radius:50%;display:block;flex:none;background:#d8cdbb center/cover no-repeat;box-shadow:0 0 0 2px #1a1a1a"></span>\n            <div style="min-width:0;display:flex;flex-direction:column;gap:2px">\n              <span id="accountName" style="font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px">--</span>\n              <span id="accountLevel" style="font-size:11px;opacity:.8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px">Level: --</span>\n            </div>\n        </div>\n    </div>\n    <div style="display:flex;gap:8px;margin-bottom:12px">\n        <button id="tabGeneral" type="button" style="flex:1;padding:8px 10px;border:none;border-radius:8px;background:#00c78b;color:#1a1a1a;font-weight:800;cursor:pointer">General</button>\n        <button id="tabAchievements" type="button" style="flex:1;padding:8px 10px;border:none;border-radius:8px;background:#1a1a1a;color:#ffffff;font-weight:800;cursor:pointer">Conquistas</button>\n    </div>\n    <div id="tabContent" style="width:100%;height:260px;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:#1a1a1a #e8e0d3;box-sizing:border-box">\n    <div id="generalPanel" style="width:100%;box-sizing:border-box">\n        <div id="btnBox" style="width:100%;box-sizing:border-box"></div>\n    </div>\n    <div id="achievementsPanel" style="display:none;width:100%;box-sizing:border-box">\n        <div id="achBox" style="width:100%;box-sizing:border-box"></div>\n        <div id="wrongGameHelp" style="width:100%;margin-top:8px;padding:10px;background:#efe5d5;border:3px solid #1a1a1a;border-radius:8px;font-size:12px;line-height:1.35;color:#1a1a1a;box-sizing:border-box"></div>\n    </div>\n    </div>`),
      document.body.appendChild(e));
    const t = document.getElementById("tabContent");
    t &&
      t.insertAdjacentHTML(
        "beforebegin",
        '<style id="meadowScrollStyle">\n          #meadowAutoGUI #tabContent::-webkit-scrollbar{width:10px}\n          #meadowAutoGUI #tabContent::-webkit-scrollbar-track{background:#e8e0d3;border-left:2px solid #1a1a1a}\n          #meadowAutoGUI #tabContent::-webkit-scrollbar-thumb{background:#1a1a1a;border:2px solid #e8e0d3;border-radius:999px}\n        </style>',
      );
    const n = document.getElementById("btnBox"),
      o = makeBtn("advBtn", ICONS.adventure, n);
    o.btn.style.minHeight = "auto";
    const r = makeBtn("craftBtn", ICONS.craft, n);
    ((crIconEl = r.img), (crTextEl = r.span));
    const i = makeBtn("battleBtn", ICONS.battle, n);
    ((btIconEl = i.img), (btTextEl = i.span));
    const l = document.getElementById("achBox"),
      d = makeBtn("achWrongGame", ICONS.wrongGame, l);
    ((d.btn.style.minHeight = "auto"),
      (d.btn.style.fontSize = "13px"),
      (d.btn.style.justifyContent = "center"),
      (d.btn.style.padding = "12px"),
      (d.img.style.filter = "none"),
      (d.btn.style.background = "#f5c400"),
      (d.btn.style.color = "#1a1a1a"),
      (d.btn.style.border = "3px solid #1a1a1a"),
      (d.btn.style.marginBottom = "0"));
    const f = document.getElementById("dragHeader"),
      I = document.getElementById("closeBtn"),
      C = document.getElementById("langPicker"),
      P = document.getElementById("langButton"),
      D = document.getElementById("langMenu"),
      z = document.getElementById("settingsPicker"),
      W = document.getElementById("settingsBtn"),
      H = document.getElementById("settingsPanel"),
      j = document.getElementById("tabGeneral"),
      U = document.getElementById("tabAchievements");
    const appendLangOption = (e, t, n) => {
      if (!D || D.querySelector(`[data-lang-option="${e}"]`)) return;
      const a = document.createElement("button"),
        o = document.createElement("span"),
        r = document.createElement("span");
      ((a.type = "button"),
        a.setAttribute("data-lang-option", e),
        (a.style.cssText =
          "width:100%;display:flex;align-items:center;justify-content:flex-start;gap:8px;padding:8px;border:none;border-radius:8px;background:#f8f1e3;color:#1a1a1a;font-weight:700;cursor:pointer;white-space:nowrap"),
        (o.style.cssText = `width:18px;height:18px;border-radius:50%;display:block;flex:none;background:url('${n}') center/cover no-repeat`),
        (r.textContent = t),
        a.appendChild(o),
        a.appendChild(r),
        D.appendChild(a));
    };
    D && (D.style.minWidth = "160px");
    appendLangOption("tr", "T\u00fcrk\u00e7e", ICONS.flagTR);
    appendLangOption("ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", ICONS.flagRU);
    appendLangOption("de", "Deutsch", ICONS.flagDE);
    appendLangOption("it", "Italiano", ICONS.flagIT);
    appendLangOption("ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8", ICONS.flagKA);
    H && ((H.style.maxHeight = "320px"), (H.style.overflowY = "auto"));
    const appendSettingRange = (e) => {
      if (!H) return null;
      const t = document.createElement("div"),
        n = document.createElement("label"),
        a = document.createElement("span"),
        o = document.createElement("input");
      return (
        (t.style.cssText = "margin-bottom:12px;color:#1a1a1a"),
        (n.style.cssText = "font-size:13px;color:#1a1a1a"),
        (n.textContent = `${e.label} : `),
        (a.id = e.valueId),
        (a.textContent = String(e.format ? e.format(e.value) : e.value)),
        n.appendChild(a),
        (o.type = "range"),
        (o.id = e.sliderId),
        (o.min = String(e.min)),
        (o.max = String(e.max)),
        (o.value = String(e.value)),
        e.step && (o.step = String(e.step)),
        (o.style.width = "100%"),
        t.appendChild(n),
        t.appendChild(o),
        H.insertBefore(t, document.getElementById("speedTip")),
        {
          wrapper: t,
          label: n,
          value: a,
          slider: o,
        }
      );
    };
    const minigameDelaySetting = appendSettingRange({
      label: "Minigame Delay (ms)",
      sliderId: "sliderMinigameDelay",
      valueId: "valMinigameDelay",
      min: 50,
      max: 600,
      value: CFG.minigameDelayMs,
    });
    let O, J, oe, re;
    ((f.onmousedown = (t) => {
      t.target.closest("#langPicker") ||
        t.target.closest("#settingsPicker") ||
        "closeBtn" === t.target.id ||
        (t.preventDefault(),
        (dragging = !0),
        (f.style.cursor = "grabbing"),
        (oe = t.clientX),
        (re = t.clientY),
        (document.onmousemove = (t) => {
          ((O = oe - t.clientX),
            (J = re - t.clientY),
            (oe = t.clientX),
            (re = t.clientY));
          const n = e.offsetTop - J,
            a = e.offsetLeft - O,
            o = Math.max(0, window.innerHeight - e.offsetHeight),
            r = Math.max(0, window.innerWidth - e.offsetWidth);
          ((e.style.top = Math.min(Math.max(0, n), o) + "px"),
            (e.style.left = Math.min(Math.max(0, a), r) + "px"));
        }),
        (document.onmouseup = () => {
          ((document.onmousemove = document.onmouseup = null),
            (dragging = !1),
            (f.style.cursor = "grab"));
        }));
    }),
      P.addEventListener("click", (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          (D.style.display = "block" === D.style.display ? "none" : "block"));
      }),
      D.querySelectorAll("[data-lang-option]").forEach((e) => {
        e.addEventListener("click", () => {
          ((lang = e.getAttribute("data-lang-option")),
            (D.style.display = "none"),
            updateLang());
        });
      }),
      document.addEventListener("click", (e) => {
        (C.contains(e.target) || (D.style.display = "none"),
          z.contains(e.target) || (H.style.display = "none"));
      }),
      document.addEventListener("keydown", (e) => {
        "Escape" === e.key &&
          ((D.style.display = "none"), (H.style.display = "none"));
      }),
      I.addEventListener("click", () => {
        window._meadowCleanup && window._meadowCleanup();
      }),
      W.addEventListener("click", (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          (H.style.display = "block" === H.style.display ? "none" : "block"));
      }),
      j.addEventListener("click", () => setActiveTab("general")),
      U.addEventListener("click", () => setActiveTab("achievements")),
      d.btn.addEventListener("click", do500Clicks),
      o.btn.addEventListener("click", () => {
        ((advOn = !advOn),
          setCSS(o.img, "filter", advOn ? "none" : "invert(1)"),
          setCSS(o.btn, "background", advOn ? "#00c78b" : "#1a1a1a"),
          setCSS(o.btn, "color", advOn ? "#1a1a1a" : "white"),
          advOn ? startAdv() : stopAdv());
      }),
      r.btn.addEventListener("click", () => {
        ((crOn = !crOn),
          crOn
            ? ((craftActivationOrder = ++activationSeq), startCraft())
            : ((craftActivationOrder = 0), stopCraft()));
      }),
      i.btn.addEventListener("click", () => {
        ((btOn = !btOn),
          btOn
            ? ((battleActivationOrder = ++activationSeq), startBattle())
            : ((battleActivationOrder = 0), stopBattle()));
      }),
      document.getElementById("sliderAdv").addEventListener("input", (e) => {
        ((advDelay = parseInt(e.target.value)),
          setText(document.getElementById("valAdv"), String(advDelay)),
          advOn && startAdv());
      }),
      document.getElementById("sliderCraft").addEventListener("input", (e) => {
        ((crDelay = parseInt(e.target.value)),
          setText(document.getElementById("valCraft"), String(crDelay)),
          crOn && startCraft());
      }),
      minigameDelaySetting?.slider.addEventListener("input", (e) => {
        ((CFG.minigameDelayMs = parseInt(e.target.value)),
          setText(minigameDelaySetting.value, String(CFG.minigameDelayMs)));
      }),
      updateLang(),
      setActiveTab(activeTab),
      startSharedPoll(),
      (renderInterval = setInterval(() => {
        (!(function () {
          const e = document.getElementById("craftBtn");
          if (!e || !crIconEl || !crTextEl) return;
          const t = readCraftCountdown();
          if (!crOn)
            return (
              setText(crTextEl, tx("craft")),
              setCSS(crIconEl, "filter", "invert(1)"),
              setCSS(e, "background", "#1a1a1a"),
              void setCSS(e, "color", "white")
            );
          if (getResourcePopup())
            return (
              setText(crTextEl, tx("noResources")),
              setCSS(crIconEl, "filter", "none"),
              setCSS(e, "background", "#00c78b"),
              void setCSS(e, "color", "#1a1a1a")
            );
          if (null !== t && t > 0) {
            (!crTotalWait || t > crTotalWait) &&
              ((crTotalWait = t), (crWaitStart = Date.now()));
            const n = crTotalWait
              ? Math.min(
                  100,
                  ((Date.now() - crWaitStart) / 1e3 / crTotalWait) * 100,
                )
              : 0;
            return (
              setText(crTextEl, fmtTime(t)),
              setCSS(crIconEl, "filter", "invert(1)"),
              setCSS(
                e,
                "background",
                `linear-gradient(90deg,#00c78b ${n}%,#1a1a1a ${n}%)`,
              ),
              void setCSS(e, "color", "white")
            );
          }
          if (crState === CS_WAITING) {
            if (null !== t && crTotalWait > 0) {
              const n = Math.min(
                100,
                ((Date.now() - crWaitStart) / 1e3 / crTotalWait) * 100,
              );
              return (
                setText(crTextEl, fmtTime(t)),
                setCSS(crIconEl, "filter", "invert(1)"),
                setCSS(
                  e,
                  "background",
                  `linear-gradient(90deg,#00c78b ${n}%,#1a1a1a ${n}%)`,
                ),
                void setCSS(e, "color", "white")
              );
            }
            return (
              setText(crTextEl, tx("craftIdle")),
              setCSS(crIconEl, "filter", "none"),
              setCSS(e, "background", "#00c78b"),
              void setCSS(e, "color", "#1a1a1a")
            );
          }
          (setText(
            crTextEl,
            tx(
              crState === CS_IDLE && activeNav && "craft" !== activeNav
                ? "paused"
                : {
                    [CS_IDLE]: "craftIdle",
                    [CS_ENTERING]: "craftEntering",
                    [CS_SOLVING]: "craftSolving",
                    [CS_EXITING]: "craftExiting",
                  }[crState] || "craft",
            ),
          ),
            setCSS(crIconEl, "filter", "none"),
            setCSS(e, "background", "#00c78b"),
            setCSS(e, "color", "#1a1a1a"));
        })(),
          (function () {
            const e = document.getElementById("battleBtn");
            if (!e || !btIconEl || !btTextEl) return;
            const t = readBattleCountdown();
            if (!btOn)
              return (
                setText(btTextEl, tx("battle")),
                setCSS(btIconEl, "filter", "invert(1)"),
                setCSS(e, "background", "#1a1a1a"),
                void setCSS(e, "color", "white")
              );
            if (getResourcePopup())
              return (
                setText(btTextEl, tx("noResources")),
                setCSS(btIconEl, "filter", "none"),
                setCSS(e, "background", "#00c78b"),
                void setCSS(e, "color", "#1a1a1a")
              );
            if (null !== t && t > 0) {
              (!btTotalWait || t > btTotalWait) &&
                ((btTotalWait = t), (btWaitStart = Date.now()));
              const n = btTotalWait
                ? Math.min(
                    100,
                    ((Date.now() - btWaitStart) / 1e3 / btTotalWait) * 100,
                  )
                : 0;
              return (
                setText(btTextEl, fmtTime(t)),
                setCSS(btIconEl, "filter", "invert(1)"),
                setCSS(
                  e,
                  "background",
                  `linear-gradient(90deg,#00c78b ${n}%,#1a1a1a ${n}%)`,
                ),
                void setCSS(e, "color", "white")
              );
            }
            if (btState === BS_WAITING) {
              if (null !== t && btTotalWait > 0) {
                const n = Math.min(
                  100,
                  ((Date.now() - btWaitStart) / 1e3 / btTotalWait) * 100,
                );
                return (
                  setText(btTextEl, fmtTime(t)),
                  setCSS(btIconEl, "filter", "invert(1)"),
                  setCSS(
                    e,
                    "background",
                    `linear-gradient(90deg,#00c78b ${n}%,#1a1a1a ${n}%)`,
                  ),
                  void setCSS(e, "color", "white")
                );
              }
              return (
                setText(btTextEl, tx("battleIdle")),
                setCSS(btIconEl, "filter", "none"),
                setCSS(e, "background", "#00c78b"),
                void setCSS(e, "color", "#1a1a1a")
              );
            }
            if (btState === BS_ACTIVE) {
              const t = readBattleScore();
              if (t) {
                const n = (t.cur / t.max) * 100;
                return (
                  setText(btTextEl, `${tx("battleActive")} ${t.cur}/${t.max}`),
                  setCSS(btIconEl, "filter", "invert(1)"),
                  setCSS(
                    e,
                    "background",
                    `linear-gradient(90deg,#00c78b ${n}%,#1a1a1a ${n}%)`,
                  ),
                  void setCSS(e, "color", "white")
                );
              }
              return (
                setText(btTextEl, tx("battleActive")),
                setCSS(btIconEl, "filter", "none"),
                setCSS(e, "background", "#00c78b"),
                void setCSS(e, "color", "#1a1a1a")
              );
            }
            (setText(
              btTextEl,
              tx(
                btState === BS_IDLE && activeNav && "battle" !== activeNav
                  ? "paused"
                  : {
                      [BS_IDLE]: "battleIdle",
                      [BS_ENTERING]: "battleEntering",
                      [BS_DONE]: "battleDone",
                      [BS_EXITING]: "battleExiting",
                    }[btState] || "battle",
              ),
            ),
              setCSS(btIconEl, "filter", "none"),
              setCSS(e, "background", "#00c78b"),
              setCSS(e, "color", "#1a1a1a"));
          })(),
          refreshAccountInfo());
      }, 400)));
  })(),
    (window._meadowCleanup = () => {
      (stopAdv(),
        stopCraft(),
        stopBattle(),
        clearInterval(clkInterval),
        clearInterval(pollInterval),
        clearInterval(renderInterval),
        (crOn = advOn = btOn = !1));
      const e = document.getElementById("meadowScrollStyle");
      e && e.remove();
      const t = document.getElementById("meadowAutoGUI");
      t && t.remove();
    }),
    (window.stopMeadowScript = window._meadowCleanup));
})();
