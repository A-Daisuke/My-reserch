const Benchmark = {
    run: function() {
        var VAR_4 = 0,
          VAR_5 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_5[VAR_4++] = VAR_2;
        }
        var VAR_6 = VAR_5.reverse().join("");
    }
};