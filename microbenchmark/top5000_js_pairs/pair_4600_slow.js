const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghijklmnopqrstuvwxyz";
        var VAR_2 = "";
        for (var VAR_3 = 0, VAR_4 = 100; VAR_3 < VAR_4; ++VAR_3) {
          VAR_2 += VAR_1[VAR_3 % VAR_3.length];
        }
        VAR_2 = VAR_2.substr(2, 5);
    }
};