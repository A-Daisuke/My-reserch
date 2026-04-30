const Benchmark = {
    run: function() {
        const VAR_1 = [
          11,
          51,
          85,
          14,
          31,
          96,
          42,
          63,
          [82, 35],
          70,
          45,
          70,
          [93],
          20,
          22,
          80,
          51,
          [24, 100],
          42,
          100,
          [95],
          59,
          74,
          76,
          8,
          [30, 54, 89],
          49,
          4,
          82,
          72,
          79,
          31,
          39,
          80,
          98,
          37,
          47,
          12,
          64,
          95,
          84,
        ];
        const VAR_2 = [];
        for (const VAR_5 of VAR_1) {
          if (typeof VAR_5 !== "object") {
            VAR_2.push(VAR_5);
          } else for (const VAR_6 of VAR_5) VAR_2.push(VAR_6);
        }
    }
};