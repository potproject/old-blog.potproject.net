import React from 'react';
import PropTypes from 'prop-types';
import './toc.scss';

const TableItem = ({ id, name, level }) => {
  let rhtml = (
    <li id={`tocLevel_${level}_${id}`}>
      <a href={`#${id}`} data-scroll>
        {name}
      </a>
    </li>
  );
  for (let i = 1; i < level; i += 1) {
    rhtml = <ul>{rhtml}</ul>;
  }
  return rhtml;
};

TableItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

const TableOfContent = ({ toc }) => (
  <div className="col-lg-2 d-none d-lg-block order-11 toc-wrap">
    <ul>
      {toc.map(({ id, name, level }) => (
        <TableItem id={id} name={name} key={id} level={level} />
      ))}
    </ul>
  </div>
);

TableOfContent.propTypes = {
  toc: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      level: PropTypes.number,
    }),
  ).isRequired,
};

export default TableOfContent;
