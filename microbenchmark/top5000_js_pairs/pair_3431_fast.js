const Benchmark = {
    run: function() {
        const VAR_1 = Array(100).join(Math.random()).split(".");
        const VAR_6 = VAR_1.map((VAR_8) => 2 * VAR_8);
    }
};