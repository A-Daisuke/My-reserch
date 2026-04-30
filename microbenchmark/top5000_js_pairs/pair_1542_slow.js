const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        VAR_1 = function () {
          VAR_3 = [];
          for (VAR_2 = 0; VAR_2 <= 30000; VAR_2++) {
            VAR_3.push(VAR_2);
          }
          return VAR_3;
        }.apply(this);
    }
};