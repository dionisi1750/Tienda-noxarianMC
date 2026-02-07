
import { Product } from './types';

export const LOGO_URL = "https://cdn.discordapp.com/attachments/1467002814143139948/1469766465895927940/ChatGPT_Image_20_ene_2026_09_24_28_p.m..png?ex=6988da30&is=698788b0&hm=f099b083fb843bdc105596fa60e6486c9a891f52f343e6193a1c0f40ceb418d4&";
export const DISCORD_LINK = "https://discord.gg/Wkuy3PnxrE";

export const CATEGORIES = [
  { id: 'kits', name: 'KITS', icon: '⚔️' },
  { id: 'rangos', name: 'RANGOS', icon: '🔱' },
  { id: 'comandos', name: 'COMANDOS', icon: '⚡' },
  { id: 'keys', name: 'KEYS', icon: '🔑' },
];

export const PRODUCTS: Product[] = [
  // --- KITS ---
  {
    id: 'kit-python',
    category: 'kits',
    name: 'KIT PYTHON',
    price: 5,
    image: 'https://cdn.discordapp.com/attachments/1467002814143139948/1469766464381780071/image-8.png?ex=6988da30&is=698788b0&hm=e1c32b3ffcbbaa8c31bcb260cda66f5cff6f34ccae78300dd3616aea9defd46d&',
    details: {
      armor: ['Protección 30', 'Protección contra proyectiles 22', 'Protección contra fuego 22', 'Efectos especiales exclusivos'],
      tools: ['Espada: Filo 32, Aspecto Ígneo I', 'Pico: Eficiencia 60, Fortuna I, Prisa Minera I', 'Hacha: Filo 32'],
      extras: ['Keys de crates estándar', 'Utilidades variadas', 'Comida extra'],
      summary: 'Total objetos: 27'
    }
  },
  {
    id: 'kit-hades',
    category: 'kits',
    name: 'KIT HADES',
    price: 13,
    image: 'https://cdn.discordapp.com/attachments/1467002814143139948/1469766464792690860/image-9.png?ex=6988da30&is=698788b0&hm=c32a3a26af5f5b1d6a5f0f58a50a1dd070661c7c272c19ca7dcaef0ef7cfadba&',
    details: {
      armor: ['Protección 40', 'Protección contra proyectiles 22', 'Protección contra fuego 22', 'Efectos especiales exclusivos'],
      tools: ['Espada: Filo 35, Aspecto Ígneo II', 'Pico: Eficiencia 70, Fortuna II, Prisa Minera II', 'Hacha: Filo 35'],
      extras: ['Keys de crates especiales', 'Utilidades mejoradas', 'Comida extra+'],
      summary: 'Total objetos: 27'
    }
  },
  {
    id: 'kit-cerberus',
    category: 'kits',
    name: 'KIT CERBERUS',
    price: 16,
    image: 'https://cdn.discordapp.com/attachments/1467002814143139948/1469766465183023236/image-10.png?ex=6988da30&is=698788b0&hm=1f86d66fe449aa67ba27b6700a0b6840b7e71187b3a503836672157c09132aef&',
    details: {
      armor: ['Protección 45', 'Protección contra proyectiles 22', 'Protección contra fuego 22', 'Efectos especiales exclusivos'],
      tools: ['Espada: Filo 40, Aspecto Ígneo IV', 'Pico: Eficiencia 80, Fortuna IV, Prisa Minera III', 'Hacha: Filo 40'],
      extras: ['Keys de crates épicas', 'Utilidades premium', 'Comida extra++'],
      summary: 'Total objetos: 27'
    }
  },
  // --- RANGOS ---
  {
    id: 'rango-hydra',
    category: 'rangos',
    name: '🔱 RANGO HYDRA',
    price: 19,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469823535559086121/imagen.png?ex=69890f56&is=6987bdd6&hm=30e782d900662ee424bc78a45bedebad1ddd5a14ae0379fd618e5ec792177b5f',
    details: {
      armor: ['Protección: 50', 'Protección contra proyectiles: 25', 'Protección contra fuego: 25', 'Efectos especiales'],
      tools: ['Espada: Filo 42, Fuerza 2, Suerte 5', 'Pico: Eficiencia 90, Fortuna 10', 'Hacha: Filo 42'],
      benefits: ['/fly', 'Enderchests adicionales: 3', '/back (sin cooldown)', 'Acceso anticipado a futuras minas'],
      summary: 'Total de objetos: 27'
    }
  },
  {
    id: 'rango-kraken',
    category: 'rangos',
    name: '🐙 RANGO KRAKEN',
    price: 22,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469823653137875065/imagen.png?ex=69890f72&is=6987bdf2&hm=ebfda8e26fc0605b4056243faddb65f4a1c7df4209d421ca85192714221f0977',
    details: {
      armor: ['Protección: 60', 'Protección contra proyectiles: 30', 'Protección contra fuego: 30'],
      tools: ['Espada: Filo 45, Fuerza 3, Suerte 6', 'Pico: Eficiencia 100, Fortuna 15, Prisa Minera 3', 'Hacha: Filo 45'],
      benefits: ['/fly', 'Enderchests adicionales: 5', '/back (sin cooldown)', 'Acceso anticipado a futuras minas', 'Acceso a minas VIP', '/sethome'],
    }
  },
  {
    id: 'rango-atlas',
    category: 'rangos',
    name: '🌍 RANGO ATLAS',
    price: 25,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469823735119745197/imagen.png?ex=69890f86&is=6987be06&hm=99254d5a6e213e94af3fdf85f7837eff8cf085cd5d61c20fe8c4c75d1f0f61e0',
    details: {
      armor: ['Protección: 120', 'Protección contra proyectiles: 60', 'Protección contra fuego: 60'],
      tools: ['Espada: Filo 50, Fuerza 4, Suerte 8', 'Pico: Eficiencia 100, Fortuna 20, Prisa Minera 5', 'Hacha: Filo 50'],
      benefits: ['/fly', 'Enderchests adicionales: 8', '/back (sin cooldown)', 'Acceso anticipado a futuras minas', 'Acceso a minas VIP', '/sethome', '/feed (instantáneo)'],
    }
  },
  {
    id: 'rango-noxaria',
    category: 'rangos',
    name: '🌑 RANGO NOXARIA',
    price: 30,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469830497273118911/imagen.png?ex=698915d2&is=6987c452&hm=3869f62966e24d3bda97d7d4dd297dae80fa4bfad07e1f6fe963c868228879e0',
    details: {
      armor: ['Protección: 120', 'Protección contra proyectiles: 60', 'Protección contra fuego: 60'],
      tools: ['Espada: Filo 50, Fuerza 4, Suerte 8', 'Pico: Eficiencia 100, Fortuna 25, Prisa Minera 5', 'Hacha: Filo 50'],
      benefits: ['/fly', 'Enderchests adicionales: 10', '/back (sin cooldown)', 'Acceso anticipado a futuras minas', 'Acceso a minas VIP', '/sethome', '/feed', '/nick (personalizado)'],
    }
  },
  // --- KEYS ---
  {
    id: 'key-comun',
    category: 'keys',
    name: '🗝️ KEY COMÚN',
    price: 0.5,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469835779499884594/imagen.png?ex=69891abe&is=6987c93e&hm=0ef8c2fb6b45336e5f0d696d461536c699e176970c34be0ae95e2abb494db4b3',
    description: 'Recompensas de inicio para aventureros. Ítems básicos para sobrevivir.'
  },
  {
    id: 'key-epica',
    category: 'keys',
    name: '🔹 KEY ÉPICA',
    price: 1,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469835835976192141/imagen.png?ex=69891acb&is=6987c94b&hm=d88f1948549d44a56feae29c16c570196fe91418650dd899c26842296423777c',
    description: 'Recompensas épicas: Armaduras PvP iniciales, Armas encantadas medias.'
  },
  {
    id: 'key-good',
    category: 'keys',
    name: '🔸 KEY GOOD',
    price: 2,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469836113790370005/imagen.png?ex=69891b0d&is=6987c98d&hm=8383a8378b9fb1900e74b131ab38e76aa51a532579c536f99429cb74eca383b9',
    description: 'Recompensas intermedias: Armas mejoradas, Armaduras avanzadas.'
  },
  {
    id: 'key-ultra',
    category: 'keys',
    name: '🔥 KEY ULTRA',
    price: 3,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469836050250727454/imagen.png?ex=69891afe&is=6987c97e&hm=3444be3ed8348440b183950b3ea098b09424a2f9e5454f2f88459eb0a91846ed',
    description: 'Recompensas altas: Armamiento PvP potente, Kits especiales.'
  },
  {
    id: 'key-noxaria',
    category: 'keys',
    name: '👑 KEY NOXARIA',
    price: 5,
    image: 'https://cdn.discordapp.com/attachments/1449239473756831745/1469836179951063132/imagen.png?ex=69891b1d&is=6987c99d&hm=ad615d7dbf729af68b0209de69becafefadee5ca3e85bd8a6509ccdb12861495',
    description: 'Recompensas TOP: Equipamiento legendario FullPvP.'
  },
  // --- COMANDOS ---
  {
    id: 'cmd-repair',
    category: 'comandos',
    name: '/repair',
    price: 1,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTA1NWY3IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNyAxMC4zTDkuNSA1LjI1Yy0uOTctLjk3LTIuNTYtLjk3LTMuNTMgMEwxIDkuNzVjLS45Ny45Ny0uOTcgMi41NiAwIDMuNTNMNS4yNSAxNy41YzEuNTggMS41OCAzLjU1IDEuNTggNS4xMyAwTDExLjUgMTZsMy4yIDMuMmMuNTEuNTEgMS4zMy41MSAxLjg0IDBsMi43Ni0yLjc2Yy41MS0uNTEuNTEtMS4zMyAwLTEuODRMMTQuNyAxMC4zeiIvPjxwYXRoIGQ9Ik0xOCAyTDYgMTQiLz48L3N2Zz4=',
    description: 'Repara el ítem en mano instantáneamente con un martillo místico morado.'
  },
  {
    id: 'cmd-feed',
    category: 'comandos',
    name: '/feed',
    price: 1,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDA4OGZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTYgM2MtMi41IDAtNSAyLTVoLTRjLTMuMzEgMC02IDIuNjktNiA2czIuNjkgNiA2IDZoNWMzLjI0IDAgNy45Ny0yLjE4IDktNXMyLjMxLTUgNS01Yy0yLjA0IDAtNCAxLjc5LTQgNHYyYzAgMS42NSAxLjM1IDMgMyAzcy0zLTMtMy0zVjhjMC0yLjc2LTIuMjQtNS01LTV6Ii8+PC9zdmc+',
    description: 'Rellena tu hambre con una chuleta mística de color morado brillante.'
  },
  {
    id: 'cmd-heal',
    category: 'comandos',
    name: '/heal',
    price: 2,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTA4YmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNWMwLTIuODggMi4xMi01IDUtNWMyLjA5IDAgNC4xMyAxIDUgMy4wOUMxMy44NyAzIDE1LjkxIDIgMTggMmMzLjE1IDAgNS41IDIgNS41IDVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+',
    description: 'Restaura toda tu vitalidad con el poder del corazón púrpura.'
  },
  {
    id: 'cmd-back',
    category: 'comandos',
    name: '/back',
    price: 2,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYzA4OGZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMmMtNC40MiAwLTggMy41OC04IDhzMy41OCA4IDggOGMuOTYgMCAxLjg4LS4xNyAyLjczLS40N0wxNSAxOWgtNmwzLjI3LTMuNTNDMTguMTIgMTQuODggMjAgMTIuNjYgMjAgMTBjMC00LjQyLTMuNTgtOC04LTh6bTMgMTNoLTZ2LTRoNnY0em0tNCAwdi00aDJ2NHgtMiIvPjwvc3ZnPg==',
    description: 'Regresa al lugar de tu muerte, guiado por una calavera de energía morada.'
  },
  {
    id: 'cmd-pvpoff',
    category: 'comandos',
    name: '/pvpoff',
    price: 3,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHJlY3QgeD0iMTAiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjE0IiBmaWxsPSIjYTg1NWY3Ii8+PHJlY3QgeD0iOCIgeT0iMTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiIGZpbGw9IiM3YzNhZWQiLz48cmVjdCB4PSIxMSIgeT0iMTgiIHdpZHRoPSIyIiBoZWlnaHQ9IjQiIGZpbGw9IiM2YzQzZWQiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48bGluZSB4MT0iNSIgeTE9IjUiIHgyPSIxOSIgeTI9IjE5IiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==',
    description: 'Bloquea PvP por tiempo limitado. Espada morada bajo signo de prohibición rojo.'
  },
  {
    id: 'cmd-nick',
    category: 'comandos',
    name: '/nick',
    price: 2,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iI2Q4YjRmZSIvPjxwYXRoIGQ9Ik04IDhoOHY4SDh6IiBmaWxsPSIjN2MzYWVkIi8+PHBhdGggZD0iTTUgMTZoMTR2N0g1eiIgZmlsbD0iIzZjNDNlZCIvPjx0ZXh0IHg9IjEyIiB5PSI2IiBmaWxsPSIjMGIwMTE0IiBmb250LWZhbWlseT0iT3JiaXRyb24iIGZvbnQtc2l6ZT0iMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPk5veGFyaWFuTUM8L3RleHQ+PC9zdmc+',
    description: 'Cambia el nick visible en el servidor. Skin mística con nombre personalizado.'
  },
];
