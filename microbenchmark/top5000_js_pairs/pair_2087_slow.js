const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [[]];
          for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            while (VAR_2[VAR_2.length - 1].length == VAR_3) {
              var VAR_4 = VAR_2.pop();
              for (var VAR_5 = 0; VAR_5 <= VAR_4.length; VAR_5++) {
                var VAR_6 = VAR_4.slice();
                VAR_6.splice(VAR_5, 0, VAR_1[VAR_3]);
                VAR_2.unshift(VAR_6);
              }
            }
          }
          return VAR_2;
        }
        FUNCTION_1(["a", "b", "c", "d", "e", "f"]);
    }
};