const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
        let VAR_4 = 0;
        const VAR_5 = VAR_1.length;
        for (let VAR_6 = 0; VAR_2 < VAR_5; ++VAR_2) {
          VAR_4 += VAR_1[VAR_2].length;
        }
        const VAR_7 = new Array(VAR_4);
        let VAR_8 = 0;
        for (let VAR_9 = 0; VAR_2 < VAR_5; ++VAR_2) {
          const VAR_10 = VAR_1[VAR_2];
          const VAR_11 = VAR_10.length;
          for (let VAR_12 = 0; VAR_12 < VAR_11; ++VAR_12) {
            VAR_7[VAR_8++] = VAR_10[VAR_12];
          }
        }
    }
};