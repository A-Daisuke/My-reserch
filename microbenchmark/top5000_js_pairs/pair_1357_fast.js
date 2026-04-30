const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 === "") {
            return false;
          }
          for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++) {
            var VAR_6 = VAR_1.charCodeAt(VAR_4);
            if (
              !(VAR_6 > 47 && VAR_6 < 58) &&
              !(VAR_6 > 64 && VAR_6 < 91) &&
              !(VAR_6 > 96 && VAR_6 < 123)
            ) {
              return false;
            }
          }
          return true;
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = Math.random().toString(36).substring(2);
          FUNCTION_1(VAR_3);
        }
    }
};