const Benchmark = {
    run: function() {
        var VAR_1;
        VAR_1 = new Array(1001)
          .join(1)
          .split("")
          .map(function (VAR_2, VAR_3) {
            return VAR_3 + 1;
          });
    }
};