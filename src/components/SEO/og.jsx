// TODO: @prakash this file does not contain html or react..move to constants or utils folder?

const og = ({ title, description, image }) => [
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:site', content: '@truemark_nepal' },
  {
    name: 'twitter:title',
    content: title,
  },
  {
    name: 'twitter:description',
    content: description,
  },
  {
    name: 'twitter:image',
    content: image,
  },
];

export default og;
