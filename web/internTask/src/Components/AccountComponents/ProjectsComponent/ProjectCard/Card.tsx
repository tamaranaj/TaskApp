import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

interface OutlinedCardProps {
  id: string;
  name: string;
  
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const OutlinedCard = ({ id, name }: OutlinedCardProps) => {
  const navigate = useNavigate()
  const handleNavigateDetails = ()=>{
    navigate(`${id}`)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Card
        variant="outlined"
        className="cardContainer"
        sx={{ backgroundColor: 'white' }}
      >
        <CardContent sx={{ padding: '5px', paddingBottom: '0px' }}>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 11 }}>
            Project name:
          </Typography>
          <Typography component="div">
            <span style={{ textWrap: 'wrap', fontFamily:'inherit',fontSize:'1em' }}>{bull}{name}{bull}</span>
          </Typography>
        </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button size="small" onClick={handleNavigateDetails}>Details</Button>
        </CardActions>  
      </Card>
    </Box>
  );
};
