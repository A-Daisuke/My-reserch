const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        var VAR_3 = VAR_2;
        while (VAR_3--) VAR_1.push(VAR_3);
        var VAR_5 = "",
          VAR_6 = VAR_2 - 1;
        for (var VAR_7 = VAR_2; VAR_7--; ) {
          VAR_5 += VAR_1[VAR_6 - VAR_7];
        }
    }
};