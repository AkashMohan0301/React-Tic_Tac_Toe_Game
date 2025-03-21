export const WINNING_COMBINATIONS = [
    [
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 0, column: 2 },
    ],
    [
      { row: 1, column: 0 },
      { row: 1, column: 1 },
      { row: 1, column: 2 },
    ],
    [
      { row: 2, column: 0 },
      { row: 2, column: 1 },
      { row: 2, column: 2 },
    ],




    [
      { row: 0, column: 0 },
      { row: 1, column: 0 },
      { row: 2, column: 0 },
    ],
    [
      { row: 0, column: 1 },
      { row: 1, column: 1 },
      { row: 2, column: 1 },
    ],
    [
      { row: 0, column: 2 },
      { row: 1, column: 2 },
      { row: 2, column: 2 },
    ],




    [
      { row: 0, column: 0 },
      { row: 1, column: 1 },
      { row: 2, column: 2 },
    ],
    [
      { row: 0, column: 2 },
      { row: 1, column: 1 },
      { row: 2, column: 0 },
    ],
  ];

 for (const combination of WINNING_COMBINATIONS){
  console.log(combination[0].row,combination[0].column)
 }
  