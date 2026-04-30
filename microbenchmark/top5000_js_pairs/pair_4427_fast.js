const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          VAR_2 = VAR_1.length;
        for (var VAR_7 = 0; VAR_7 < VAR_2; VAR_7++) VAR_1[VAR_7] + 3735928559;
    }
};