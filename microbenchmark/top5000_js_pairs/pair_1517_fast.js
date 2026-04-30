const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_5, VAR_3, VAR_6, VAR_7, VAR_4;
        VAR_1 = function () {
          VAR_4 = [];
          for (VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            VAR_4.push(VAR_3);
          }
          return VAR_4;
        }.apply(this);
        VAR_2 = null;
        for (VAR_6 = 0, VAR_7 = VAR_1.length; VAR_6 < VAR_7; VAR_6++) {
          VAR_5 = VAR_1[VAR_6];
          VAR_2 = VAR_5;
        }
    }
};