import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './FooterColumn.module.scss';

const FooterColumn = (props) => {
    const {
        header,
        itemList,
        children,
        ...restProps
    } = props;

    return (
        <div className={'d-flex flex-column mr-5'} {...restProps}>
            <h6 className={cx(styles.header, 'mb-2')}>{header}</h6>
            <ul className={styles.footerList}>
                {
                    itemList.map(item =>
                        (<li key={item.key}><a href={item.url}>{item.content}</a></li>)
                    )
                }
            </ul>
        </div>
    );
};

FooterColumn.displayName = 'Column';

FooterColumn.propTypes = {
  header: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.oneOfType(
          [PropTypes.string, PropTypes.number]
      ).isRequired,
      content: PropTypes.string.isRequired,
      url: PropTypes.string
  })),
};

export default React.memo(FooterColumn);
