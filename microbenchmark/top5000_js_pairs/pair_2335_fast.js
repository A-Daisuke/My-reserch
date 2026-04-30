const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        while (VAR_1--)
          (function (VAR_4) {
            FUNCTION_1 = function () {
              return VAR_4;
            };
          })(VAR_1);
    }
};