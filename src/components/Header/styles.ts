import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  .selected {
    border-bottom: 2px solid #89bd22;
  }

  background: #3d3d3d;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({size}) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 40px;

        img {
          height: 24px;
          width: 24px;
          margin-right: 12px;
        }
        &:hover {
          border-bottom: 2px solid #89bd22;
        }
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        align-items: center;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
