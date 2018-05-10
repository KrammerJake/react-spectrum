import FieldLabel from '../src/FieldLabel';
import Provider from '../src/Provider';
import React from 'react';
import Select from '../src/Select';

export function VerticalCenter({children, className, style}) {
  return (
    <div
      className={ className }
      style={
        {
          position: 'absolute',
          transform: 'translate(0px, -50%)',
          top: '50%',
          left: 0,
          right: 0,
          textAlign: 'center',
          ...style
        }
      }
    >
      { children }
    </div>
  );
}

export function VerticalTop({children, className, style}) {
  return (
    <div
      className={ className }
      style={
        {
          position: 'relative',
          top: 0,
          left: 0,
          right: 0,
          ...style
        }
      }
    >
      { children }
    </div>
  );
}

export class StoryWrapper extends React.Component {
  state= {
    theme: 'light',
    scale: 'medium'
  }
  render() {
    return <Provider theme={this.state.theme} scale={this.state.scale}>
      <div style={{position: 'absolute', right: 100}}>
        <FieldLabel label="Theme" position="left">
          <Select onChange={theme => this.setState({theme})} options={[{label: "Light", value: "light"}, {label: "Lightest", value: "lightest"}, {label: "Dark", value: "dark"}, {label: "Darkest", value: "darkest"}]} />
        </FieldLabel>
        <FieldLabel label="Scale" position="left">
          <Select onChange={scale => this.setState({scale})} options={[{label: "Medium", value: "medium"}, {label: "Large", value: "large"}]} />
        </FieldLabel>
      </div>
      {this.props.children}
    </Provider>
  }
}