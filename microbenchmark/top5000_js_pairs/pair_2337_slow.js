const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3, VAR_4, VAR_5, VAR_6;
        VAR_1 = function () {
          VAR_6 = [];
          for (VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            VAR_6.push(VAR_3);
          }
          return VAR_6;
        }.apply(this);
        VAR_1.forEach(function (VAR_7) {
          VAR_8 = VAR_2;
        });
    }
};