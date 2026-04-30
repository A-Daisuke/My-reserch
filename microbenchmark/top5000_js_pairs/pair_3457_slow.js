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
        VAR_1.split("").forEach(function (VAR_3) {
          VAR_2 += Number(VAR_3);
        });
    }
};