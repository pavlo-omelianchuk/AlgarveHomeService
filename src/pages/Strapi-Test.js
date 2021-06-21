// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { headData } from '../mock/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';
// import { Link, StaticQuery, graphql } from 'gatsby';

// export default () => {
//   const { title, lang, description } = headData;

//   return (
//     <StaticQuery
//       query={graphql`
//         query MyQuery {
//           allStrapiMessages {
//             nodes {
//               greetings
//               id
//             }
//           }
//         }
//       `}
//       render={(data) => (
//         <>
//           <Helmet>
//             <meta charSet="utf-8" />
//             <title>{title || 'Gatsby Simplefolio'}</title>
//             <html lang={lang || 'en'} />
//             <meta name="description" content={description || 'Gatsby Simplefolio'} />
//           </Helmet>
//           {data.allStrapiMessages.nodes.map((res, i) => (
//             <div key={i}>
//               {res.greetings}
//               {res.id}
//             </div>
//           ))}
//           <Link to="/404/"> go go go</Link>
//         </>
//       )}
//     />
//   );
// };
