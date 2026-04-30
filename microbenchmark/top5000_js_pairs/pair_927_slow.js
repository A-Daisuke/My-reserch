const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 500 };
        Array.from(Array(VAR_1.KEY_1), () => Array(VAR_1.KEY_1).fill(0));
    }
};