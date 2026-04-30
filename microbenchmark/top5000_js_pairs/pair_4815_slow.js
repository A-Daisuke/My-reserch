const Benchmark = {
    run: function() {
        var VAR_1 = "XxXxXxX";
        var VAR_2 = 1000;
        Array(VAR_2 + 1).join(VAR_1);
    }
};