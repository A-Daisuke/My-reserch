const Benchmark = {
    run: function() {
        var VAR_1 = [
          [[1]],
          [[2, 3], [3]],
          [[3, 4], [5], [6]],
          [[5]],
          [[6, 7, 8]],
          [
            [9, 10],
            [11, 12],
          ],
          [[9, 10]],
          [[8]],
        ];
        var VAR_5 = [];
        for (var VAR_6 = VAR_1.length - 1; VAR_6 >= 0; VAR_6--) {
          VAR_5 = VAR_5.concat.apply(VAR_5, VAR_1[VAR_6]);
        }
    }
};