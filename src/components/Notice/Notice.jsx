
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavoriteNotice } from '../../redux/slices/userSlice';
import '../../styles/Notice.scss';

const Notice = ({ notice }) => {
  const dispatch = useDispatch();

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteNotice(notice._id));
  };

  return (
    <div className="notice">
      <img src={notice.imgURL} alt={notice.title} className="notice-img" />
      <div className="notice-info">
        <h3>{notice.title}</h3>
        <p>{notice.comment}</p>
        {notice.isFavorite && (
          <button className="remove-favorite" onClick={handleRemoveFavorite}>
            <i className="icon-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Notice;
