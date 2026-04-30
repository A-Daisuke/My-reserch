const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1.length === 2) {
            return [VAR_1.slice(), VAR_1.slice().reverse()];
          }
          return VAR_1
            .map(function (VAR_2, VAR_3, VAR_4) {
              var VAR_5 = VAR_4.slice();
              var VAR_6 = VAR_5.splice(VAR_3, 1);
              return FUNCTION_1(VAR_5).map(function (VAR_7) {
                return VAR_6.concat(VAR_7);
              });
            })
            .reduce(function (VAR_8, VAR_9) {
              return VAR_8.concat(VAR_9);
            });
        }
        FUNCTION_1([1, 2, 3, 4]);
    }
};