import React from 'react';
import { MenuItem } from '../menu-item/menu-item.component';

import './directory.styles.scss';

export class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'http://placecorgi.com/500/300',
          id: 1,
        },
        {
          title: 'coats',
          imageUrl: 'http://placecorgi.com/500/300',
          id: 2,
        },
        {
          title: 'collars',
          imageUrl: 'http://placecorgi.com/500/300',
          id: 3,
        },
        {
          title: 'booties',
          imageUrl: 'http://placecorgi.com/500/300',
          size: 'large',
          id: 4,
        },
        {
          title: 'treats',
          imageUrl: 'http://placecorgi.com/500/300',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          // <MenuItem
          //   key={section.id}
          //   title={section.title}
          //   imageUrl={section.imageUrl}
          // />
          // destructured
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
