const Benchmark = {
    run: function() {
        var VAR_1, VAR_3, VAR_4, VAR_5, VAR_6, VAR_7;
        VAR_1 = function () {
          VAR_7 = [];
          for (VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
            VAR_7.push(VAR_4);
          }
          return VAR_7;
        }.apply(this);
        VAR_1.forEach(function (VAR_8) {
          VAR_9 = VAR_3;
        });
    }
};