const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(null).map((VAR_2, VAR_3) => VAR_3);
        VAR_1.filter((VAR_4) => [10, 20, 30, 40].some((VAR_5) => VAR_5 === VAR_4));
    }
};