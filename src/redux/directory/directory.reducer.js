const INITAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
