const Benchmark = {
    run: function() {
        const VAR_1 = Array(100000).fill(1);
        const VAR_2 = VAR_1.filter((VAR_3) => VAR_3 % 2);
    }
};