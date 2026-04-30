const Benchmark = {
    run: function() {
        var VAR_4 = "abcdefghijklmnopqrstuvwxyz";
        var VAR_5 = [];
        for (var VAR_2 = 0, VAR_3 = 100; VAR_2 < VAR_3; ++VAR_2) {
          VAR_5.push(VAR_4[VAR_2 % VAR_2.length]);
        }
        VAR_5 = VAR_5.join("").substr(2, 5);
    }
};