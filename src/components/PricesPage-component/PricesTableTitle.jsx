import React from 'react';
import PropTypes from 'prop-types';

const PricesTableTitle = ({ className, title }) => <h2 className={className}>{title}</h2>;

PricesTableTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default PricesTableTitle;
