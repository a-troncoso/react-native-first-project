import React, {Component} from 'react';
import { AppRegistry, Text, View, Image, Button, Alert } from 'react-native';

const steps = [
  { active: true, text:'Paso 1', image: './src/assets/copo.png' },
  { active: false, text:'Paso 2', image: './src/assets/copo.png' },
  { active: false, text:'Paso 3', image: './src/assets/copo.png' },
  { active: false, text:'Paso 4', image: './src/assets/copo.png' },
  { active: false, text:'Paso 5', image: './src/assets/copo.png' }
]

class Stepper extends Component {
  constructor(props) {
    super(props);
    this._renderStepText = this._renderStepText.bind(this);
  }

  get activeStep() {
    return this.props.steps.find(step => !!step.active);
  }

  _renderStepText() {
    return <Text>{this.activeStep.text}</Text>
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={require('./src/assets/copo.png')} style={{width: 200, height: 200}} />
        { this._renderStepText()}
        <Button
          onPress={this.props.onChangeStep}
          title='Siguiente'
        />
      </View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { steps };
    this._onChangeStep = this._onChangeStep.bind(this);
  }

  _onChangeStep() {
    let steps = this.state.steps;
    let activeStepIndex = steps.findIndex(step => !!step.active);
    steps[activeStepIndex].active = false;
    if (activeStepIndex === steps.length - 1) { steps[0].active = true; }
    else { steps[activeStepIndex + 1].active = true; }

    this.setState({ steps });
  }

  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Stepper
          steps={this.state.steps}
          onChangeStep={this._onChangeStep}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('FirstProject', () => App);
