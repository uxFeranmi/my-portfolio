// import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/resume.module.scss';

// 1 : 1.42 width to height ratio. A4 paper dimensions.
const Resume = ()=> {
    return <>
        <Head key={'<head> content'}>
            <title>Feranmi's Resume</title>
            <link rel="icon" href="/favicon.png" type="image/png" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        </Head>

        <main key={'Main content'} className={styles['main-content']}>
            <section className={styles['main-section']}>
                <h1 className={styles.h1}>
                    GIFT EGWUENU <br />
                    <small>Frontend Developer & Content Creator</small>
                </h1>

                <h2 className={styles.h2}>ABOUT</h2>
                <p>
                    Gift Egwuenu is a front-end developer passionate about making the web accessible to
                    everyone and advocating building open and inclusive developer communities. She loves sharing
                    her knowledge and does that through content creation on her blog and YouTube channel. She's
                    a Media Developer Expert at Cloudinary, Microsoft MVP, an Auth0 Ambassador, and a Nuxt.js
                    Ambassador.
                </p>

                <h2 className={styles.h2}>EXPERIENCE</h2>
                <>
                    <h3 className={styles.h3}>
                        FRONTEND DEVELOPER & DEVELOPER EVANGELIST <br />
                        <small>Datopian | March 2020 - June 2020</small>
                    </h3>
                    <ul>
                        <li>Designed and developed client facing user interfaces.</li>
                        <li>Communicated with clients and designed UI mockups.</li>
                        <li>
                            Worked closely and interacted with the Frictionless Data Community via
                            (chats, remote hangouts, and in-person events).
                        </li>
                        <li>Wrote documentation, guides and blog posts for Frictionless Data.</li>
                    </ul>

                    <h3 className={styles.h3}>
                        SOFTWARE DEVELOPER <br />
                        <small>Andela | Aug 2018 - Mar 2020</small>
                    </h3>
                    <ul>
                        <li>
                            Responsible for building and deploying interactive web application
                            using front end technologies.
                        </li>
                        <li>
                            Collaborate excellently with peers and stakeholders in fast-paced
                            distributed team.
                        </li>
                    </ul>
                </>
            </section>

            <aside key={'Sidebar'} className={styles['sidebar']}>
                <img src="/assets/dp.jpg" className={styles['display-picture']} />

                <h2 className={styles.h2}>CONTACT</h2>
                <dl>
                    <dt>Email: </dt>
                    <dd>laurandidi21@gmail.com</dd>

                    <dt>Website: </dt>
                    <dd>www.giftegwuenu.com</dd>

                    <dt>Location: </dt>
                    <dd>Haarlem, Netherlands</dd>
                </dl>
            
                <h2 className={styles.h2}>SOCIAL</h2>
                <dl>
                    <dt>Twitter: </dt>
                    <dd>@lauragift21</dd>

                    <dt>GitHub: </dt>
                    <dd>@lauragift_</dd>

                    <dt>LinkedIn: </dt>
                    <dd>@lauragift_</dd>
                </dl>
    
                <h2 className={styles.h2}>SKILLS & EXPERTISE</h2>
                <p>
                    HTML, CSS, JavaScript,
                    Vue, React, Webpack,
                    GraphQL, Jamstack, Node.js,
                    SQL, Gridsome, Technical Writing,
                    Adobe XD
                </p>

                <h2 className={styles.h2}>EDUCATION</h2>
                <dl>
                    <dt>BSc. COMPUTER SCIENCE | 2015</dt>
                    <dd>Houdegbe North American University, Cotonou, BN.</dd>
                </dl>
            </aside>
        </main>
    </>;
};

export default Resume;
