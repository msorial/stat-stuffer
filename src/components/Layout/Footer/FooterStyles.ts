import Layout from 'antd/es/layout';
import styled from 'styled-components';

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  background-color: #ffffff;
  padding: 10px 30px;
  border-top: 1px solid #e2e2e2;
  margin: 20px 0px 0px 0px;

  a {
    font-size: 25px;
    transform: scale(0.9);
    transition: 0.5s;
    display: inline-block;

    border: none;
    outline: none;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: white;
  }

  a:hover {
    transform: scale(0.9) translateY(-10px);
    color: #eb344c;
  }
`;

export default StyledFooter;
