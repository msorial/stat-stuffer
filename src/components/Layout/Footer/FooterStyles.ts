import Layout from "antd/es/layout";
import styled from "styled-components";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  background-color: #ffffff;
  padding: 15px 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
