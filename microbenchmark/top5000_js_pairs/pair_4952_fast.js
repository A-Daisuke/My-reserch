const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_2) {
          var VAR_5;
          switch (VAR_2) {
            case "1":
              VAR_5 = 2;
              break;
            case "2":
              VAR_5 = 1;
              break;
            default:
              VAR_5 = 0;
              break;
          }
          return VAR_5;
        }
        var VAR_3 = 10000;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_1(VAR_4 & 3);
        }
    }
};