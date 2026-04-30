const Benchmark = {
    run: function() {
        var VAR_1 = "1.2.3.4.5.6.7.8.9.0.".repeat(1000);
        var VAR_2 = /\./g;
        VAR_1.replace(/\./g, ",");
    }
};