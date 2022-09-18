import React, { useState } from "react";

type Props = {
  from: number;
  to: number;
};

const yearDataGenerator = ({ from, to }: Props) => {
  let data = [];
  for (from; from < to; from++) {
    data.push({
      _id: `id-000${from}`,
      name: from,
    });
  }
  return { data };
};

export default yearDataGenerator;
