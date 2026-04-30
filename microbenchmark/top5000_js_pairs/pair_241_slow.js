const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        VAR_1.splice(0, VAR_1.length);
    }
};