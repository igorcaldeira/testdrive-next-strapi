import Head from "next/head";

export default function Header() {
  return (
    <div className="container">
      <h1 className="title">
        Testdrive <a href="https://nextjs.org">Next + Strapi</a>
      </h1>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          padding-top: 90px;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
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
      `}</style>
    </div>
  );
}
