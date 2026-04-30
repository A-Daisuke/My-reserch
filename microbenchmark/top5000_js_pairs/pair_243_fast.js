const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.filter((VAR_4) => VAR_4 % 2 === 0).map((VAR_3) => VAR_3 + 1);
    }
};