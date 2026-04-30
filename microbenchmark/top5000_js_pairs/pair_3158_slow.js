const Benchmark = {
    run: function() {
        var VAR_1 = Array(1000)
          .join(",")
          .split(",")
          .map(function (VAR_2, VAR_3) {
            return VAR_3;
          });
    }
};