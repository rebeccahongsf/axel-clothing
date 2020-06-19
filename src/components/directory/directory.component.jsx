import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'http://placecorgi.com/500/300',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'coats',
          imageUrl: 'http://placecorgi.com/500/300',
          id: 2,
          linkUrl: 'coats',
        },
        {
          title: 'collars',
          imageUrl: 'http://placecorgi.com/500/300',
          id: 3,
          linkUrl: 'collars',
        },
        {
          title: 'booties',
          imageUrl: 'http://placecorgi.com/500/300',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'treats',
          imageUrl: 'http://placecorgi.com/500/300',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          // <MenuItem
          //   key={section.id}
          //   title={section.title}
          //   imageUrl={section.imageUrl}
          // />
          // destructured
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
