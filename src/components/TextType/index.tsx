import Typography, { TypographyTypeMap } from '@mui/material/Typography';

interface TextProps {
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  language: string;
  firstText: string;
  secondText: string;
  align?: TypographyTypeMap['props']['align'];
}

const TextType = ({
  //   children,
  variant = 'body1',
  component = 'span',
  onClick,
  language,
  firstText,
  secondText,
  align,
}: React.PropsWithChildren<TextProps>) => {
  return (
    <Typography
      variant={variant}
      component={component}
      onClick={onClick}
      align={align}
    >
      {language === 'ENG' ? firstText : secondText}
    </Typography>
  );
};

export default TextType;
