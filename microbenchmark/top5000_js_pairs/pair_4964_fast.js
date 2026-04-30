const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push(VAR_2.toString());
        var VAR_3 = -1,
          VAR_4 = VAR_1.length;
        var VAR_5 = 0;
        while (++VAR_2 < VAR_4) VAR_5 += parseInt(VAR_1[VAR_2], 10);
    }
};