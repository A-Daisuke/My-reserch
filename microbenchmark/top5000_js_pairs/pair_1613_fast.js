const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 1;
          for (var VAR_3 = 2; VAR_3 <= VAR_1; VAR_3++) VAR_2 = VAR_2 * VAR_3;
          return VAR_2;
        }
        console.log(FUNCTION_1(1000));
    }
};