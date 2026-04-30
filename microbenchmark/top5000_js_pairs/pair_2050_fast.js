const Benchmark = {
    run: function() {
        VAR_1 = new Array(100000);
        VAR_2 = 0;
        var VAR_3 = VAR_1.length;
        while (VAR_3 > 0) {
          VAR_1[--VAR_3] = VAR_3;
        }
        var VAR_6 = VAR_1.length;
        while (VAR_3 > 0) {
          VAR_7 = VAR_1[--VAR_3];
        }
    }
};