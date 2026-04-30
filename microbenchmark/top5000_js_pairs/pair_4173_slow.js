const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return (
            (VAR_1.length - 2 &&
              [].concat.apply(
                [],
                VAR_1.map(function (VAR_2, VAR_3, VAR_4) {
                  var VAR_5 = VAR_1.slice();
                  var VAR_6 = VAR_5.splice(VAR_3, 1);
                  return FUNCTION_1(VAR_5).map(function (VAR_7) {
                    return VAR_6.concat(VAR_2);
                  });
                }),
              )) || [VAR_1.slice(), VAR_1.slice().reverse()]
          );
        }
        FUNCTION_1([1, 2, 3, 4]);
    }
};