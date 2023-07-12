import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='beranda-grid'>
          <Cell col={12}>
            <img
              src='https://lh3.googleusercontent.com/pw/AIL4fc-ySbiGMbsBNfcuIyFQGHaB2PIo1_4H4AnQ72m0LFdxAfPzbHtq7-0-h31q9zgiTckVMjCEtv-GwGXkvhdTwK4f5qeltQU93FvlQqYthF3Ha0qiSACnUV1h12VylgMCqUKShzSZ0ctMWwN4sBS4ZyCfNOrSFUfjKTRvxOBZvIyZGt8amm7Oo0Aw1VC9DWzYbrLW1-fkX4vTBy9gXwCl4kBi7kQgCRDJArQJ-RZyYypfR20y25BEnJFpcV2BZcRRS94dHAxu7YZy8SPZRvmLeuudTEKGVE3JZwugEhXNp5b80yoBi8av9zH8syVb3swmkM8GsQUZq_G8uZFx1ClCCcPx0WY1rzXV7f-nwcH26ZGcHVdXTe4-D7Qvp7GjioEX5vT19jcoF4ZwJCzKQBTamrueRNNQMkXJxYllS7N4dN2CnvbkjfcoSj1uDEQCoVW5ZRcdZu6ByigGTzmESz4yB7xlFQwN4QxDuHAtz5BrZH3zhrcWKTajTTQB6j-W8d6IDQfoAsgFZ3OzkRe4eaQwXd2Tq9v44MB-gemoDdLRCcUZcPQIPCOH8zZRZWpxA0Y3mJ_7clNsfaLVZpx-FcxCmyjBYUHro55vhbQgu31eoKeXoDgGp935q6yXsbCN_a5vxvodhh_9gMmdJGuUGPev5Yp_9a1cvE3b7rMOoabtFkGqlgNfOZVdKMrj2JrNvGzgyTajWhSrbvBeRGSKg4O8AAwcTM8jq-XZEGuVarXQxDA-kLa68VCR0uNiSLAIaI_OrH_F6ybSQDtwbR6MLZfr3XwPA-1yKdDkIpemO7jLgXC6cVtjXzSvtJvDCImdedbh-4EO3abhJh_S2QnbN8hwMkwIhpcrY0H4SQ1XVd4pwrDy6RN5oNlEK3CplDOxaE56rTA7pyhYlwdIbcc4mJJV2Q=w468-h667-s-no?authuser=0' width='10%'
              alt='avatar'
              className='avatar-img'
            />

            <div className='banner-text'>
              <h1>Anri Nobel Ibrahim</h1>
              <hr />
              <p>
                Saya memperlajari membuat page portofolio
              </p>
              <div className='social-links'>
                <a
                  href='https:/instagram.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i
                    className='fa fa-instagram fa-3x social'
                    aria-hidden='true'
                  />
                </a>
                <a
                  href='https://github.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github fa-3x social' aria-hidden='true' />
                </a>
                <a
                  href='https://www.linkedin.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i
                    className='fa fa-linkedin fa-3x social'
                    aria-hidden='true'
                  />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Beranda;
