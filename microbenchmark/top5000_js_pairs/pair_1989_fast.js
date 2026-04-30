const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_1[100000] = 1;
        var VAR_2 = {};
        VAR_2[100000] = 1;
        var VAR_6 = Object.keys(VAR_2);
        var VAR_3 = 0;
        for (var VAR_8 = 0; VAR_8 < VAR_1.length; VAR_8++) {
          if (VAR_1[VAR_8]) {
            VAR_3++;
          }
        }
    }
};