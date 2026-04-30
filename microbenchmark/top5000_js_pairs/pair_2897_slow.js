const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1000;
        while (VAR_2--) VAR_1.push(VAR_2);
        var VAR_3 = [],
          VAR_4 = VAR_1.length;
        for (var VAR_5 = 0; VAR_5 < VAR_4; VAR_5++) {
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) VAR_3.push(VAR_1[VAR_5] + VAR_1[VAR_6]);
        }
    }
};