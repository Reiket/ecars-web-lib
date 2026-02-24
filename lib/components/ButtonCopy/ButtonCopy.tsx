import type {FC} from 'react';
import {ButtonWithIcon} from '@/components/ButtonWithIcon/ButtonWithIcon';
import type {ElementProps} from '@/services/types';
import {useCopy} from '@/services/hooks/useCopy';
import {Icons} from '@/services/icons';

interface Props extends ElementProps {
  text: string;
  copyHref: string;
}

export const ButtonCopy: FC<Props> = ({block, text, copyHref}) => {
  const {isCopied, copy} = useCopy();
  const buttonText = isCopied ? 'Copied!' : text;
  const handleShareClick = () => {
    void copy(copyHref);
  };
  return (
    <ButtonWithIcon
      onClick={handleShareClick}
      block={block}
      size="small"
      color="gray"
      LeftIcon={Icons.Link}
      disabled={isCopied}
    >
      {buttonText}
    </ButtonWithIcon>
  );
};
