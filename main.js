// --- Configuración de Idiomas (i18next) ---
const resources = {
    es: {
        translation: {
            "title": "The Chess Forge",
            "subtitle": "¡Forja tu maestría en ajedrez! Entrena y desafía a nuestra IA avanzada.",
            "legendaryGames": "Partidas Legendarias",
            "game1Title": "La Inmortal (1851)",
            "game1Desc": "Anderssen vs. Kieseritzky. Sacrificio total de piezas.",
            "game2Title": "La Siempreviva (1852)",
            "game2Desc": "Anderssen vs. Dufresne. Belleza táctica pura.",
            "game3Title": "La Partida del Siglo (1956)",
            "game3Desc": "Bobby Fischer (13 años) sacrifica su dama.",
            "game4Title": "La Ópera (1858)",
            "game4Desc": "Paul Morphy en un palco de ópera.",
            "greatChampions": "Grandes Campeones",
            "champ1Desc": "(Noruega) Campeón actual. Precisión de máquina y finales.",
            "champ2Desc": "(Rusia) Dominó 20 años con estilo agresivo.",
            "champ3Desc": "(EE.UU.) El genio que venció a la URSS en 1972.",
            "champ4Desc": "(Cuba) 'El Mozart del Ajedrez', juego natural.",
            "aiLevel": "Nivel de la IA:",
            "lvl1": "Nivel 1: Novato (Aleatorio)",
            "lvl2": "Nivel 2: Aprendiz",
            "lvl3": "Nivel 3: Intermedio",
            "lvl4": "Nivel 4: Avanzado",
            "lvl5": "Nivel 5: Master (Profundidad Max)",
            "playBtn": "Jugar vs IA",
            "demoBtn": "Ver Demo Live (Auto-Play)",
            "resetBtn": "Reiniciar Tablero",
            "statusWaiting": "Estado: Esperando...",
            "marketingTitle": "¡Conviértete en un maestro del ajedrez con The Chess Forge!",
            "marketingDesc": "Diseñada tanto para principiantes que quieren aprender como para jugadores que buscan un verdadero desafío, esta es tu forja personal para pulir tus habilidades.",
            "featuresTitle": "Características:",
            "feat1": "<strong>IA Adaptativa:</strong> Enfréntate a un oponente que se ajusta a tu nivel, desde novato hasta Gran Maestro.",
            "feat2": "<strong>Entrenamiento con Guías:</strong> Aprende a proteger tus piezas y a dominar el tablero con ayudas visuales y consejos en tiempo real.",
            "feat3": "<strong>Personalización Total:</strong> Crea una experiencia única con diferentes temas, y estilos de tableros y piezas.",
            "feat4": "<strong>Mide tu Progreso:</strong> Sigue tu evolución con un sistema de puntuación ELO y avanza en tu camino a la maestría.",
            "marketingFooter": "Cada partida es una lección. ¿Estás listo para forjar tu leyenda en el tablero? ¡Descarga The Chess Forge y empieza a jugar!",
            "aboutChess": "Acerca del Ajedrez",
            "whatIsChess": "¿Qué es el Ajedrez?",
            "chessDesc": "El ajedrez es un juego de estrategia abstracta y deporte mental para dos jugadores. Se desarrolla sobre un tablero cuadriculado de 64 casillas (8x8), donde se enfrentan dos ejércitos: las Blancas y las Negras.",
            "mainObjective": "Objetivo Principal",
            "objectiveDesc": "El fin último no es capturar todas las piezas, sino dar <strong>Jaque Mate</strong> al Rey contrario. Esto ocurre cuando el Rey está bajo amenaza directa de captura y no existe ningún movimiento legal para escapar.",
            "educationalValue": "Valor Pedagógico",
            "edu1": "<strong>Desarrolla el Pensamiento Crítico:</strong> Obliga a evaluar múltiples posibilidades y consecuencias antes de actuar.",
            "edu2": "<strong>Fomenta la Concentración:</strong> Requiere atención sostenida y análisis profundo.",
            "edu3": "<strong>Enseña Resiliencia:</strong> Los jugadores aprenden a manejar la derrota, analizar sus errores y mejorar constantemente.",
            "edu4": "<strong>Potencia la Memoria:</strong> Se ejercita el reconocimiento de patrones y la visualización espacial.",
            "historyTitle": "Breve Historia: 'El Viaje del Juego Real'",
            "origin": "El Origen: Chaturanga (India, Siglo VI)",
            "originDesc": "Todo comenzó en el valle del Indo. El antepasado más antiguo conocido es el <em>Chaturanga</em>, un juego de guerra que representaba las cuatro divisiones del ejército indio de la época: infantería (peones), caballería (caballos), elefantes (alfiles) y carros (torres), liderados por un Rey y su consejero.",
            "expansion": "La Expansión: Shatranj (Persia y el Mundo Árabe)",
            "expansionDesc": "El juego viajó a Persia, donde se renombró como <em>Shatranj</em>. Cuando los árabes conquistaron Persia, adoptaron el juego con entusiasmo. A través de la expansión islámica por el norte de África, el ajedrez cruzó el Mediterráneo y entró en Europa a través de la España musulmana (Al-Ándalus) alrededor del siglo X.",
            "revolution": "La Revolución: El Ajedrez Moderno (Europa, Siglo XV)",
            "revolutionDesc": "Durante la Edad Media, el juego era lento. Sin embargo, a finales del siglo XV, probablemente en España o Italia, ocurrió una revolución: se otorgó a la Dama (que antes era una pieza débil llamada 'Alferza') un poder inmenso, combinando los movimientos de la Torre y el Alfil. Esto hizo el juego mucho más rápido y dinámico.",
            "digitalAge": "La Era Digital",
            "digitalAgeDesc": "En el siglo XX, el ajedrez se profesionalizó con campeonatos mundiales. En 1997, la supercomputadora Deep Blue derrotó al campeón mundial Garry Kasparov, marcando el inicio de la era de la Inteligencia Artificial, donde máquinas y humanos colaboran para descubrir la profundidad infinita del juego.",
            "rightsReserved": "Todos los derechos reservados.",
            "white": "Blancas",
            "black": "Negras",
            "turn": "Turno de: {{color}}",
            "check": ", {{color}} están en jaque.",
            "checkmate": "Juego terminado, {{color}} están en jaque mate.",
            "draw": "Juego terminado, tablas.",
            "demoStatus": "Modo Demo: La IA juega contra sí misma...",
            "resetStatus": "Tablero reiniciado.",
            "videoSectionTitle": "Videos",
            "video1Title": "Trailer de The Chess Forge",
            "downloadTitle": "Descargar App Premium (Android)",
            "downloadDesc": "Lleva The Chess Forge contigo. La versión APK incluye funciones exclusivas, mayor rendimiento y cero publicidad.",
            "downloadBtn": "Descargar APK (Versión de Pago)",
            "paymentInfo": "* Nota: Esta es una versión de pago. Tu contribución apoya futuras actualizaciones."
        }
    },
    en: {
        translation: {
            "title": "The Chess Forge",
            "subtitle": "Forge your chess mastery! Train and challenge our advanced AI.",
            "legendaryGames": "Legendary Games",
            "game1Title": "The Immortal Game (1851)",
            "game1Desc": "Anderssen vs. Kieseritzky. Total piece sacrifice.",
            "game2Title": "The Evergreen Game (1852)",
            "game2Desc": "Anderssen vs. Dufresne. Pure tactical beauty.",
            "game3Title": "Game of the Century (1956)",
            "game3Desc": "Bobby Fischer (13 years old) sacrifices his queen.",
            "game4Title": "The Opera Game (1858)",
            "game4Desc": "Paul Morphy in an opera box.",
            "greatChampions": "Great Champions",
            "champ1Desc": "(Norway) Current Champion. Machine precision and endgames.",
            "champ2Desc": "(Russia) Dominated 20 years with aggressive style.",
            "champ3Desc": "(USA) The genius who defeated the USSR in 1972.",
            "champ4Desc": "(Cuba) 'The Mozart of Chess', natural play.",
            "aiLevel": "AI Level:",
            "lvl1": "Level 1: Novice (Random)",
            "lvl2": "Level 2: Apprentice",
            "lvl3": "Level 3: Intermediate",
            "lvl4": "Level 4: Advanced",
            "lvl5": "Level 5: Master (Max Depth)",
            "playBtn": "Play vs AI",
            "demoBtn": "Watch Live Demo (Auto-Play)",
            "resetBtn": "Reset Board",
            "statusWaiting": "Status: Waiting...",
            "marketingTitle": "Become a Chess Master with The Chess Forge!",
            "marketingDesc": "Designed for both beginners who want to learn and players looking for a real challenge, this is your personal forge to polish your skills.",
            "featuresTitle": "Features:",
            "feat1": "<strong>Adaptive AI:</strong> Face an opponent that adjusts to your level, from novice to Grandmaster.",
            "feat2": "<strong>Guided Training:</strong> Learn to protect your pieces and dominate the board with visual aids and real-time tips.",
            "feat3": "<strong>Total Customization:</strong> Create a unique experience with different themes, board styles, and pieces.",
            "feat4": "<strong>Track Your Progress:</strong> Follow your evolution with an ELO scoring system and advance on your path to mastery.",
            "marketingFooter": "Every game is a lesson. Are you ready to forge your legend on the board? Download The Chess Forge and start playing!",
            "aboutChess": "About Chess",
            "whatIsChess": "What is Chess?",
            "chessDesc": "Chess is an abstract strategy game and mental sport for two players. It is played on a checkered board of 64 squares (8x8), where two armies face each other: White and Black.",
            "mainObjective": "Main Objective",
            "objectiveDesc": "The ultimate goal is not to capture all the pieces, but to give <strong>Checkmate</strong> to the opponent's King. This occurs when the King is under direct threat of capture and there is no legal move to escape.",
            "educationalValue": "Educational Value",
            "edu1": "<strong>Develops Critical Thinking:</strong> Forces you to evaluate multiple possibilities and consequences before acting.",
            "edu2": "<strong>Encourages Concentration:</strong> Requires sustained attention and deep analysis.",
            "edu3": "<strong>Teaches Resilience:</strong> Players learn to handle defeat, analyze their mistakes and constantly improve.",
            "edu4": "<strong>Enhances Memory:</strong> Exercises pattern recognition and spatial visualization.",
            "historyTitle": "Brief History: 'The Journey of the Royal Game'",
            "origin": "The Origin: Chaturanga (India, 6th Century)",
            "originDesc": "It all started in the Indus Valley. The oldest known ancestor is <em>Chaturanga</em>, a war game representing the four divisions of the Indian army of the time: infantry (pawns), cavalry (horses), elephants (bishops) and chariots (rooks), led by a King and his advisor.",
            "expansion": "The Expansion: Shatranj (Persia and the Arab World)",
            "expansionDesc": "The game traveled to Persia, where it was renamed <em>Shatranj</em>. When the Arabs conquered Persia, they adopted the game with enthusiasm. Through the Islamic expansion through North Africa, chess crossed the Mediterranean and entered Europe through Muslim Spain (Al-Ándalus) around the 10th century.",
            "revolution": "The Revolution: Modern Chess (Europe, 15th Century)",
            "revolutionDesc": "During the Middle Ages, the game was slow. However, at the end of the 15th century, probably in Spain or Italy, a revolution occurred: the Queen (who was previously a weak piece called 'Alferza') was given immense power, combining the movements of the Rook and the Bishop. This made the game much faster and more dynamic.",
            "digitalAge": "The Digital Age",
            "digitalAgeDesc": "In the 20th century, chess became professionalized with world championships. In 1997, the supercomputer Deep Blue defeated world champion Garry Kasparov, marking the beginning of the era of Artificial Intelligence, where machines and humans collaborate to discover the infinite depth of the game.",
            "rightsReserved": "All rights reserved.",
            "white": "White",
            "black": "Black",
            "turn": "Turn: {{color}}",
            "check": ", {{color}} is in check.",
            "checkmate": "Game over, {{color}} is in checkmate.",
            "draw": "Game over, drawn position.",
            "demoStatus": "Demo Mode: AI playing against itself...",
            "resetStatus": "Board reset.",
            "videoSectionTitle": "Videos",
            "video1Title": "The Chess Forge Trailer",
            "downloadTitle": "Download Premium App (Android)",
            "downloadDesc": "Take The Chess Forge with you. The APK version includes exclusive features, better performance, and zero ads.",
            "downloadBtn": "Download APK (Paid Version)",
            "paymentInfo": "* Note: This is a paid version. Your contribution supports future updates."
        }
    },
    fr: {
        translation: {
            "title": "The Chess Forge",
            "subtitle": "Forgez votre maîtrise des échecs ! Entraînez-vous et défiez notre IA avancée.",
            "legendaryGames": "Parties Légendaires",
            "game1Title": "L'Immortelle (1851)",
            "game1Desc": "Anderssen vs. Kieseritzky. Sacrifice total des pièces.",
            "game2Title": "La Toujours Jeune (1852)",
            "game2Desc": "Anderssen vs. Dufresne. Beauté tactique pure.",
            "game3Title": "La Partie du Siècle (1956)",
            "game3Desc": "Bobby Fischer (13 ans) sacrifie sa dame.",
            "game4Title": "La Partie de l'Opéra (1858)",
            "game4Desc": "Paul Morphy dans une loge d'opéra.",
            "greatChampions": "Grands Champions",
            "champ1Desc": "(Norvège) Champion actuel. Précision de machine et finales.",
            "champ2Desc": "(Russie) A dominé 20 ans avec un style agressif.",
            "champ3Desc": "(USA) Le génie qui a vaincu l'URSS en 1972.",
            "champ4Desc": "(Cuba) 'Le Mozart des Échecs', jeu naturel.",
            "aiLevel": "Niveau de l'IA :",
            "lvl1": "Niveau 1 : Novice (Aléatoire)",
            "lvl2": "Niveau 2 : Apprenti",
            "lvl3": "Niveau 3 : Intermédiaire",
            "lvl4": "Niveau 4 : Avancé",
            "lvl5": "Niveau 5 : Maître (Profondeur Max)",
            "playBtn": "Jouer vs IA",
            "demoBtn": "Voir Démo Live (Auto-Play)",
            "resetBtn": "Réinitialiser l'Échiquier",
            "statusWaiting": "État : En attente...",
            "marketingTitle": "Devenez un maître des échecs avec The Chess Forge !",
            "marketingDesc": "Conçu pour les débutants qui veulent apprendre et les joueurs cherchant un vrai défi.",
            "featuresTitle": "Caractéristiques :",
            "feat1": "<strong>IA Adaptative :</strong> Affrontez un adversaire qui s'ajuste à votre niveau.",
            "feat2": "<strong>Entraînement Guidé :</strong> Apprenez à protéger vos pièces.",
            "feat3": "<strong>Personnalisation Totale :</strong> Créez une expérience unique.",
            "feat4": "<strong>Mesurez vos Progrès :</strong> Suivez votre évolution avec le système ELO.",
            "marketingFooter": "Chaque partie est une leçon. Prêt à forger votre légende ?",
            "aboutChess": "À propos des Échecs",
            "whatIsChess": "Qu'est-ce que les Échecs ?",
            "chessDesc": "Les échecs sont un jeu de stratégie abstrait et un sport mental pour deux joueurs.",
            "mainObjective": "Objectif Principal",
            "objectiveDesc": "Le but ultime est de faire <strong>Échec et Mat</strong> au Roi adverse.",
            "educationalValue": "Valeur Pédagogique",
            "edu1": "<strong>Développe l'Esprit Critique :</strong> Oblige à évaluer plusieurs possibilités.",
            "edu2": "<strong>Favorise la Concentration :</strong> Nécessite une attention soutenue.",
            "edu3": "<strong>Enseigne la Résilience :</strong> Apprendre à gérer la défaite.",
            "edu4": "<strong>Améliore la Mémoire :</strong> Reconnaissance des motifs.",
            "historyTitle": "Brève Histoire",
            "origin": "L'Origine : Chaturanga (Inde, VIe siècle)",
            "originDesc": "Tout a commencé dans la vallée de l'Indus avec le Chaturanga.",
            "expansion": "L'Expansion : Shatranj (Perse et Monde Arabe)",
            "expansionDesc": "Le jeu a voyagé en Perse, renommé Shatranj.",
            "revolution": "La Révolution : Les Échecs Modernes (Europe, XVe siècle)",
            "revolutionDesc": "La Dame a reçu un pouvoir immense, rendant le jeu plus rapide.",
            "digitalAge": "L'Ère Numérique",
            "digitalAgeDesc": "Deep Blue a vaincu Kasparov, marquant le début de l'IA.",
            "rightsReserved": "Tous droits réservés.",
            "white": "Blancs",
            "black": "Noirs",
            "turn": "Tour des : {{color}}",
            "check": ", {{color}} sont en échec.",
            "checkmate": "Jeu terminé, {{color}} sont échec et mat.",
            "draw": "Jeu terminé, match nul.",
            "demoStatus": "Mode Démo : L'IA joue contre elle-même...",
            "resetStatus": "Échiquier réinitialisé.",
            "videoSectionTitle": "Vidéos",
            "video1Title": "Bande-annonce de The Chess Forge",
            "downloadTitle": "Télécharger l'App Premium (Android)",
            "downloadDesc": "Emportez The Chess Forge avec vous. La version APK inclut des fonctionnalités exclusives et aucune publicité.",
            "downloadBtn": "Télécharger l'APK (Version Payante)",
            "paymentInfo": "* Note : Ceci est une version payante. Votre contribution soutient les futures mises à jour."
        }
    }
};

// Inicializar i18next
i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        resources: resources,
        fallbackLng: 'es',
        debug: false
    }, function(err, t) {
        // Inicializar jquery-i18next
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        
        // Traducir todo el cuerpo
        $('body').localize();

        // Evento para cambiar idioma
        $('#languageSwitcher').change(function() {
            var chosenLng = $(this).val();
            i18next.changeLanguage(chosenLng, function() {
                $('body').localize();
                updateStatus(); // Actualizar textos dinámicos
            });
        });

        // Establecer el selector al idioma detectado
        $('#languageSwitcher').val(i18next.language.split('-')[0]);
    });

// --- Configuración Inicial ---
var board = null;
var game = new Chess();
var $status = $('#status');
var $pgn = $('#pgn');
var isDemoMode = false;
var demoInterval = null;

// Variable global para gestionar la búsqueda y evitar que se inicie si ya está en curso.
var searchInProgress = false;

// --- Lógica de la IA (Motor Minimax) ---
// Implementación de un motor de ajedrez real usando Minimax con Poda Alpha-Beta.
// Esto soluciona los bloqueos y hace que la IA juegue con inteligencia.

function makeBestMove() {
    if (game.game_over() || searchInProgress) return;
    searchInProgress = true;

    // Actualizar estado para indicar que la IA está pensando
    $status.html(i18next.t('demoStatus').replace('Demo Mode: AI playing against itself...', 'AI is thinking...'));
    
    var level = parseInt($('#level').val());
    var depth = 1;

    // Ajustar profundidad según nivel
    // Profundidad 3 es un buen equilibrio para JS en navegador sin Web Workers
    if (level === 1) depth = 1;
    if (level === 2) depth = 2;
    if (level >= 3) depth = 3; 

    // Usar setTimeout para que la UI se actualice con "pensando..." antes de empezar el cálculo pesado.
    setTimeout(function() {
        // Ejecutar el cálculo del mejor movimiento de forma asíncrona
        getBestMoveAsync(game, depth, function(bestMove) {
            if (bestMove) {
                game.move(bestMove);
                board.position(game.fen());
                updateStatus();
            }
            searchInProgress = false; // Permitir la siguiente búsqueda
        });
    }, 100);
}

// Nueva función asíncrona para no bloquear la UI
function getBestMoveAsync(game, depth, onComplete) {
    // Create a copy of the game to run the search on.
    // This prevents the main game state from being corrupted by the search algorithm.
    var gameCopy = new Chess(game.fen());
    var possibleMoves = gameCopy.moves();
    
    if (possibleMoves.length === 0) {
        onComplete(null);
        return;
    }

    possibleMoves.sort(() => Math.random() - 0.5);

    var aiColor = gameCopy.turn();
    var bestMove = null;
    var bestValue = (aiColor === 'w') ? -Infinity : Infinity;
    var moveIndex = 0;

    function evaluateMove() {
        if (moveIndex >= possibleMoves.length) {
            // Búsqueda completada
            onComplete(bestMove || possibleMoves[0]);
            return;
        }

        try {
            var move = possibleMoves[moveIndex];
            gameCopy.move(move);
            var value = minimax(depth - 1, gameCopy, -Infinity, Infinity, gameCopy.turn() === 'w');
            gameCopy.undo();

            if (aiColor === 'w') {
                if (value >= bestValue) {
                    bestValue = value;
                    bestMove = move;
                }
            } else {
                if (value <= bestValue) {
                    bestValue = value;
                    bestMove = move;
                }
            }
        } catch (e) {
            console.error("AI Error:", e);
        }

        moveIndex++;
        // Ceder el control al navegador para que la UI no se congele, y continuar con el siguiente movimiento.
        setTimeout(evaluateMove, 0);
    }

    // Iniciar la evaluación
    evaluateMove();
}

function minimax(depth, game, alpha, beta, isMaximisingPlayer) {
    if (depth === 0) {
        return evaluateBoard(game.board());
    }

    var possibleMoves = game.moves();
    if (possibleMoves.length === 0) {
        // El juego ha terminado
        if (game.in_checkmate()) {
            // El jugador cuyo turno es, está en jaque mate.
            // Devuelve un valor muy alto o bajo dependiendo de quién recibió el mate.
            // La evaluación es siempre desde la perspectiva de las blancas.
            return game.turn() === 'w' ? -9999 : 9999;
        }
        // Es tablas
        return 0;
    }

    if (isMaximisingPlayer) {
        var bestMove = -Infinity;
        for (var i = 0; i < possibleMoves.length; i++) {
            game.move(possibleMoves[i]);
            bestMove = Math.max(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
            game.undo();
            alpha = Math.max(alpha, bestMove);
            if (beta <= alpha) return bestMove; // Poda Alpha
        }
        return bestMove;
    } else {
        var bestMove = Infinity;
        for (var i = 0; i < possibleMoves.length; i++) {
            game.move(possibleMoves[i]);
            bestMove = Math.min(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
            game.undo();
            beta = Math.min(beta, bestMove);
            if (beta <= alpha) return bestMove; // Poda Beta
        }
        return bestMove;
    }
}

function evaluateBoard(board) {
    var totalEvaluation = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            totalEvaluation += getPieceValue(board[i][j]);
        }
    }
    return totalEvaluation;
}

// Valores estándar de piezas de ajedrez
const pieceValues = { 'p': 10, 'n': 30, 'b': 30, 'r': 50, 'q': 90, 'k': 900 };

function getPieceValue(piece) {
    if (piece === null) return 0;
    const value = pieceValues[piece.type] || 0;
    return piece.color === 'w' ? value : -value;
}

// --- Configuración del Tablero ---
function onDragStart (source, piece, position, orientation) {
    // No permitir mover piezas si el juego terminó o es turno de la IA o estamos en Demo
    if (game.game_over() || isDemoMode) return false;
    if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }
}

function onDrop (source, target) {
    // Intentar mover
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // Promover siempre a reina por simplicidad
    });

    // Movimiento ilegal
    if (move === null) return 'snapback';

    updateStatus();

    // Turno de la IA con un pequeño retraso para realismo
    window.setTimeout(makeBestMove, 250);
}

function onSnapEnd () {
    board.position(game.fen());
}

function updateStatus () {
    var status = '';
    var colorKey = game.turn() === 'w' ? 'white' : 'black';

    if (game.in_checkmate()) {
        status = i18next.t('checkmate', { color: i18next.t(colorKey) });
    } else if (game.in_draw()) {
        status = i18next.t('draw');
    } else {
        status = i18next.t('turn', { color: i18next.t(colorKey) });
        if (game.in_check()) {
            status += i18next.t('check', { color: i18next.t(colorKey) });
        }
    }

    $status.html(status);
    $pgn.html(game.pgn());
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    pieceTheme: 'https://cdn.jsdelivr.net/gh/lichess-org/lila@master/public/piece/cburnett/{piece}.svg'
};

board = Chessboard('board', config);

// --- Funciones de Control ---

// 1. Iniciar Juego vs IA
$('#startBtn').on('click', function() {
    stopDemo();
    game.reset();
    board.start();
    updateStatus();
    isDemoMode = false;
});

// 2. Modo Demo Live (Auto-Play)
$('#demoBtn').on('click', function() {
    stopDemo(); // Limpiar cualquier demo anterior
    game.reset();
    board.start();
    isDemoMode = true;
    $status.html(i18next.t('demoStatus'));
    
    // Ejecutar movimientos automáticos cada 800ms
    demoInterval = setInterval(function() {
        if (game.game_over()) {
            stopDemo();
            return;
        }
        
        var possibleMoves = game.moves();
        var randomIdx = Math.floor(Math.random() * possibleMoves.length);
        game.move(possibleMoves[randomIdx]);
        board.position(game.fen());
        
    }, 800);
});

// 3. Limpiar / Parar
$('#clearBtn').on('click', function() {
    stopDemo();
    game.reset();
    board.clear();
    board.start();
    $status.html(i18next.t('resetStatus'));
    $pgn.html("");
});

function stopDemo() {
    if (demoInterval) {
        clearInterval(demoInterval);
        demoInterval = null;
    }
    isDemoMode = false;
}

updateStatus();

// Actualizar año automáticamente en el footer
$('#year').text(new Date().getFullYear());

// --- Lógica del Carrusel ---
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-container img');

function showSlides() {
    if (slides.length === 0) return;
    slides.forEach(img => img.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

// Cambiar imagen cada 3.5 segundos
if (slides.length > 0) setInterval(showSlides, 3500);

// --- Lógica del Tema (Claro/Oscuro) ---
$('#themeToggle').on('click', function() {
    $('body').toggleClass('light-theme');
    const isLight = $('body').hasClass('light-theme');
    $(this).text(isLight ? '🌙' : '☀️');
});