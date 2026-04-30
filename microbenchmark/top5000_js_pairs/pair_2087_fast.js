const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            var VAR_7 = [];
            for (var VAR_8 = 1; VAR_8 < VAR_1.length; VAR_8++) {
              VAR_7.push(VAR_1[(VAR_3 + VAR_8) % VAR_1.length]);
            }
            for (var VAR_9 = 1; VAR_8 <= VAR_7.length; VAR_8++) {
              var VAR_10 = VAR_7.slice();
              VAR_10.splice(VAR_8, 0, VAR_1[VAR_3]);
              VAR_2.push(VAR_10);
            }
          }
          return VAR_2;
        }
        FUNCTION_1(["a", "b", "c", "d", "e", "f"]);
    }
};