const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000);
        var VAR_2 = 0,
          VAR_3 = VAR_1.length;
        for (; VAR_2 < VAR_3; VAR_2++) {
          VAR_1[VAR_2];
        }
    }
};