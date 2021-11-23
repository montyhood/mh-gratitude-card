import PropTypes from "prop-types";
import './App.css';

function App({ headline, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>

      <h1>{headline}</h1>

    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'Gratitude',
  backgroundImage: '',
}

export default App;
