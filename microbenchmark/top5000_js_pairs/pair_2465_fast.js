const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2);
        VAR_1.reduce((VAR_5, VAR_6) => VAR_5 + 3 * VAR_6 ** 2, 0);
    }
};