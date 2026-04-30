const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2 += 1) {
          VAR_1.push({ KEY_1: (Math.random() * 1000) | 0 });
        }
        var VAR_3 = 0;
        VAR_3 = VAR_1
          .map(function (VAR_4) {
            return VAR_4.KEY_1 > 500;
          })
          .reduce(function (VAR_5, VAR_6, VAR_7, VAR_8) {
            if (VAR_8[VAR_7]) {
              return (VAR_5 += 1);
            } else {
              return VAR_5;
            }
          }, VAR_3);
        console.log(VAR_3);
    }
};