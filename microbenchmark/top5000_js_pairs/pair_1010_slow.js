const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2 % 100);
        }
        var VAR_3 = [3, 25, 78];
        var VAR_4;
        for (var VAR_5 = 0; VAR_5 < VAR_3.length - 1; VAR_5++) {
          while ((VAR_4 = VAR_1.indexOf(VAR_3[VAR_5])) !== -1) {
            VAR_1.splice(VAR_4, 1);
          }
        }
    }
};