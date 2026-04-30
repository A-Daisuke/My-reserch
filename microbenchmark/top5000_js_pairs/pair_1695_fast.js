const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = {};
        VAR_1[9999] = true;
        VAR_2[9999] = true;
        var VAR_6,
          VAR_3 = VAR_1.length;
        for (VAR_6 in VAR_1) VAR_1[VAR_6];
    }
};