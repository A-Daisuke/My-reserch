const Benchmark = {
    run: function() {
        let VAR_1 = 10 ** 5;
        let VAR_2 = Array.from(Array(VAR_1).keys());
        let VAR_3 = [];
        VAR_4 = 0;
        for (let VAR_7 = 0; VAR_7 < VAR_1; VAR_7++) {
          VAR_8 = VAR_4 + VAR_2[VAR_7];
        }
    }
};