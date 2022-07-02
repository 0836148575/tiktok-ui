import Header from '~/components/Layout/components/Header';
import Silebar from './Silebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('warrper')}>
            <Header />
            <div className={cx('container')}>
                <Silebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
