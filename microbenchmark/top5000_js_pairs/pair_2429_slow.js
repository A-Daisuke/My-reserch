const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        for (var VAR_2 = -1, VAR_3 = VAR_1.length; ++VAR_2 < VAR_3; ) {
          VAR_1[VAR_2];
        }
    }
};