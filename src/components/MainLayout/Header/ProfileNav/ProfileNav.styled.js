import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const ProfileLink = styled(Link)`
  font-family: e-Ukraine;
  font-weight: 500;
  font-size: 16px;
  color: #000;
`;

export const LoginBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: e-Ukraine;
  font-weight: 400;
  color: #000;
  font-size: 14px;
  line-height: normal;

  min-width: 116px;

  background-color: #fff;
  border: 3px solid #000;
  border-radius: 20px;
  padding: 8px 16px;

  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
