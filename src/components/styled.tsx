import React from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import { withStyles } from '@mui/styles';

/*
 *  Material-UI does not yet support ability to grab props within style()
 *  https://github.com/mui-org/material-ui/issues/7633
 *
 *  This is a workaround provided from the thread
 */

const styles = (theme: any, props: any, style: any) => {
  return typeof style === 'function' ? style(theme, props) : style;
};

class StyledComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  render() {
    const { classes, className = '', WrappedComponent, ...passThroughProps } = this.props as any;

    return <WrappedComponent classes={classes} className={className} {...passThroughProps} />;
  }
}

const styled = (WrappedComponent: any, customProps = {}) => {
  return (style: any, options = {}) => {
    const HOCProps = (WrappedComponent: any) => {
      return class _HOCProps extends React.Component<any> {
        constructor(props: any, public FinalComponent: any) {
          super(props);
          this.FinalComponent = withStyles((theme) => {
            const defaultStyles = styles(theme, props, style);
            const mergedStyles = merge(defaultStyles, props.styles ? props.styles : {});
            return mergedStyles;
          }, options)(StyledComponent);
        }

        render() {
          const { styles, ...otherProps } = this.props as any;
          return <this.FinalComponent {...customProps} {...otherProps} WrappedComponent={WrappedComponent} />;
        }
      };
    };
    return HOCProps(WrappedComponent);
  };
};

export default styled;
export { styled };
