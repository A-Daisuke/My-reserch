const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        VAR_1 = function () {
          VAR_3 = [];
          for (VAR_2 = 0; VAR_2 <= 10000; VAR_2++) {
            VAR_3.push(VAR_2);
          }
          return VAR_3;
        }.apply(this);
        for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
          var VAR_6 = VAR_1[VAR_5];
        }
    }
};