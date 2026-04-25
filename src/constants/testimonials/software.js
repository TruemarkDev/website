const antonAvatar = '/images/clients/anton/anton.jpg';
const antonProject = '/images/clients/anton/projects/price-insight.png';
const natalieAvatar = '/images/clients/natalie/natalie.jpg';
const natalieProject = '/images/clients/natalie/projects/natalieglebova-com.png';
const reneldyAvatar = '/images/clients/reneldy/reneldy.jpeg';
const reneldyProject = '/images/clients/reneldy/projects/artlords-com.png';
const testimonials = [
  {
    key: 'TS01',
    company: 'Idoleyes Interactive',
    client: 'Reneldy Senat',
    post: 'Owner',
    testimonial:
      "Truemark has been a valued partner for over 2 and a half years. In that time, Prakash and his team have proven to be invaluable in the planning and development of over half a dozen of our projects. <br /> I expect to work with a proactive team that takes the time to clearly understand my requirements, plan and develop kick ass applications, and deliver on time with confidence. With Truemark, you get that, as well as, a partner that's responsive, flexible, and is serious about resolving conflicts and meeting deadlines. <br /> The Truemark team has a wide-range of expertise in modern languages, frameworks, and technologies; frontend and backend engineering; user experience and design; and industry best practices – Something that's hard to find. That is why, time after time, we take our projects to Truemark.",
    logo: 'triviaDayLogo',
    photo: 'reneldy',
  },
  {
    key: 'TS02',
    company: 'Price Insight',
    client: 'Anton Hughes',
    post: 'Owner',
    testimonial:
      'I worked with Truemark to develop poc for my product Price Insight.<br /> Prabin is really easy to work with, and has a good understanding of react-native and javascript.<br /> I hope to work with him again one day.',
    logo: 'priceInsightLogo',
    photo: 'anton',
  },
  {
    key: 'TS03',
    company: 'Miss Universe 2005',
    client: 'Natalie Glebova',
    post: 'Author of “I AM WINNING”',
    testimonial:
      'I just launched my completely revamped website and couldn’t be any happier with the way my website turned out, and our experience working with Truemark Technology. When I met with them to discuss the project, I was very impressed with how easy they are to communicate with. They understood the requirement in short notice and delivered an amazing site in a tight deadline just before my book launch.',
    logo: 'iAmWinningBook',
    photo: 'natalie',
  },
];

const softwareTestimonials = [
  {
    key: 'TS03',
    company: 'https://natalieglebova.com/',
    client: {
      name: 'Natalie Glebova',
      bio: "Miss Universe 2005,<br /> Author of 'I AM WINNING'",
      avatar: natalieAvatar,
    },
    project: {
      name: 'natalieglebova.com',
      screenshot: natalieProject,
      url: 'https://natalieglebova.com/',
    },
    testimonial:
      'I just launched my completely revamped website and couldn’t be any happier with the way my website turned out, and our experience working with Truemark Technology. When I met with them to discuss the project, I was very impressed with how easy they are to communicate with. They understood the requirement in short notice and delivered an amazing site in a tight deadline just before my book launch.',
  },
  // {
  //   key: 'TS01',
  //   company: 'Idoleyes Interactive',
  //   client: {
  //     name: 'Reneldy Senat',
  //     bio: 'Owner<br /> Idoleyes Interactive, Trivia Day',
  //     avatar: reneldyAvatar,
  //   },
  //   project: {
  //     name: 'artlords.com',
  //     screenshot: reneldyProject,
  //     url: 'https://artlords.com/',
  //   },
  //   testimonial:
  //     "Truemark has been a valued partner for over 2 and a half years. In that time, Prakash and his team have proven to be invaluable in the planning and development of over half a dozen of our projects. <br /> I expect to work with a proactive team that takes the time to clearly understand my requirements, plan and develop kick ass applications, and deliver on time with confidence. With Truemark, you get that, as well as, a partner that's responsive, flexible, and is serious about resolving conflicts and meeting deadlines. <br /> The Truemark team has a wide-range of expertise in modern languages, frameworks, and technologies; frontend and backend engineering; user experience and design; and industry best practices – Something that's hard to find. That is why, time after time, we take our projects to Truemark.",
  // },
  {
    key: 'TS02',
    company: 'Price Insight',
    client: {
      name: 'Anton Hughes',
      bio: 'Owner <br />Price Insight <br />(Stock Trading Made Simple)',
      avatar: antonAvatar,
    },
    project: {
      name: 'Price Insight Mobile App',
      screenshot: antonProject,
      url: 'https://priceinsight.trade/',
    },
    testimonial:
      'I worked with Truemark to develop POC for my product Price Insight. Prabin is really easy to work with, and has a good understanding of react-native and javascript. I hope to work with him again one day.<br /><br />',
  },
];

export default softwareTestimonials;
