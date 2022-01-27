import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Reviews from './Reviews';
function App() {
  
  return (
    <Container > 
      <Box
      sx={{
        backgroundImage: 'linear-gradient(#e66465, #DAF7A6)',
        borderRadius:'5px',
        marginTop: '2%',
        marginBottom: '5%'
      }}>
      <Typography align='center' variant='h1' sx={{color:'#181818'}}>MIE Reviews</Typography>
      </Box>
      
      <Reviews/>
    </Container>
  );
}

export default App;
