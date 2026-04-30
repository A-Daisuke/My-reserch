const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[1000000] = true;
        VAR_1[10000] = true;
        VAR_1[500] = true;
        var VAR_2 = 0;
        VAR_2 = 0;
        VAR_1.forEach(function (VAR_3) {
          VAR_2++;
        });
    }
};