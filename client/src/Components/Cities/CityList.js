import React, { Component } from "react";
// import React from "react";
// import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getCities } from "../../Store/Actions/cityAction";
import PropTypes from "prop-types";

//import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./CityList.css";

class CityList extends Component {
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    cities: PropTypes.object.isRequired
    //isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getCities();
  }

  render() {
    const { cities } = this.props;
    return (
      <div className={cities}>
        <GridList cellHeight={200} spacing={1} className={cities}>
          {cities &&
            cities.map(cities => (
              <GridListTile
                key={cities.img}
                cols={cities.featured ? 2 : 1}
                rows={cities.featured ? 2 : 1}
              >
                <img src={cities.img} alt={cities.cityName} />
                <GridListTileBar
                  title={cities.cityName}
                  titlePosition="top"
                  actionIcon={
                    <IconButton className={cities.icon}>
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  className={cities.cityName}
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

CityList.propTypes = {
  cities: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    cities: state.citiesObj.cities
  };
};

//export default withStyles(styles)(CityList);

export default connect(
  mapStateToProps,
  { getCities }
)(CityList);
