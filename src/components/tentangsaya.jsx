import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class TentangSaya extends Component {
  render() {
    return (
      <div
        className='content-body'
        style={{
          overflow: 'auto',
          height: 'inherit'
        }}
      >
        <Grid className='content-grid2'>
          <Cell col={3}>
            <div className='content-list'>
              <img
                src='https://lh3.googleusercontent.com/pw/AIL4fc-ySbiGMbsBNfcuIyFQGHaB2PIo1_4H4AnQ72m0LFdxAfPzbHtq7-0-h31q9zgiTckVMjCEtv-GwGXkvhdTwK4f5qeltQU93FvlQqYthF3Ha0qiSACnUV1h12VylgMCqUKShzSZ0ctMWwN4sBS4ZyCfNOrSFUfjKTRvxOBZvIyZGt8amm7Oo0Aw1VC9DWzYbrLW1-fkX4vTBy9gXwCl4kBi7kQgCRDJArQJ-RZyYypfR20y25BEnJFpcV2BZcRRS94dHAxu7YZy8SPZRvmLeuudTEKGVE3JZwugEhXNp5b80yoBi8av9zH8syVb3swmkM8GsQUZq_G8uZFx1ClCCcPx0WY1rzXV7f-nwcH26ZGcHVdXTe4-D7Qvp7GjioEX5vT19jcoF4ZwJCzKQBTamrueRNNQMkXJxYllS7N4dN2CnvbkjfcoSj1uDEQCoVW5ZRcdZu6ByigGTzmESz4yB7xlFQwN4QxDuHAtz5BrZH3zhrcWKTajTTQB6j-W8d6IDQfoAsgFZ3OzkRe4eaQwXd2Tq9v44MB-gemoDdLRCcUZcPQIPCOH8zZRZWpxA0Y3mJ_7clNsfaLVZpx-FcxCmyjBYUHro55vhbQgu31eoKeXoDgGp935q6yXsbCN_a5vxvodhh_9gMmdJGuUGPev5Yp_9a1cvE3b7rMOoabtFkGqlgNfOZVdKMrj2JrNvGzgyTajWhSrbvBeRGSKg4O8AAwcTM8jq-XZEGuVarXQxDA-kLa68VCR0uNiSLAIaI_OrH_F6ybSQDtwbR6MLZfr3XwPA-1yKdDkIpemO7jLgXC6cVtjXzSvtJvDCImdedbh-4EO3abhJh_S2QnbN8hwMkwIhpcrY0H4SQ1XVd4pwrDy6RN5oNlEK3CplDOxaE56rTA7pyhYlwdIbcc4mJJV2Q=w468-h667-s-no?authuser=0' width='80%'
                alt='avatar' className='imgCenter'
              />
              <h4>Anri Nobel Ibrahim</h4>
              <hr style={{ borderTop: '3px solid #833fb2' }} />
              <center>
                <p>Informasi tentang Anri</p>
                <p>Pengguna React</p>
                <p>
                  Email:{' '}
                  <a
                    href='mailto:anri.nobel@gmail.com?Subject=Hello%20Node.js%20Programmer!'
                    target='_top'
                  >
                    anri.nobel@gmail.com
                  </a>
                </p>
                <p>
                  Github:{' '}
                  <a
                    href='https://github.com/AnriNobel'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    https://github.com/AnriNobel
                  </a>
                </p>
              </center>
            </div>
          </Cell>

          <Cell
            className='resume-right-col'
            col={9}
            style={{ marginBottom: '90px' }}
          >
            <h4>Riwayat</h4>
            <Grid>
              <Cell col={4}>
                <p>Jully</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  Saya mulai menggunakan Udemy.
                </h5>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p>Sekarang</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                  Mempraktikannya :)
                </h5>
              </Cell>
            </Grid>
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h4>Penggunaan Bahasa Pemrograman</h4>
            <Grid>
              <Cell col={4}>
                <p>1 </p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>Java</h5>
              </Cell>
              <Cell col={4}>
                <p>2</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>Node</h5>
              </Cell>
              <Cell col={4}>
                <p>3</p>
              </Cell>
              <Cell col={8}>
                <h5 style={{ marginTop: '0px' }}>
                 React
                </h5>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default TentangSaya;
