import { useEffect, useState } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import imgGoogle from '../../assets/images/auth/google.svg'
import imgLogo from '../../assets/images/auth/img_logo.png'
import imgLogin from '../../assets/images/auth/img_login.png'
import { GoogleButton } from '../../styles/CssStyled'
import { fetchData } from '../../components/FetchData'
import { AuthUrl } from '../../services/ApiUrls'
import '../../styles/style.css'

export default function Login() {
    const navigate = useNavigate()
    const [token, setToken] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('Token')) {
            // navigate('/organization')
            navigate('/app')
        }
    }, [token])

    return (
        <div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent='center'
                alignItems='center'
                sx={{ height: '100%', width: '100%', position: 'fixed' }}
            >
                <Grid
                    container
                    item
                    xs={8}
                    direction='column'
                    justifyContent='space-evenly'
                    alignItems='center'
                    sx={{ height: '100%', overflow: 'hidden' }}
                >
                    <Grid item>
                        <Grid sx={{ mt: 2 }}>
                            <img src={imgLogo} alt='register_logo' className='register-logo' />
                        </Grid>
                        <Typography variant='h5' style={{ fontWeight: 'bolder' }}>Sign In</Typography>
                        <Grid item sx={{ mt: 4 }}>
                            {/* Remove the Google login button */}
                            {/* <GoogleButton variant='outlined' onClick={() => login()} sx={{ fontSize: '12px', fontWeight: 500 }}>
                                Sign in with Google
                                <img src={imgGoogle} alt='google' style={{ width: '17px', marginLeft: '5px' }} />
                            </GoogleButton> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={8}
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    className='rightBg'
                    sx={{ height: '100%', overflow: 'hidden', justifyItems: 'center' }}
                >
                    <Grid item >
                        <Stack sx={{ alignItems: 'center' }}>
                            <h3>Welcome to BottleCRM</h3>
                            <p>Free and OpenSource CRM for small and medium businesses.</p>
                            <img
                                src={imgLogin}
                                alt='register_ad_image'
                                className='register-ad-image'
                            />
                            <footer className='register-footer'>
                                bottlecrm.com
                            </footer>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </div>
    )
}
