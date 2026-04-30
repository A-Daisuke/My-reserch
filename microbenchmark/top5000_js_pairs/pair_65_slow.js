const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        var VAR_4 = [];
        Array.prototype.FUNCTION_1 = function (VAR_5) {
          var VAR_6 = this;
          return [].concat.apply(
            [],
            VAR_6.map(function (VAR_7, VAR_8) {
              return VAR_3 % VAR_5 ? [] : [VAR_6.slice(VAR_3, VAR_3 + VAR_5)];
            }),
          );
        };
        var VAR_9 = VAR_2.FUNCTION_1(10000);
        for (var VAR_10 = 0; VAR_3 < VAR_9.length; VAR_3++) {
          Array.prototype.push.apply(VAR_4, VAR_9[VAR_3]);
        }
    }
};