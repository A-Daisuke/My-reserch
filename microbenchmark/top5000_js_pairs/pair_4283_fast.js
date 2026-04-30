const Benchmark = {
    run: function() {
        VAR_1 = String(new Array(26))
          .split(",")
          .map(function (VAR_2, VAR_3) {
            return String.fromCharCode(97 + VAR_3);
          });
        var VAR_4 = VAR_1;
        var VAR_5 = VAR_4.map(function (VAR_8, VAR_9) {
          return VAR_9;
        });
    }
};