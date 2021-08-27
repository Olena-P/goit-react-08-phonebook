import PropTypes from 'prop-types';
import { PhoneBook } from './Container.styled';

export default function Container({ children }) {
  return <PhoneBook>{ children}</PhoneBook>
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

// import { Title, PhoneBook } from "./Container.styled";

// const Container = ({ title, children }) => {
//   return (
//     <PhoneBook>
//       {title && <Title>{title}</Title>}
//       {children}
//     </PhoneBook>
//   );
// };

// export default Container;
