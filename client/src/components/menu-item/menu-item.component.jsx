import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackGroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer 
        size={size} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
        <BackGroundImageContainer 
            className= 'background-image' 
            imageUrl={imageUrl}
        />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);