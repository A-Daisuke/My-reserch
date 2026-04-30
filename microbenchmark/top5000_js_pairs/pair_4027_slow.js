const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = "derp";
        Array(VAR_1 + 1).join(VAR_2);
    }
};