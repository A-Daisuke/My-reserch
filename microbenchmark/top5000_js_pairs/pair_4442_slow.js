const Benchmark = {
    run: function() {
        var VAR_1 = [
          1, 2, 3, 4, 5, 1, 2, 3, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
          3, 4, 5, 1, 2, 3, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4,
          5, 1, 2, 3, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1,
          2, 3, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
        ];
        function FUNCTION_1(VAR_2) {
          return VAR_2 * this;
        }
        function FUNCTION_2(VAR_3) {
          return VAR_1.map(FUNCTION_1.bind(VAR_3));
        }
        FUNCTION_2(2);
    }
};