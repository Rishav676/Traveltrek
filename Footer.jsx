import Container from '@material-ui/container'
import Grid from '@material-ui/grid'
import Box from '@material-ui/box'
import { textAlign } from '@mui/system'


export default function Footer(){
    return(
        <footer>
        <Box px={{ xs : 4, sm : 15 }}
             px={{ xs : 6, sm : 15 }}
             bgcolor="text.Secodary"
             color = "Cyan">
            <Container maxWidth="1g">
                <Grid container spacing = {5}>
                  <Grid item xs ={12} sm ={4}>
                     <Box borderBottom = {1}>Help</Box>
                     <Box>
                        <link href='/' color="inherit">
                            Contact
                        </link>
                        </Box>
                        <Box>
                        <Link href='/' color="inherit">
                            Suport
                        </Link>
                        </Box>
                        <Box>
                        <Link href='/' color="inherit">
                            Privacy policy
                        </Link>
                        </Box>
                  </Grid>
                  <Grid item xs ={12} sm ={4}>
                     <Box borderBottom = {1}>Messages</Box>
                     <Box>
                        <Link href='/' color="inherit">
                            social
                        </Link>
                        </Box>
                        <Box>
                        <Link href='/' color="inherit">
                            email
                        </Link>
                        </Box>
                        <Box>
                        <Link href='/' color="inherit">
                             THANK YOU
                        </Link>
                        </Box>
                  </Grid>
                </Grid>
                <Box>textAlign="centre" pt ={{ xs :5, sm: 10 }} pb = {{ xs :5, sm: 0 }}
                       TRAVEL TREK &reg;{new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
        </footer>
    )
}