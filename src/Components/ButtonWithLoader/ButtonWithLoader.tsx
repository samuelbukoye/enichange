import { FormButton, Loader } from './ButtonWithLoader.styles';

interface ButtonWithLoaderProps {
  name?: string;
  isLoading?: boolean;
  onClick: any;
}

function ButtonWithLoader({ name, isLoading, onClick }: ButtonWithLoaderProps) {
  return (
    <FormButton onClick={onClick}>
      {name || 'CLICK HERE'}
      {isLoading && (
        <Loader>
          <i className="fa fa-spinner fa-spin"></i>
        </Loader>
      )}
    </FormButton>
  );
}

export default ButtonWithLoader;
