import Link from "next/link";

const Header = () => (
    <div>
        <a href='/'>
            <h1 className="title">
                Oktay <span>Aydoğan</span>
            </h1>
            <p className="description">
                Full Stack <code>web.developer</code>
            </p>
        </a>

        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
          }
          
          span {
            color: #0070f3;
            text-decoration: none;
          }
    
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
    
          .title,
          .description {
            text-align: center;
          }
    
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
    
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>
    </div>
);

export default Header;
