const Benchmark = {
    run: function() {
        var VAR_1 = [0, 1, 2, 3, 4, 5, 6, 7];
        var VAR_4 = 0;
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 800; VAR_2++) {
          var VAR_3 = VAR_1[VAR_4];
          VAR_4 = (VAR_4 + 1) % VAR_1.length;
        }
    }
};