const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1.length == 0) return [[]];
          var VAR_2 = [];
          for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            var VAR_4 = Object.create(VAR_1);
            var VAR_5 = VAR_4.splice(VAR_3, 1);
            var VAR_6 = FUNCTION_1(VAR_4);
            for (var VAR_7 = 0; VAR_7 < VAR_6.length; VAR_7++) {
              var VAR_8 = VAR_5.concat(VAR_6[VAR_7]);
              VAR_2.push(VAR_8);
            }
          }
          return VAR_2;
        }
        FUNCTION_1(["a", "a", "b"]);
    }
};