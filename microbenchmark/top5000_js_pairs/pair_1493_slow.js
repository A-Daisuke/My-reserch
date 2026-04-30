const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.splice(VAR_3, 0, VAR_3);
        }
    }
};