const Benchmark = {
    run: function() {
        Array.apply(null, new Array(10000)).map(() => undefined);
    }
};