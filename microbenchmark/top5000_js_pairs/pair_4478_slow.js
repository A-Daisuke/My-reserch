const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_2 = VAR_1.length;
        while (VAR_2--) VAR_1[VAR_2];
    }
};