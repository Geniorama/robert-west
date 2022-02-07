import styles from "../styles/Chapters.module.css"
import Image from "next/image"

export default function Chapters({chapter, open, download}) {

    return (
        <div className={styles.rwChapters}>
            <div className={styles.rwChapter_content}>
                <Image
                    src="/img/chapter.png"
                    width={73}
                    height={73}
                    alt="Capitulo"
                    >
                </Image>
                <h3>{chapter}</h3>
            </div>
            <div className={styles.rwChapter__row}>
                <a className={styles.rwChapter__open} href={open} target="_blank" rel="noreferrer">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 14.5L32 2" stroke="#636363" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23.6667 2H32.0001V10.3333" stroke="#636363" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M32 20.3333V28.6667C32 29.5507 31.6488 30.3986 31.0237 31.0237C30.3986 31.6488 29.5507 32 28.6667 32H5.33333C4.44928 32 3.60143 31.6488 2.97631 31.0237C2.35119 30.3986 2 29.5507 2 28.6667V5.33333C2 4.44928 2.35119 3.60143 2.97631 2.97631C3.60143 2.35119 4.44928 2 5.33333 2H13.6667" stroke="#636363" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                <a className={styles.rwChapter__download} href={download} target="_blank" rel="noreferrer">
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33333 20.3332C3.33333 19.8911 3.15774 19.4672 2.84518 19.1547C2.53262 18.8421 2.10869 18.6665 1.66667 18.6665C1.22464 18.6665 0.800714 18.8421 0.488155 19.1547C0.175594 19.4672 -5.35307e-08 19.8911 -7.28523e-08 20.3332L-4.37114e-07 28.6665C-4.75757e-07 29.5506 0.35119 30.3984 0.976312 31.0235C1.60143 31.6486 2.44928 31.9998 3.33333 31.9998L26.6667 31.9998C27.5507 31.9998 28.3986 31.6486 29.0237 31.0235C29.6488 30.3984 30 29.5506 30 28.6665L30 20.3332C30 19.8911 29.8244 19.4672 29.5118 19.1547C29.1993 18.8421 28.7754 18.6665 28.3333 18.6665C27.8913 18.6665 27.4674 18.8421 27.1548 19.1547C26.8423 19.4672 26.6667 19.8911 26.6667 20.3332L26.6667 28.6665L3.33333 28.6665L3.33333 20.3332Z" fill="#3E3E3E"/>
                        <path d="M13.8333 23.1899C14.1432 23.4948 14.5602 23.6659 14.9949 23.6666L15.0049 23.6666C15.4453 23.6657 15.8673 23.4901 16.1783 23.1783L22.8449 16.5116C23.0041 16.3578 23.1311 16.1739 23.2184 15.9706C23.3058 15.7673 23.3518 15.5486 23.3537 15.3273C23.3556 15.106 23.3135 14.8865 23.2296 14.6817C23.1458 14.4768 23.0221 14.2907 22.8656 14.1343C22.7091 13.9778 22.523 13.854 22.3182 13.7702C22.1134 13.6864 21.8939 13.6442 21.6726 13.6462C21.4513 13.6481 21.2326 13.6941 21.0293 13.7814C20.8259 13.8688 20.642 13.9957 20.4883 14.1549L16.6666 17.9766L16.6666 1.99992C16.6666 1.55789 16.491 1.13397 16.1785 0.821407C15.8659 0.508846 15.442 0.333252 14.9999 0.333252C14.5579 0.333252 14.134 0.508846 13.8214 0.821407C13.5089 1.13397 13.3333 1.55789 13.3333 1.99992L13.3333 17.9766L9.51161 14.1549C9.35787 13.9957 9.17396 13.8688 8.97062 13.7814C8.76728 13.6941 8.54858 13.6481 8.32728 13.6462C8.10598 13.6442 7.88652 13.6864 7.68169 13.7702C7.47687 13.854 7.29078 13.9778 7.13429 14.1343C6.9778 14.2907 6.85405 14.4768 6.77024 14.6817C6.68644 14.8865 6.64427 15.106 6.6462 15.3273C6.64812 15.5486 6.6941 15.7673 6.78145 15.9706C6.86879 16.1739 6.99576 16.3578 7.15495 16.5116L13.8216 23.1783L13.8333 23.1899Z" fill="#3E3E3E"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
