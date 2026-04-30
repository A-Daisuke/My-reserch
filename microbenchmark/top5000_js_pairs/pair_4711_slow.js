const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1.concat(VAR_2).sort(function (VAR_3, VAR_4) {
            return VAR_1 - VAR_2;
          });
        }
        FUNCTION_1([2, 5, 6, 9], [1, 2, 3, 29]);
    }
};