const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = new Array(VAR_1);
        var VAR_4 = VAR_1;
        while (VAR_4 > 0) VAR_2[--VAR_4] = true;
    }
};