const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = VAR_1.length * VAR_2;
          while (VAR_1.length < VAR_3) {
            VAR_1 += VAR_1;
          }
          return VAR_1.slice(0, VAR_3);
        }
        var VAR_4 = FUNCTION_1("a", 100000);
    }
};