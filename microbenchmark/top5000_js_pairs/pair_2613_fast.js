const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_5 = new Array(VAR_1);
        var VAR_6 = -1;
        var VAR_3 = VAR_1 - 8 - (VAR_1 % 8);
        var VAR_7 = VAR_1 - 1;
        while (VAR_6 < VAR_3) {
          VAR_5[VAR_6 + 1] = [];
          VAR_5[VAR_6 + 2] = [];
          VAR_5[VAR_6 + 3] = [];
          VAR_5[VAR_6 + 4] = [];
          VAR_5[VAR_6 + 5] = [];
          VAR_5[VAR_6 + 6] = [];
          VAR_5[VAR_6 + 7] = [];
          VAR_5[(VAR_6 += 8)] = [];
        }
        while (VAR_6 < VAR_7) VAR_5[++VAR_6] = [];
    }
};