const Benchmark = {
    run: function() {
        Array.apply(null, { KEY_1: 1000 }).map(Number.call, Number);
    }
};