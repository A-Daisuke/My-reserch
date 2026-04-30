const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        VAR_1.map((VAR_3) => VAR_3 * VAR_3)
          .map((VAR_4) => VAR_4 * 3)
          .reduce((VAR_5, VAR_6) => VAR_5 + VAR_6, 0);
    }
};