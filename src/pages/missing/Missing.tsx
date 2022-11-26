import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <section style={{ padding: '100px' }}>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <Link to="/">Visit Our Homepage</Link>
    </section>
  );
};

export default Missing;