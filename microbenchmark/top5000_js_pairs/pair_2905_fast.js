const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1.length <= 2
            ? [VAR_1.slice(), VAR_1.slice().reverse()]
            : [].concat.apply(
                [],
                VAR_1.map(function (VAR_9, VAR_10, VAR_11) {
                  var VAR_12 = VAR_1.slice();
                  var VAR_13 = VAR_12.splice(VAR_10, 1);
                  return FUNCTION_1(VAR_12).map(function (VAR_14) {
                    return VAR_9.concat(VAR_13);
                  });
                }),
              );
        }
        FUNCTION_1(["a", "a", "b"]);
    }
};