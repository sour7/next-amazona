import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazon' : 'Amazona App'}</title>
        <meta name="description" content="Ecommmerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold">Amazona</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4 ">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner mt-44">
          <img
            src="https://media.nngroup.com/media/editor/2019/01/16/clarity.png"
            alt=""
            width="100%"
          />
        </footer>
      </div>
    </>
  );
};

export default Layout;
