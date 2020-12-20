import React, { ComponentPropsWithoutRef } from 'react';
import './div.scss';

type Props = ComponentPropsWithoutRef<'div'>;
type Ref = HTMLDivElement;

export const Div = React.forwardRef<Ref, Props>((props, ref) => {
  return <div className="div" ref={ref} {...props} />;
});
