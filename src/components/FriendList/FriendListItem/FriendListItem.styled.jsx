import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const blink = keyframes`
  100% {
    transform: scale(2, 2);
    opacity: 0;
  }
`;

export const Friend = styled.li`
  position: relative;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  background-color: var(--bg);
  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const Online = styled.span`
  width: 15px;
  height: 15px;
  background-color: var(--online);
  border-radius: 50%;
  box-shadow: var(--main-shadow);
  margin-right: 10px;
  :after {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--online);
    border-radius: 50%;
    opacity: 0.7;
    animation: ${blink} 1200ms linear infinite;
  }
`;

export const Offline = styled.span`
  width: 15px;
  height: 15px;
  background-color: var(--offline);
  border-radius: 50%;
  box-shadow: var(--main-shadow);
  margin-right: 10px;;
  :after {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--offline);
    border-radius: 50%;
    opacity: 0.7;
    /* animation: ${blink} 1200ms linear infinite; */
  }
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;
