const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        var VAR_2 = new Array(VAR_1);
        var VAR_3 = VAR_1;
        for (; VAR_3--; ) {
          VAR_2[VAR_3];
        }
    }
};