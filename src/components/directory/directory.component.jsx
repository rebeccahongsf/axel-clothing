import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import connect from 'react-redux';
import { createStruturedSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './directory.styles.scss';

class Directory = ({sections}) => (
  <div className="directory-menu">
    {this.state.sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

maptStateToProps = createStruturedSelector({
  sections: selectDirectorySections,
})

export default connect(maptStateToProps)(Directory);
