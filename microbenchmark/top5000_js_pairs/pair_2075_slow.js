const Benchmark = {
    run: function() {
        Array.apply(null, Array(10000)).map(() => undefined);
    }
};