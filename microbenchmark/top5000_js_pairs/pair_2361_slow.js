const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = new Array(VAR_1);
        var VAR_3 = -1;
        while (VAR_3 < VAR_1) {
          VAR_2[++VAR_3] = VAR_3;
        }
    }
};