import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, ButtonBase } from '@material-ui/core'
import { FcContacts }  from 'react-icons/fc';
import { MdConfirmationNumber } from 'react-icons/md';
import { MdEmail }  from 'react-icons/md';
import { FaHome }  from 'react-icons/fa';
import Listed from './Listed'
import '../CSS/Footer.css'



const useStyles = makeStyles((theme) => ({
    foo: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#313035',
        color: '#fff',
    },
    name: {
        paddingLeft: '1%',
        margin: '0.7%',
    },
    ic: {
        backgroundColor: '#EC5E71',
        color: 'white',
        textTransform: 'none'
    },
}));

const StickyFooter = () => {
    const classes = useStyles();

    return (
        <div>
            <footer >
                <Grid className={classes.foo} item container>
                    <Grid xs={0} sm={1} />
                    <Grid item>
                        <FaHome fontSize='large' />
                        
                    </Grid>
                    <Grid className={classes.name} item >
                        <span style={{ fontWeight: '600' }}>List Your Show</span>
                    </Grid>
                    <Grid className={classes.name} item xs={6} sm={6}>
                        <span>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</span>
                    </Grid>
                    <Grid xs={1}/>
                    <Grid item xs={3} sm={2}>
                        <Button className={classes.ic} variant="contained" >
                            Contact!!
                    </Button>
                    </Grid>
                </Grid>
                
                {/* Supprt Icon*/}
                <Grid className="sup-main" item container spacing="1">
                    <Grid className="sup-action" item container xs={4} direction="column" justify="center" alignItems="center" >
                        <ButtonBase>
                            <FcContacts className="sup-icon" fontSize="large"/>
                        </ButtonBase>
                        <span className="sup"><a href="/">24/7 CUSTOMER SUPPORT</a></span>
                    </Grid>

                    <Grid className="sup-action" item container xs={4} direction="column" justify="center" alignItems="center">
                        <ButtonBase >
                            <MdConfirmationNumber className="sup-icon" fontSize="large"/>
                        </ButtonBase>
                        <span className="sup"><a href="/">RESEND BOOKING CONFIRMATION</a></span>
                    </Grid>

                    <Grid className="sup-action" item container xs={4} direction="column" justify="center" alignItems="center">
                        <ButtonBase >
                            <MdEmail className="sup-icon" fontSize="large"/>
                        </ButtonBase>
                        <span className="sup"><a href="/">SUBSCRIBE TO THE NEWSLETTER</a></span>
                    </Grid>
                </Grid>

                <Grid className={classes.foo} item container>
                    <Grid xs={1} />
                    <Grid item xs={10}>
                        <span className='link'>Online Movie Ticket Booking Mumbai | Online Movie Ticket Booking Delhi | Online Movie Ticket Booking Bengaluru | Online Movie Ticket Booking Hyderabad | Online Movie Ticket Booking Chennai | Online Movie Ticket Booking Kolkata | Online Movie Ticket Booking Noida | Online Movie Ticket Booking Ahmedabad | Online Movie Ticket Booking Pune</span>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>

                <Listed />
                
            </footer>
        </div>
    );
}

export default StickyFooter