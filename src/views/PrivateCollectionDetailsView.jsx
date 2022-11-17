// export default function PrivateCollectionDetailsView({ collection }) {
//   const { url, path } = useRouteMatch();
//   const [privateCollection, setPrivateCollection] = useState(null);
//   useEffect(() => {
//     getCollection().then(setPrivateCollection);
//   }, []);
//   return (
//     <>
//       <ul>
//         {collection.map((privateCollection) => (
//           <li key={privateCollection._id}>
//             <Link to={`${url}/${privateCollection._id}`}>
//               {privateCollection.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <Route path={`${path}/:privateCollectionId`}>
//         <PrivateCollectionDetailsView privateCollection={privateCollection} />
//       </Route>
//     </>
//   );
// }
