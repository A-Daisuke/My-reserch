const Benchmark = {
    run: function() {
        var VAR_1 = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 16, 17, 18, 19, 20,
        ];
        var VAR_2 = VAR_1.length;
        for (var VAR_3 = 0; VAR_3 < 2; VAR_3++) {
          for (var VAR_4 = 0; VAR_4 < VAR_2; VAR_4++) {
            VAR_1.unshift(+VAR_1.splice(VAR_4, 1));
          }
        }
    }
};