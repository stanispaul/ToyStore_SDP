import React, { useState } from 'react';

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const containerStyle = {
    maxWidth: '1199px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const divCenterStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '80px 0px',
  };

  const profileContentStyle = {
    width: 'min(400px, 100%)',
    borderRadius: '10px',
    backgroundColor: '#8ec5fc',
    backgroundImage: 'linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)',
    transition: 'opacity 700ms, transform 700ms',
  };

  const avatarStyle = {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  };

  const avatarImgStyle = {
    transition: 'opacity 350ms, transform 350ms',
    transform: isHovered ? 'translateY(-80px)' : 'translateY(0)',
  };

  const detailsStyle = {
    position: 'relative',
    width: '100%',
  };

  const profileNameStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 350ms',
    transform: isHovered ? 'translateY(-80px)' : 'translateY(0)',
  };

 

  

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={divCenterStyle}>
        <div style={profileContentStyle}>
          <div style={avatarStyle}>
            <img
              src="https://img.icons8.com/?size=192&id=20751&format=png"
              alt="avatar"
              style={avatarImgStyle}
            />
          </div>
          <div style={detailsStyle}>
            <div style={profileNameStyle}>
              <h4>Stanis Paul</h4>
              <p>Web Developer</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
