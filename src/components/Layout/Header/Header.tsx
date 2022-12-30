import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Affix, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSidebarClosed,
  toggleSidebar,
} from '../../../app/reducers/uiSlice';
import PlayerSearch from '../../Dashboard/PlayerSearch/PlayerSearch';
import StyledHeader from './HeaderStyles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const sidebarClosed = useSelector(selectSidebarClosed);

  return (
    <Affix offsetTop={0}>
      <StyledHeader>
        <Row wrap={false} align="middle" gutter={[20, 8]}>
          <Col>
            {sidebarClosed ? (
              <MenuUnfoldOutlined
                onClick={() => dispatch(toggleSidebar())}
                style={{
                  fontSize: '16px',
                  color: '#0574fb',
                }}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => dispatch(toggleSidebar())}
                style={{
                  fontSize: '16px',
                  color: '#0574fb',
                }}
              />
            )}
          </Col>
          <Col>
            <PlayerSearch />
          </Col>
        </Row>
      </StyledHeader>
    </Affix>
  );
};

export default React.memo(Header);
