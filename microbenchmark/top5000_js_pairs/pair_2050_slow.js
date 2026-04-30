const Benchmark = {
    run: function() {
        VAR_1 = new Array(100000);
        VAR_2 = 0;
        var VAR_3 = VAR_1.length;
        while (VAR_3 > 0) {
          VAR_1[--VAR_3] = VAR_3;
        }
        for (var VAR_4 of VAR_1) {
          VAR_5 = VAR_4;
        }
    }
};