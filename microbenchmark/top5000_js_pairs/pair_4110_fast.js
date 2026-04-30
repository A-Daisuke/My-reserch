const Benchmark = {
    run: function() {
        var VAR_1 = [1, 10, 100, 1000, 10000];
        var VAR_4 = VAR_1.length;
        for (var VAR_5 = 0; VAR_5 < VAR_4; VAR_5++) {
          for (var VAR_3 = -1 * VAR_1[VAR_5]; VAR_3 <= VAR_1[VAR_3]; VAR_3++);
        }
    }
};