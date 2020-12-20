import React, { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'>;
type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, Props>((props, ref) => {
  return <button ref={ref} {...props} />;
});
