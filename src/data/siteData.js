export const person = {
  name: 'MARTINA PAGLIARA',
  firstName: 'MARTINA',
  lastName: 'PAGLIARA',
  role: 'Visual storyteller',
  email: 'martinapagliara@gmail.com',
  instagram: '@rullinidimini',
  location: 'Parma, Italy',
  portraitSrc: '/marti-portfolio/assets/about.png',
  portraitAlt: 'Martina Pagliara',
};

export const home = {
  tagline: 'Visual stories,\nreal emotions.',
  hint: 'Scorri o clicca le linguette\nper esplorare.',
  cta: 'Inizia ↦',
};

export const about = {
  intro:
    'Sono una visual storyteller appassionata di luce naturale, emozioni autentiche e dettagli che parlano sottovoce.',
  body: [
    'Cresciuta tra viaggi, arte e quaderni pieni di immagini, ho capito presto che la fotografia era il mio modo di ascoltare e raccontare il mondo.',
    'Oggi lavoro con brand, creativi e persone che cercano contenuti visivi sinceri, estetici e senza tempo.',
  ],
  quote: '"Raccontare storie vere,\ncon uno sguardo gentile\ne intenzionale."',
  links: ['La mia storia', 'Il mio percorso', 'Ispirazioni'],
  sections: [
    {
      title: 'La mia storia',
      body: 'Ho iniziato a fotografare per fermare i momenti che avevo paura di dimenticare. Quel gesto istintivo è diventato negli anni un linguaggio: un modo per dare forma a ciò che sento e per guardare il mondo con più attenzione.',
    },
    {
      title: 'Il mio percorso',
      body: 'Dalla formazione artistica ai primi reportage, fino ai progetti con brand e creativi, ogni tappa ha affinato il mio sguardo. Oggi lavoro tra ritratto, still life e narrazione visiva, cercando sempre autenticità prima che perfezione.',
    },
    {
      title: 'Ispirazioni',
      body: 'La luce naturale, il cinema, i piccoli gesti quotidiani e i silenzi tra le persone. Mi ispira tutto ciò che è imperfetto e vivo: è lì che trovo le storie che vale la pena raccontare.',
    },
  ],
};

export const portfolio = {
  description: 'Una selezione di storie visive che ho avuto il privilegio di raccontare.',
  scrollHint: 'Scorri per esplorare',
  collections: ['B&W', 'Portraits', 'Nature'],
  images: [
    { src: '/marti-portfolio/assets/img1.png', title: 'WILD LAND', year: '2024', collection: 'Nature', selected: true },
    { src: '/marti-portfolio/assets/img2.png', title: 'IN BETWEEN', year: '2023', collection: 'Portraits', selected: true },
    { src: '/marti-portfolio/assets/img3.png', title: 'SILENT ROOMS', year: '2023', collection: 'B&W' },
    { src: '/marti-portfolio/assets/img2.png', title: 'FLEETING TIME', year: '2022', collection: 'Portraits' },
    { src: '/marti-portfolio/assets/img3.png', title: 'COASTAL NOTES', year: '2022', collection: 'Nature', selected: true },
    { src: '/marti-portfolio/assets/img1.png', title: 'ALCHEMY', year: '2021', collection: 'B&W' },
    { src: '/marti-portfolio/assets/img1.png', title: 'WILD LAND II', year: '2020', collection: 'Nature' },
    { src: '/marti-portfolio/assets/img2.png', title: 'IN BETWEEN II', year: '2020', collection: 'Portraits' },
    { src: '/marti-portfolio/assets/img3.png', title: 'SILENT ROOMS II', year: '2019', collection: 'B&W' },
  ],
};

export const contact = {
  title: 'Contattami',
  intro: 'Hai un progetto in mente?\nScrivimi, sarò felice\ndi sentirti.',
  polaroidSrc: '/marti-portfolio/assets/polaroid.png',
  successMessage: 'Messaggio inviato. Grazie!',
};

export const nav = [
  { id: 'portfolio', number: '01', label: 'Portfolio' },
  { id: 'about',     number: '02', label: 'About me' },
  { id: 'contact',   number: '03', label: 'Contattami' },
];
