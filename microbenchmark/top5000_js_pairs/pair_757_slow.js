const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [1, 2, 3],
          VAR_3 = [4, 5, 6],
          VAR_4 = 10000,
          VAR_5;
        for (VAR_5 = 0; VAR_5 < VAR_4; VAR_5++)
          VAR_1.concat(VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3, VAR_2, VAR_3);
    }
};