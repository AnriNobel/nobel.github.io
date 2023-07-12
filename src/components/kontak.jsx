import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Iframe from 'react-iframe';

class Kontak extends Component {
  render() {
    return (
      <div
        className='content-body'
        style={{
          overflow: 'auto',
          height: 'inherit'
        }}
      >
        <Grid className='content-grid'>
          <Cell col={5}>
            <h3>Contact Person</h3>
            <hr />
            <div className='content-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '25px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-phone' aria-hidden='true' />
                    +62 8129262590x
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true' />
                    <a
                      href='mailto:anri.nobel@gmail.com?Subject=Hello%20Node.js%20Programmer!'
                      target='_top'
                    >
                      anri.nobel@gmail.com
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-github' aria-hidden='true' />
                    <a href='https://github.com/AnriNobel'>
                    https://github.com/AnriNobel
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>

          <Cell col={5}>
            <h3>Alamat Jabatan</h3>
            <p style={{ width: '100%', margin: 'auto' }}>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-globe' aria-hidden='true' />
                    <h6>Jakarta</h6>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: '20px', fontFamily: 'Anton' }}
                  >
                    <i className='fa fa-globe' aria-hidden='true' />
                    <h6>Jakarta</h6>
                  </ListItemContent>
                </ListItem>
              </List>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Kontak;
