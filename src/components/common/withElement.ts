import * as React from 'react';
import {
  ComponentClass,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react';

const withElement = (
  elem: string | FunctionComponent<any> | ComponentClass<any, any>,
  defaultClassName?: string | Function,
  defaultProps?: { children?: ReactNode } | any
): ((
  props: { children?: ReactNode; className?: string } | any
) => ReactElement) => {
  const { children: defaultChildren, ...otherDefaultProps } =
    defaultProps || {};
  return (props): ReactElement => {
    const { children, className, ...otherProps } = props;
    const parseClassName = name => {
      if (typeof name === 'function') {
        return name(props);
      }
      return name;
    };
    return React.createElement(
      elem,
      {
        className: [parseClassName(defaultClassName), className]
          .filter(Boolean)
          .join(' '),
        ...(otherDefaultProps || {}),
        ...(otherProps || {}),
      },
      children || defaultChildren
    );
  };
};

export default withElement;
