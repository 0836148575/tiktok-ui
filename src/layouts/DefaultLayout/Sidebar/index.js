import classNames from 'classnames/bind';
import styles from './Silebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('warrper')}>
            <h2>Silebar</h2>
        </aside>
    );
}

export default Sidebar;
