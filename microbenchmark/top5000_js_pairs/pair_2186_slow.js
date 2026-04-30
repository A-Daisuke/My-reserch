const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 == 1 || VAR_1 == 2) return 1;
          var VAR_2 = 1,
            VAR_3 = 1;
          var VAR_4 = [];
          for (var VAR_5 = 3; VAR_5 <= VAR_1; VAR_5++) {
            var VAR_6 = VAR_2;
            VAR_2 = VAR_3;
            VAR_3 = VAR_2 + VAR_6;
            VAR_4.push(VAR_3);
          }
          return VAR_4.join("\n");
        }
        FUNCTION_1(10000);
    }
};