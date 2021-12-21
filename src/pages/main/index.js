import { CopyBlock, dracula } from "react-code-blocks";

import './style.scss';

const code =
`const App = () => {
    return (
      <div>
        <CelesteProvider>
          <ConnectButton />
  
          <ConnectedWrapper
            disconnectedComponent={<div>Please connect your wallet</div>}
          >
            <div>Your wallet is connected to this website</div>
  
            <NetworkWrapper
              info={
                <SwitchNetworkButton networkId={1}>
                  Switch to eth mainnet
                </SwitchNetworkButton>
              }
              chainIds={[1]}
            >
              <img src="https://example.com/image.png" alt="" />
            </NetworkWrapper>
          </ConnectedWrapper>
        </CelesteProvider>
      </div>
    );
  };
`;


const Main = () => {
    return(
        <div className="coolscroll">
            <section className="banner-img" style={{height: '100vh'}}>
                <div className="container has-background-daanger" style={{height: '100%', display: 'grid', placeItems: 'center'}}>
                    <div style={{width: '100%'}}>                    
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered  is-6">
                                <h1 className="title has-text-white is-1 has-font-celeste">Celeste JS</h1>
                                <p className="subtitle has-text-white is-3 has-font-celeste"> The web3 js framework  </p>
                            </div>
                            <div className="column has-">
                                <div style={{maxWidth: 'unset', background: 'bluae'}}>
                                    <CopyBlock
                                        language={'jsx'}
                                        text={code}
                                        showLineNumbers={true}
                                        theme={dracula}
                                        wrapLines={true}
                                        codeBlock
                                        style={{width: '0 !important'}}
                                    />
                                </div>                                
                            </div>                        
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="" style={{height: '100vh'}}>
                <div className="container">
                    asd
                </div>
            </section>
        </div>
    );
}

export default Main;