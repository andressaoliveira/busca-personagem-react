import { connect } from "react-redux";
import Personagens from './Personagens';
import { listarPersonagens } from '../../Infraestructure/Ducks/PersonagensDuck';

export const mapStateToProps = state => {
    const { personagens } = state;
    return { personagens };
};

export const mapDispatchToProps = dispatch => ({
    listarPersonagens: () => {
        dispatch(listarPersonagens())
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Personagens);