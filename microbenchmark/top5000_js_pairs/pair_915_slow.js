const Benchmark = {
    run: function() {
        var VAR_1 = 100000,
          VAR_2 = new Array();
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(VAR_3);
        }
    }
};