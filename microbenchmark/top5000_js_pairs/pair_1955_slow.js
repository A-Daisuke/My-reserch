const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = -100; VAR_2 < 100; VAR_2++) {
          for (var VAR_3 = -100; VAR_3 <= 100; VAR_3++) {
            if (VAR_3 === 0) {
              continue;
            }
            VAR_1.push((VAR_2 - (VAR_2 % VAR_3)) / VAR_3);
          }
        }
    }
};