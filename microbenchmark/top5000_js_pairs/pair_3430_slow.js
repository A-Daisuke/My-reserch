const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === 1) return [1];
          else if (FUNCTION_2(VAR_1)) return [VAR_1].concat(FUNCTION_1(VAR_1 / 2));
          else return [VAR_1].concat(FUNCTION_1(3 * VAR_1 + 1));
        }
        function FUNCTION_2(VAR_2) {
          return VAR_2 % 2 == 0 ? true : false;
        }
        FUNCTION_1(1000001);
    }
};