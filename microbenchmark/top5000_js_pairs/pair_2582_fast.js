const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_5 = new Array(VAR_1);
        var VAR_6 = VAR_1 - 1;
        var VAR_7 = -1;
        while (VAR_7 < VAR_6) VAR_5[++VAR_7] = [];
    }
};