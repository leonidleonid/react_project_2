import React from "react";
import { connect } from 'react-redux';
import css from "./Portfolio.module.css";
import SideInfo from "../common/SideInfo/SideInfo";
import Projects from "./Projects/Projects";

class Portfolio extends React.Component {

    componentDidMount() {
        this.props.updateBackTitle('portfolio');
    }

    render() {
        return (
            <div className={css.container + ' portfolio_container'}>
                <div className={css.sideInfo + ' sideInfo'}>
                    <SideInfo/>
                </div>
                <div className={css.mainInfo + ' portfolio_mainInfo'}>
                    <Projects/>
                </div>
            </div>
        )
    }
}

export default connect (
    null,
    dispatch => ({
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
    })
)(Portfolio)
