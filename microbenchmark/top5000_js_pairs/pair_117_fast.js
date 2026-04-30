const Benchmark = {
    run: function() {
        var VAR_1 = new Array(200001);
        var VAR_2 = VAR_1.join(0);
        var VAR_3 = VAR_2.split("");
    }
};