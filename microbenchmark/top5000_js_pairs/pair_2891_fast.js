const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_4 = new Array(VAR_1);
        var VAR_5 = VAR_1;
        while (VAR_5 > 0) {
          VAR_4[--VAR_5] = VAR_5;
        }
    }
};