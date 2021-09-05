import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/app-shell.module.scss';

const AppShell = (props)=> {
  return <>
    <Head key={'Site-wide <head> content'}>
      <title>Feranmi Akinlade | Front-end Engineer</title>
      <link rel="icon" href="/favicon.png" type="image/png" />

      {/* FONTS */}
      {/* <link rel="preload" href="fonts/webfont.woff2" as="font" type="font/woff2" crossOrigin="true" /> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
    </Head>

    <header key={'Titlebar'} className={styles['site-header']}>
      <h1 className={styles['page-title']}>
        <Link href={{ pathname: '/', hash: '#about' }}>
          <a>Feranmi Akinlade</a>
        </Link>
      </h1>

      <nav className={styles['main-nav']}>
        <ul className={styles['main-nav__list']}>
          <li className={styles['main-nav__item']}>
            <Link href={{ pathname: '/', hash: '#speaking' }}>
              <a>Speaking</a>
            </Link>
          </li>
          <li className={styles['main-nav__item']}>
            <Link href={{ pathname: '/', hash: '#writing' }}>
              <a>Writing</a>
            </Link>
          </li>
          <li className={styles['main-nav__item']}>
            <a href="mailto:uxFeranmi@gmail.com" title="Send me an email">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main key={'Main content'} className={styles['main-content']}>
      {props.children}
    </main>

    <footer key={'Site footer'} className={styles['site-footer']}>
      <address>
        <a href="https://twitter.com/uxFeranmi" title="Find me on Twitter"
            target="_blank" rel="noopener noreferrer">
          Twitter
        </a> &nbsp;
        <a href="https://github.com/uxFeranmi" title="My GitHub profile"
            target="_blank" rel="noopener noreferrer">
          GitHub
        </a> &nbsp;
        {/* <a href="https://stackoverflow.com/users/story/7665742"
            target="_blank" rel="noopener noreferrer"
            title="My developer story on Stack Overflow">
          Stack Overflow
        </a> &nbsp; */}
        <a href="https://www.linkedin.com/in/uxferanmi/"
            target="_blank" rel="noopener noreferrer" title="My LinkedIn profile">
          LinkedIn
        </a> &nbsp;
        <a href="mailto:uxFeranmi@gmail.com" title="Send me an email">
          Contact me
        </a> &nbsp;
      </address>
    </footer>
  </>;
};

export default AppShell;
