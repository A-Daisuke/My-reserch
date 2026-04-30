const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = new Array(VAR_1);
        var VAR_3 = new Array(VAR_1);
        var VAR_4 = VAR_1;
        var VAR_5 = VAR_1;
        while (VAR_4 > 0) VAR_2[--VAR_4] = true;
        while (VAR_5 > 0) VAR_3[--VAR_5] = true;
    }
};