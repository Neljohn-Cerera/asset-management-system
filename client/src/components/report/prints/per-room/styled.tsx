import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media print {
    @page {
      /* size: portrait; */
      margin: 1cm 1.5cm 1cm 2cm;
    }

    display: block;
  }
`;
export const ContainerNames = styled.div`
  @media print {
    display: flex;
    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      flex: 1;
      margin-right: 10px;
      margin-top: 40px;
      margin-bottom: 40px;
      & hr {
        width: 100%;
        margin-bottom: 5px;
      }
      & p {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
`;
export const Header = styled.div`
  @media print {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
  }
`;
export const HeaderText = styled.p`
  @media print {
    font-size: 14px;
    & span {
      font-size: 16px;
    }
  }
`;

export const Table = styled.table`
  @media print {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
    /* page-break-after: always; */
  }
`;
export const TableTR = styled.tr`
  @media print {
    :nth-child(even) {
      background-color: #f2f2f2;
    }
    :hover {
      background-color: #ddd;
    }
  }
`;
export const TableTH = styled.th`
  @media print {
    border: 0.5px solid rgb(214, 209, 209);
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    :first-child {
      font-size: 14px;
      font-weight: 700;
      text-align: left;
    }
  }
`;
export const TableTD = styled.th`
  @media print {
    border: 0.5px solid rgb(214, 209, 209);
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
  }
`;
