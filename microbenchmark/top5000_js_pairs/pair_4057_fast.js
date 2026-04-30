const Benchmark = {
    run: function() {
        let VAR_1 = [];
        let VAR_2 = [];
        for (let VAR_3 = 0; VAR_3 < 100; ++VAR_3) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3);
        }
        let VAR_4 = 0;
        for (let VAR_11 = 0; VAR_11 < VAR_1.length; ++VAR_11) {
          for (let VAR_12 = 0; VAR_12 < VAR_2.length; ++VAR_12) {
            VAR_4 += VAR_1[VAR_11] + VAR_2[VAR_12];
          }
        }
    }
};