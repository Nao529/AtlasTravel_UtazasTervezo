/**
 * Az alkalmazásban megjelenített utazások adatait tartalmazó tömb.
 *
 * @type {Array<Object>}
 */
export const utazasLista = [
  {
    nev: "Párizs",
    orszag: "Franciaország",
    kep: "kepek/parizs.jpg",
    leiras: "Romantikus városnézés, Eiffel-torony és Louvre.",
    hosszuLeiras: "Párizs Franciaország fővárosa és a világ egyik legismertebb kulturális központja. Az utazás során városnézés keretében megtekinthető az Eiffel-torony, a Louvre Múzeum, a Notre-Dame székesegyház és a Montmartre művésznegyed. A program része lehet hajózás a Szajnán, múzeumlátogatás, valamint szabadidő francia gasztronómiai élményekkel, kávézók és pékségek felfedezésével.",
    ar: 89990,
    idotartam: "4 nap / 3 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Róma",
    orszag: "Olaszország",
    kep: "kepek/roma.jpg",
    leiras: "Colosseum, Vatikán, történelmi látnivalók.",
    hosszuLeiras: "Róma az ókori és a modern kultúra különleges találkozása. A program során megtekinthető a Colosseum, a Forum Romanum, a Pantheon, valamint a Vatikán és a Szent Péter-bazilika. A város híres olasz konyhájáról, így a gasztronómiai élmények – pizza, tészta, fagylalt – is a program részét képezik. Szabadidős séták a történelmi belvárosban.",
    ar: 99990,
    idotartam: "5 nap / 4 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Santorini",
    orszag: "Görögország",
    kep: "kepek/santorini.jpg",
    leiras: "Fehér házak, kék kupolák, naplementék.",
    hosszuLeiras: "Santorini Görögország egyik legismertebb szigete, lenyűgöző vulkanikus tájjal és ikonikus fehér-kék építészettel. A program tartalmazza Oia és Fira városrészek látogatását, hajókirándulást a kalderában, strandolást és helyi borok kóstolását. A híres naplementék különleges élményt nyújtanak.",
    ar: 129990,
    idotartam: "6 nap / 5 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Bali",
    orszag: "Indonézia",
    kep: "kepek/bali.jpg",
    leiras: "Trópusi paradicsom és egzotikus kultúra.",
    hosszuLeiras: "Bali Indonézia egyik legnépszerűbb üdülőszigete, ahol trópusi strandok, rizsteraszok és ősi templomok várják az utazókat. A program része lehet Ubud környéki kirándulás, hagyományos balinéz táncbemutató, vízesések megtekintése és pihenés az óceánparton. A helyi kultúra és vallás különleges hangulatot teremt.",
    ar: 139990,
    idotartam: "7 nap / 6 éj",
    letszam: "2-8 fő"
  },
  {
    nev: "Barcelona",
    orszag: "Spanyolország",
    kep: "kepek/barcelona.jpg",
    leiras: "Gaudí, tengerpart és városi élet.",
    hosszuLeiras: "Barcelona egy pezsgő mediterrán város, ahol Antoni Gaudí híres épületei – például a Sagrada Família és a Park Güell – kiemelt szerepet kapnak. A program során városnézés, strandolás, tapas kóstolás és séták a La Rambla környékén várhatók. A város tökéletesen ötvözi a kultúrát és a pihenést.",
    ar: 94990,
    idotartam: "4 nap / 3 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "London",
    orszag: "Egyesült Királyság",
    kep: "kepek/london.jpg",
    leiras: "Big Ben, múzeumok, történelmi helyek.",
    hosszuLeiras: "London Európa egyik legnagyobb városa, gazdag történelemmel és modern hangulattal. A program során megtekinthető a Big Ben, a Buckingham-palota, a Tower of London és számos világhírű múzeum. Szabadidő vásárlásra, városi sétákra és kulturális programokra.",
    ar: 109990,
    idotartam: "5 nap / 4 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Amszterdam",
    orszag: "Hollandia",
    kep: "kepek/amszterdam.jpg",
    leiras: "Csatornák, múzeumok és különleges hangulat.",
    hosszuLeiras: "Amszterdam híres csatornarendszeréről, kerékpáros kultúrájáról és múzeumairól. A program tartalmazza a városnézést, a Rijksmuseum vagy a Van Gogh Múzeum meglátogatását, valamint csatornahajózást. A város laza, mégis kulturálisan gazdag hangulatot kínál.",
    ar: 97990,
    idotartam: "4 nap / 3 éj",
    letszam: "2-5 fő"
  },
  {
    nev: "Prága",
    orszag: "Csehország",
    kep: "kepek/praga.jpg",
    leiras: "Mesebeli óváros és történelmi vár.",
    hosszuLeiras: "Prága Európa egyik legszebb történelmi városa. A program során megtekinthető az Óvárosi tér, a Károly-híd és a Prágai vár. A város különleges hangulata, sörkultúrája és középkori építészete felejthetetlen élményt nyújt.",
    ar: 84990,
    idotartam: "3 nap / 2 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Bécs",
    orszag: "Ausztria",
    kep: "kepek/becs.jpg",
    leiras: "Császári paloták és kávéházak.",
    hosszuLeiras: "Bécs az egykori Habsburg Birodalom központja, gazdag kulturális örökséggel. A program tartalmazza a Schönbrunni kastély, a Hofburg és a belváros megtekintését. A város híres klasszikus zenéjéről és tradicionális kávéházairól.",
    ar: 79990,
    idotartam: "3 nap / 2 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Dubrovnik",
    orszag: "Horvátország",
    kep: "kepek/dubrovnik.jpg",
    leiras: "Óváros és tengerpart.",
    hosszuLeiras: "Dubrovnik a horvát tengerpart egyik legszebb városa, fallal körülvett óvárossal. A program része a városfalak bejárása, strandolás az Adrián és hajókirándulás a közeli szigetekre. A város történelmi hangulata és természeti szépsége egyaránt lenyűgöző.",
    ar: 99990,
    idotartam: "5 nap / 4 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "Isztambul",
    orszag: "Törökország",
    kep: "kepek/isztambul.jpg",
    leiras: "Kelet és Nyugat találkozása.",
    hosszuLeiras: "Isztambul különleges város, ahol Európa és Ázsia találkozik. A program során megtekinthető a Hagia Sophia, a Kék mecset, a Topkapi palota és a Nagy Bazár. A város gazdag történelme, bazárjai és török konyhája különleges élményt kínál.",
    ar: 104990,
    idotartam: "5 nap / 4 éj",
    letszam: "2-6 fő"
  },
  {
    nev: "New York",
    orszag: "USA",
    kep: "kepek/newyork.jpg",
    leiras: "Felkarcolók és ikonikus városrészek.",
    hosszuLeiras: "New York a világ egyik legikonikusabb városa. A program tartalmazza Manhattan nevezetességeit, a Times Square-t, a Central Parkot, a Szabadság-szobrot és a Brooklyn-hidat. A város pezsgő élete, kulturális sokszínűsége és látványosságai felejthetetlen élményt nyújtanak.",
    ar: 199990,
    idotartam: "7 nap / 6 éj",
    letszam: "2-6 fő"
  }
];