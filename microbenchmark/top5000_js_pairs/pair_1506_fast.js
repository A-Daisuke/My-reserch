const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push("" + ((Math.random() * 100000) >> 0));
        }
        var VAR_4 = 0;
        var VAR_5 = VAR_2.length;
        var VAR_6;
        for (; VAR_4 < VAR_5; VAR_4++) {
          VAR_6 = Math.floor(VAR_2[VAR_4]);
        }
    }
};