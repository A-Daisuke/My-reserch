const Benchmark = {
    run: function() {
        var VAR_1 = new Set(),
          VAR_2 = [];
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_4 < 50; VAR_4++) {
          var VAR_5 = "" + VAR_4 * 2;
          VAR_1.add(VAR_5);
          VAR_2.push(VAR_5);
        }
        for (var VAR_6 = 0; VAR_4 < 100; VAR_4++) {
          var VAR_7 = "" + VAR_4;
          if (VAR_2.indexOf(VAR_5) !== -1) {
            VAR_3++;
          }
        }
    }
};