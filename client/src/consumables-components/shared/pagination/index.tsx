import React from "react";

type Props = {
  data: any[];
  page: number;
  handleClickPreviousPage: () => void;
  handleClickNextPage: () => void;
};

const PaginationComponent: React.FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <button
        disabled={props.page === 1 ? true : false}
        style={{ padding: "10px", fontSize: "16px" }}
        onClick={props.handleClickPreviousPage}
      >
        Prev
      </button>
      <button
        disabled={props.data?.length! < 5 ? true : false}
        style={{ padding: "10px", fontSize: "16px" }}
        onClick={props.handleClickNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
