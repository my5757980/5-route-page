import style from './custom.module.css'
import Link from 'next/link'

export default function Navbar(){
    return(
          <section className={style.section}>
        <div className={style.container}>
          <nav className={style.nav}>
            <p className={style.log}>Navbar</p>
            <ul className={style.ul}>
             
      
      <Link className={style.link} href='/'>Home</Link>
      <br />
      <Link className={style.link} href='/About'>About</Link>
      <br />
      <Link className={style.link} href='/Services'>Services</Link>
      <br />
      <Link className={style.link} href='/Contact'>Contact</Link>
      <br />
      <Link className={style.link} href='/Feedback'>Feedback</Link>

      
      </ul>
      </nav>
      
        </div>
        </section>
        
    )
}