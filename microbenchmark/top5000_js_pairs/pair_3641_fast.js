const Benchmark = {
    run: function() {
        var VAR_1 = "1234567890";
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        VAR_1 = VAR_1 + VAR_1;
        var VAR_2 = 0;
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          var VAR_5 = VAR_1[VAR_4];
          VAR_2 += Number(VAR_5);
        }
    }
};