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
          for (var VAR_7 = VAR_1[VAR_6].length - 1; VAR_7 >= 0; VAR_7--) {
            for (var VAR_8 = VAR_1[VAR_6][VAR_7].length - 1; VAR_8 >= 0; VAR_8--) {
              VAR_5.push(VAR_1[VAR_6][VAR_7][VAR_8]);
            }
          }
        }
    }
};