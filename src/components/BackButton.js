import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';


export const BackButton = () => {

  const history = useHistory();

  const handleClickButton = () => {
    history.goBack();
  }
    
  return ( 
    <IconButton onClick={handleClickButton} style={{ marginRight: 20, padding: 0 }} color="primary">
      <ArrowBackIcon />
    </IconButton>
  );
}
 