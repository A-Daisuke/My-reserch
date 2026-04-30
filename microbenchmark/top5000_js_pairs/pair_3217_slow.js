const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(new Array(100000)).map((VAR_2, VAR_3) => VAR_3);
        VAR_1.reduce((VAR_4, VAR_5) => Math.max(VAR_4, VAR_5), 0);
    }
};