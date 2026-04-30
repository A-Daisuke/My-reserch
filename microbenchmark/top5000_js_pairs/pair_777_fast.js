const Benchmark = {
    run: function() {
        const VAR_1 = [];
        const VAR_2 = [];
        for (let VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push(Math.random());
          VAR_2.push(Math.random());
        }
        const VAR_4 = VAR_1.concat(VAR_2);
    }
};