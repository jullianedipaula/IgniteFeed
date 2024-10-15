import { PencilLine } from 'phosphor-react'
import { Avatar } from '../avatar/Avatar';
import capa from '../../assets/capa.png';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={capa}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/jullianedipaula.png" />

        <strong>Julliane Di Paula</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
