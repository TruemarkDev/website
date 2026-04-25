// TODO: @prakash this file does not contain html or react..move to constants or utils folder?

const twitterCard = ({ title, description, image }) => [
  { property: 'og:locale', content: 'en_US' },
  { property: 'og:site_name', content: 'Truemark Technology' },
  {
    property: 'og:title',
    content: title,
  },
  {
    property: 'og:description',
    content: description,
  },
  {
    property: 'og:image',
    content: image,
  },
];

export default twitterCard;
