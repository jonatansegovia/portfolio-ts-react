import { Button, ButtonProps } from '@material-ui/core';

const CustomButton = <C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>
) => {
  const { children, ...rest } = props;
  console.log(children, rest);
  return <Button {...rest}>{children}</Button>;
};

export default CustomButton;
