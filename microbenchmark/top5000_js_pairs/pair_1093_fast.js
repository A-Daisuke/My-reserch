const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
        let VAR_5 = 0;
        const VAR_6 = VAR_1.length;
        for (let VAR_7 = 0; VAR_2 < VAR_6; ++VAR_2) {
          VAR_5 += VAR_1[VAR_2].length;
        }
        const VAR_8 = new Array(VAR_5);
        let VAR_9 = 0;
        for (let VAR_10 = 0; VAR_2 < VAR_6; ++VAR_2) {
          const VAR_11 = VAR_1[VAR_2];
          const VAR_12 = VAR_11.length;
          for (let VAR_13 = 0; VAR_13 < VAR_12; ++VAR_13) {
            VAR_8[VAR_9++] = VAR_11[VAR_13];
          }
        }
    }
};