const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(Array(100000).keys());
        VAR_1.forEach((VAR_3) => VAR_3 + 1);
    }
};