import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <div className="container">
    <Head>
      <title>Detail</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Header/>

      <div className="grid">
          <div className="card">
              <h3>Lorem ipsum dolor sit amet</h3>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan gravida felis, a sagittis odio tempor id. Morbi ac purus lacinia, posuere nisi commodo, commodo ipsum. Aenean viverra magna non porttitor luctus. Sed in volutpat est, eget congue enim. Proin at suscipit purus, sit amet aliquam mi. Suspendisse potenti. Fusce laoreet, magna ac auctor aliquam, est nulla lacinia massa, sed vulputate tortor lorem sed tortor. Curabitur ac risus elementum, efficitur diam quis, elementum dui. Sed nulla orci, luctus ac scelerisque et, pretium ut justo. Etiam sagittis augue tortor. Praesent nunc risus, placerat eget metus nec, tempus semper dui. Vivamus nec diam consectetur, aliquam mi eu, consectetur lectus. Nulla ac feugiat metus. Pellentesque euismod purus id nulla aliquet sagittis. Nulla eget bibendum magna, nec posuere massa.
              </p>
              <p>
                  Phasellus venenatis lorem sapien, eu ornare nisi ultrices id. Aliquam risus leo, ultricies in euismod blandit, rhoncus at augue. Cras consequat neque sit amet ipsum feugiat vehicula. Praesent egestas iaculis maximus. Ut efficitur eros elit, id vehicula sapien gravida in. Sed cursus sit amet ipsum id fringilla. Pellentesque vel porta purus.
              </p>
              <p>
                  Suspendisse pellentesque neque et nibh tempus, sit amet efficitur urna posuere. Aenean et nisi eleifend diam scelerisque malesuada eu ut turpis. Quisque tristique magna eu placerat euismod. Fusce at scelerisque lacus. Fusce a malesuada enim. Etiam volutpat lorem nec mi cursus, vitae tempus sem aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vel est ullamcorper massa varius viverra. Maecenas viverra, enim cursus rhoncus venenatis, metus quam semper nunc, nec finibus risus leo eget ligula.
              </p>
              <p>
                  Fusce tristique, diam id tristique hendrerit, est dolor vulputate libero, semper dictum sem leo euismod risus. Nunc tortor nulla, tempor sit amet erat nec, facilisis volutpat risus. Proin a malesuada purus. Suspendisse bibendum massa nisl, a consectetur quam ullamcorper vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vitae fringilla tortor. Mauris fringilla lacus sed purus dignissim aliquet. Curabitur quis nulla eleifend velit pretium fermentum id ac nulla. Nunc aliquam augue id enim pulvinar, eu pharetra justo tristique. Suspendisse consequat tempus lectus a sodales. Phasellus sodales odio vel fermentum finibus. Maecenas egestas felis non urna sollicitudin lacinia. Aenean ac purus pretium tortor rhoncus cursus sed eget leo. Nulla quis aliquam urna, vitae interdum lacus. Donec quis magna mauris.
              </p>
              <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer pretium facilisis orci ac volutpat. Integer cursus urna nisi, id malesuada odio euismod at. Ut pulvinar fringilla risus, quis ullamcorper eros dignissim sit amet. Pellentesque fringilla feugiat egestas. Pellentesque porta blandit pharetra. Maecenas id nulla tincidunt, egestas purus vel, varius diam. Duis quis diam convallis, semper urna sed, feugiat arcu. Etiam dignissim pharetra erat, eget eleifend lorem. Etiam porttitor nunc sagittis gravida eleifend. Sed a purus odio. Suspendisse vitae nunc vitae enim sagittis tincidunt. Cras ornare vestibulum felis, non sollicitudin lacus. Nam luctus feugiat est, ac auctor nulla molestie eu.
              </p>
          </div>
      </div>
    </main>

      <Footer/>

    <style jsx>{`
    .container {
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    
    main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    
    a {
    color: inherit;
    text-decoration: none;
    }
    
    code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }
    
    .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    max-width: 1200px;
    margin-top: 3rem;
    }
    
    .card {
    margin: 1rem;
    flex-basis: 100%;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    }
    
    .card h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    }
    
    .card p {
    margin: 20px 0;
    font-size: 1.25rem;
    line-height: 1.5;
    }
    
    @media (max-width: 600px) {
    .grid {
    width: 100%;
    flex-direction: column;
    }
    }
    `}</style>

    <style jsx global>{`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: Quicksand, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    
    * {
    box-sizing: border-box;
    }
    `}</style>
  </div>
)

export default Home
