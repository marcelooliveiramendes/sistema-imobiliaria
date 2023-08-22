import React from 'react';
import {Grid, Container} from '@mui/material'
import './CadastroClientes.scss'

// import { Container } from './styles';
function CadastroClientes() {
  return(
    <div className='container'>
        <div className="content">
            <Grid container>
                <Grid item xs={8}>
                    xs=8
                </Grid>
                <Grid item xs={4}>
                    xs=4
                </Grid>
                <Grid item xs={6}>
                    xs=4
                </Grid>
                <Grid item xs={6}>
                    xs=8
                </Grid>
            </Grid>

        </div>
    </div>
  );
}

export default CadastroClientes;