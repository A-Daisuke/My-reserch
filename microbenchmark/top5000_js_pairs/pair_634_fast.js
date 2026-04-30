const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[100000] = 1;
        var VAR_2 = {};
        VAR_2[100000] = 1;
        var VAR_6 = Object.keys(VAR_2);
        var VAR_3 = 0;
        for (var VAR_8 in VAR_2) {
          VAR_3 += 1;
        }
    }
};