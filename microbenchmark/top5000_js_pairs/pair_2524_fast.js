const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_4 = new Array(VAR_1);
        var VAR_5 = -1;
        var VAR_6 = VAR_1 - 8 - (VAR_1 % 8);
        var VAR_7 = VAR_1 - 1;
        while (VAR_5 < VAR_6) {
          VAR_4[VAR_5 + 1] = [];
          VAR_4[VAR_5 + 2] = [];
          VAR_4[VAR_5 + 3] = [];
          VAR_4[VAR_5 + 4] = [];
          VAR_4[VAR_5 + 5] = [];
          VAR_4[VAR_5 + 6] = [];
          VAR_4[VAR_5 + 7] = [];
          VAR_4[(VAR_5 += 8)] = [];
        }
        while (VAR_5 < VAR_7) VAR_4[++VAR_5] = [];
    }
};