const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_6, VAR_7) {
          VAR_8 = Math.floor((VAR_6 - 1) / VAR_7);
          return VAR_7 * VAR_8 * Math.floor((VAR_8 + 1) / 2);
        }
        function FUNCTION_2() {
          return (
            FUNCTION_1(1000, 3) +
            FUNCTION_1(1000, 5) -
            FUNCTION_1(1000, 15)
          );
        }
        FUNCTION_2();
    }
};