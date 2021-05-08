import PropTypes from 'prop-types';

export const AlbumShape = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  collectionName: PropTypes.string,
};

export const SongShape = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  trackCount: PropTypes.number.isRequired,
  tracName: PropTypes.string,
};
