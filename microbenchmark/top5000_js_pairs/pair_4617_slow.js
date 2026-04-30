const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [],
            VAR_3 = [];
          function FUNCTION_2() {
            var VAR_4, VAR_5;
            for (VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
              VAR_5 = VAR_1.splice(VAR_4, 1)[0];
              VAR_3.push(VAR_5);
              if (VAR_1.length == 0) {
                VAR_2.push(VAR_3.slice());
              }
              FUNCTION_2();
              VAR_1.splice(VAR_4, 0, VAR_5);
              VAR_3.pop();
            }
            return VAR_2;
          }
          return FUNCTION_2();
        }
        FUNCTION_1(["Paris", "Il de france", "France"]);
    }
};