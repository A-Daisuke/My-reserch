const Benchmark = {
    run: function() {
        var VAR_1 = Array(10000);
        for (var VAR_2 = 0; VAR_2 < VAR_1.length; ++VAR_2) {
          if (VAR_1[VAR_2] / 0 != NaN) {
          } else {
            throw new TypeError();
          }
        }
    }
};