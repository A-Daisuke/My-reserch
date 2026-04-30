const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3);
        }
        var VAR_4 = true;
        for (var VAR_5 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          if (VAR_1[VAR_3] !== VAR_2[VAR_3]) {
            VAR_4 = false;
            break;
          }
        }
        VAR_4;
    }
};