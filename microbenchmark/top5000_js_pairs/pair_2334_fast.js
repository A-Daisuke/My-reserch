const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(null).map((VAR_2, VAR_3) => VAR_3);
        VAR_1.filter((VAR_4) => VAR_4 === 10 || VAR_4 === 20 || VAR_4 === 30 || VAR_4 === 40);
    }
};