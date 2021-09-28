import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import './home.scss';

class Home extends React.Component {
  static propTypes = {
    nombre: PropTypes.number,
  };

  static defaultProps = {
    nombre: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hasClick: false,
      time: new Date(),
      list: [],
    };
  }

  /*
    Initialiser des trucs
    Fetcher des API
  */
  componentDidMount() {
    // this.interval = setInterval(() => {
    //   this.setState({ time: new Date() });
    // }, 1000);
  }

  /*
    Controller une modification d'état ou de props
  */
  componentDidUpdate(prevProps, prevState) {

  }

  /*
    Fermer tous les listeners
  */
  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  handleClickButton() {
    // Valider le formulaire
    this.setState({ hasClick: true, borderType: 'border-type-red' });
  }

  renderHasClick() {
    if (!this.state.hasClick) return null;
    return <div>Tu as cliqué condition 2</div>;
  }

  render() {
    const { t } = this.props;
    console.log(this.props);
    return (
      <Link to="/light">{t('yes')}</Link>
    );

    // const { name, hasClick, borderType } = this.state;
    // console.log('Bonjour');
    // const users = [
    //   { id: '1', firstname: 'jean', lastname: 'dupont' },
    //   { id: '2', firstname: 'jeanne', lastname: 'duponne' },
    // ];
    //
    // return (
    //   <div id="Home">
    //     <div>
    //       <label htmlFor="testinput">Name:</label>
    //       <input
    //         name="name"
    //         type="text"
    //         className={borderType}
    //         value={name}
    //         onChange={(e) => this.setState({ name: e.target.value })}
    //       />
    //       <input
    //         type="button"
    //         value="Appuie !"
    //         onClick={this.handleClickButton.bind(this)}
    //       />
    //       {hasClick ? <div>Tu as cliqué condition 1</div> : <div>tu as pas cliqué</div>}
    //       {this.renderHasClick()}
    //     </div>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>Nom</th>
    //           <th>Prénom</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user) => (
    //           <tr key={user.id}>
    //             <td>{user.firstname}</td>
    //             <td>{user.lastname}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //
    //     <div>
    //       Datetime : {moment(this.state.time).format('DD/MM/YYYY HH:mm:ss')}
    //     </div>
    //
    //     <div>{this.props.nombre}</div>
    //   </div>
    // );
  }
}

export default withTranslation()(Home);
