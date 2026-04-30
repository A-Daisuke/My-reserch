const Benchmark = {
    run: function() {
        var VAR_1 = [
          ...Array.from(Array(1000).keys()),
          ...Array.from(Array(1000).keys()),
        ];
        function FUNCTION_1(VAR_2) {
          return [...new Set(VAR_2)];
        }
        FUNCTION_1(VAR_1);
    }
};