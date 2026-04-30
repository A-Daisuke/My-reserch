const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(1);
        const VAR_2 = VAR_1.map((VAR_5, VAR_6) => VAR_6);
    }
};