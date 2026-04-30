const Benchmark = {
    run: function() {
        const VAR_1 = 1000;
        Array.apply(null, Array(VAR_1)).map(() => 0);
    }
};