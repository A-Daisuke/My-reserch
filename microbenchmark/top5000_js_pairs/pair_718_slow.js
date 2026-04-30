const Benchmark = {
    run: function() {
        VAR_1 = Array(100000)
          .fill()
          .map(function (VAR_2) {
            return VAR_2 + 1;
          });
    }
};