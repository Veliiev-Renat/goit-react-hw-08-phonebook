import css from '../Home/Home.module.css'
import { SVG } from 'svg/getSVG';
export default function Home() {
    return (
      <div className={css.box}>
      <h1 className={css.title}>
         Contacts welcome page
         <SVG name='home'/>
      </h1>
      </div>
      
    );
  }
  