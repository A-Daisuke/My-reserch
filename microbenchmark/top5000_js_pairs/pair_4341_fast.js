const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          if (VAR_1[VAR_2].KEY_1 > 9500) VAR_3.push(VAR_1[VAR_2]);
        }
        for (var VAR_5 = 0; VAR_2 < VAR_3.length; VAR_2++) {
          VAR_3[VAR_2].KEY_1++;
          if (VAR_3[VAR_2].KEY_1 > 12000) {
            VAR_2--;
            VAR_3.splice(VAR_2, 1);
          }
        }
    }
};