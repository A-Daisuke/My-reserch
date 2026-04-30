const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        var VAR_2 = new Array(VAR_1);
        var VAR_3 = 0;
        for (var VAR_4 = 0; VAR_3 <= VAR_1; VAR_2[VAR_4++] = VAR_3++);
        VAR_5 = VAR_2;
        var VAR_6 = VAR_1 / 2;
        for (var VAR_7 = 0; VAR_4 < VAR_5.length; VAR_4++) {
          if (VAR_5[VAR_4] === VAR_6) {
            break;
          }
        }
    }
};