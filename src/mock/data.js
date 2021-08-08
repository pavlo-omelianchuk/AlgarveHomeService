import { nanoid } from 'nanoid';

// HEADER DATA
export const headerData = {
  logoHREF: '/#hero',
  brandName: 'Palo Criativo',
  linkURL1: '/#hero',
  linkText1: 'Home',
  linkURL2: '/#about-qnchor',
  linkText2: 'Sobre Nos',
  linkURL3: '/nossos-clientes',
  linkText3: 'Clientes',
  linkURL4: '/#services-qnchor',
  linkText4: 'Serviços',
  linkURL5: '/#contacts-qnchor',
  linkText5: 'Contactos',
};

// HEAD DATA
export const headData = {
  title: 'Health Massage & Beauty Algarve',
  titleBlog: 'Blog - Health Massage & Beauty Algarve',
  lang: 'en',
  description:
    'Mobile Massage and Beauty services available in Sagres, Lagos, Portimão, Albufeira, Vale de Lobo and over all the Algarve. We will make your home more relaxing with best Masseurs and Beauticians.',
};

// HERO DATA
// export const heroData = {
//   title: '',
//   name: 'Dan Algarve',
//   subtitle: 'Relaxation, prevention & therapy',
//   cta: 'Contact',
// };

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
