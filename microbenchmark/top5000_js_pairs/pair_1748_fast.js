const Benchmark = {
    run: function() {
        var VAR_5 = [1, 2, 3, 4];
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_6 = 0;
        var VAR_7 = VAR_5.length;
        for (; VAR_2 < VAR_7; VAR_2++) {
          var VAR_8 = VAR_5[VAR_2];
        }
    }
};