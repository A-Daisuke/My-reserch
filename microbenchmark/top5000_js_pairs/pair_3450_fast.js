const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: 1,
            KEY_2: 2,
          });
        }
        let VAR_3 = [];
        VAR_1.map((VAR_4) => VAR_3.push(VAR_4));
    }
};