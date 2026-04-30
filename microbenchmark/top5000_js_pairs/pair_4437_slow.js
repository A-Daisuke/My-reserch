const Benchmark = {
    run: function() {
        var VAR_1 = "The quick brown fox jumps over the lazy dog.";
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5 = "";
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_5 += VAR_3;
          }
          return VAR_5;
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};