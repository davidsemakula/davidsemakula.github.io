import * as React from 'react';
import {
  ComponentClass,
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';

const withElement = (
  elem: string | FunctionComponent<any> | ComponentClass<any, any>,
  defaultClassName?: string | Function,
  defaultProps?: { children?: ReactNode } | any
): FunctionComponent<HTMLAttributes<{}>> => {
  const { children: defaultChildren, ...restDefault } = defaultProps || {};
  return (props): ReactElement => {
    const { children, className, ...rest } = props || {};
    const parseClassName = name => {
      if (typeof name === 'function') {
        return name(props);
      }
      return name;
    };
    return React.createElement(
      elem as 'input',
      {
        className: [parseClassName(defaultClassName), className]
          .filter(Boolean)
          .join(' '),
        ...(restDefault || {}),
        ...(rest || {}),
      },
      children || defaultChildren
    );
  };
};

export default withElement;
