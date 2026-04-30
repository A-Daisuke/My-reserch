const Benchmark = {
    run: function() {
        var VAR_1 = Array.apply(null, Array(1000)).map(String);
        var VAR_2 = VAR_1.slice();
    }
};