const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_2 = [];
        var VAR_3 = 0;
        var VAR_4 = 100000;
        VAR_1 = "";
        for (; VAR_3 < VAR_4; VAR_3++) {
          VAR_1 = VAR_1.concat(VAR_3);
        }
    }
};