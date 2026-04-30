const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 100; VAR_1++) {
          (function (VAR_4) {
            VAR_2.push(function () {
              return VAR_4;
            });
          })(VAR_1);
        }
    }
};