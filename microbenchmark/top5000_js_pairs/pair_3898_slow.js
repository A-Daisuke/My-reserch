const Benchmark = {
    run: function() {
        Error.VAR_1 = 10;
        var VAR_2 = new Error();
        VAR_2.stack;
    }
};