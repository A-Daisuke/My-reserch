const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_4 = new Array(VAR_1);
        var VAR_5 = VAR_1 - 1;
        var VAR_6 = -1;
        while (VAR_6 < VAR_5) VAR_4[++VAR_6] = [];
    }
};