const Benchmark = {
    run: function() {
        Array.apply(null, Array(1000))
          .map(function (VAR_1, VAR_2) {
            return VAR_2;
          })
          .filter(function (VAR_3) {
            return !(VAR_3 % 3) || !(VAR_3 % 5);
          })
          .reduce(function (VAR_4, VAR_5) {
            return VAR_4 + VAR_5;
          }, 0);
    }
};