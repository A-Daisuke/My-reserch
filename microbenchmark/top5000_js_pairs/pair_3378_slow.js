const Benchmark = {
    run: function() {
        VAR_1 = "ABCDEF".repeat(100);
        VAR_1.match(/./g).length;
    }
};