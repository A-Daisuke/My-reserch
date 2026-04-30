const Benchmark = {
    run: function() {
        Error.VAR_1 = 10;
        Error.VAR_3 = 2;
        var VAR_2 = new Error();
    }
};