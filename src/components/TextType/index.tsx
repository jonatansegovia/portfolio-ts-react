import { useSelector } from 'react-redux';

import Typography, { TypographyTypeMap } from '@mui/material/Typography';

interface TextProps {
  variant?: TypographyTypeMap['props']['variant'];
  component?: React.ElementType;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  firstText: string;
  secondText: string;
  align?: TypographyTypeMap['props']['align'];
}

type RootState = {
  language: string;
};

const TextType = ({
  //   children,
  variant = 'body1',
  component = 'h3',
  onClick,
  firstText,
  secondText,
  align,
}: React.PropsWithChildren<TextProps>) => {
  const { language }: any = useSelector<RootState>((state) => state.language);

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
