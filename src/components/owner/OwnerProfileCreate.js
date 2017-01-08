import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemUpdate, itemCreate, resetForm } from '../../actions';
import { Card, CardSection, Button } from '../common';
import OwnerProfileForm from './OwnerProfileForm';

class OwnerProfileCreate extends Component {
  componentWillMount() {
      // debugger;
      this.props.resetForm();
  }
  onButtonPress() {
    const { itemName, category, description, itemImageUrl } = this.props;
    this.props.itemCreate({ itemName, category, description, itemImageUrl });
  }

  render() {
    return (
      <Card>
        <OwnerProfileForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { _id, itemName, category, description, itemImageUrl  } = state.itemForm;
  return { _id, itemName, category, description, itemImageUrl  };
};

export default connect(mapStateToProps, {
  itemUpdate, itemCreate, resetForm
})(OwnerProfileCreate);
