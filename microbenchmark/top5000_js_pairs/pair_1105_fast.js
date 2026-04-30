const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 99999; VAR_2++) {
          VAR_1.push(Math.random() * 10);
        }
        VAR_1.filter((VAR_4) => VAR_4 < 5).filter((VAR_3) => VAR_3 > 2);
    }
};