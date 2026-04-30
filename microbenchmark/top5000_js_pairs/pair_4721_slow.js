const Benchmark = {
    run: function() {
        var VAR_1 = [
          1,
          2,
          3,
          [4, 5, 6],
          1,
          3,
          5,
          6,
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          2,
          3,
          4,
          5,
          6,
        ];
        var VAR_2 = [];
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
          VAR_2 = VAR_2.concat(VAR_1[VAR_3]);
        }
        var VAR_5 = VAR_2;
    }
};