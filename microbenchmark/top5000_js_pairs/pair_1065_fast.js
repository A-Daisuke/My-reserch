const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).join("0").split("");
        var VAR_2 = 0;
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++) {
          VAR_2++;
        }
    }
};