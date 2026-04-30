const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        for (var VAR_2 = VAR_1.length; VAR_2--; VAR_2) VAR_1[VAR_2];
    }
};