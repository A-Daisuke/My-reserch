const Benchmark = {
    run: function() {
        new Array(10000).fill(undefined).map(() => 1);
    }
};