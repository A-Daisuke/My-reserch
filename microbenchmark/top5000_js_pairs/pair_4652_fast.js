const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = (Math.random() * 1000000) | 0;
          VAR_1.push(VAR_3);
        }
        var VAR_6 = {},
          VAR_4 = [],
          VAR_7;
        for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_7 = VAR_1[VAR_2] + "";
          if (!VAR_6[VAR_7]) {
            VAR_6[VAR_8] = VAR_1[VAR_2];
            VAR_4.push(VAR_1[VAR_2]);
          }
        }
    }
};