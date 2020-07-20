const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'http://placecorgi.com/500/300',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'coats',
      imageUrl: 'http://placecorgi.com/500/300',
      id: 2,
      linkUrl: 'shop/coats',
    },
    {
      title: 'collars',
      imageUrl: 'http://placecorgi.com/500/300',
      id: 3,
      linkUrl: 'shop/collars',
    },
    {
      title: 'booties',
      imageUrl: 'http://placecorgi.com/500/300',
      size: 'large',
      id: 4,
      linkUrl: 'shop/booties',
    },
    {
      title: 'treats',
      imageUrl: 'http://placecorgi.com/500/300',
      size: 'large',
      id: 5,
      linkUrl: 'shop/treats',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
