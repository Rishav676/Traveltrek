<<<<<<< HEAD
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link  from '@material-ui/core/Link'
=======
import Container from '@material-ui/container'
import Grid from '@material-ui/grid'
import Box from '@material-ui/box'
import { textAlign } from '@mui/system'
>>>>>>> beb4c8925f3750f4c5525b1cd5d91ef0f59dfa57


export default function Footer(){
    return(
        <footer>
        <Box px={{ xs : 4, sm : 15 }}
<<<<<<< HEAD
             py={{ xs : 6, sm : 15 }}
=======
             px={{ xs : 6, sm : 15 }}
>>>>>>> beb4c8925f3750f4c5525b1cd5d91ef0f59dfa57
             bgcolor="text.Secodary"
             color = "Cyan">
            <Container maxWidth="1g">
                <Grid container spacing = {5}>
                  <Grid item xs ={12} sm ={4}>
                     <Box borderBottom = {1}>Help</Box>
                     <Box>
<<<<<<< HEAD
                        <Link href='/' color="inherit">
                            Contact
                        </Link>
=======
                        <link href='/' color="inherit">
                            Contact
                        </link>
>>>>>>> beb4c8925f3750f4c5525b1cd5d91ef0f59dfa57
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
<<<<<<< HEAD
}
=======
}
>>>>>>> beb4c8925f3750f4c5525b1cd5d91ef0f59dfa57
