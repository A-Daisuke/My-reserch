const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[1000000] = 10;
        VAR_1.forEach(function () {}, VAR_1);
    }
};