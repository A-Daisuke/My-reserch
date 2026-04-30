const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_2;
        while (VAR_1--)
          try {
            throw VAR_1;
          } catch (VAR_3) {
            VAR_2 = function () {
              return VAR_3;
            };
          }
    }
};