const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          switch (VAR_1) {
            case 1:
              return (VAR_2 % 4 == 0 && VAR_2 % 100) || VAR_2 % 400 == 0 ? 29 : 28;
            case 8:
            case 3:
            case 5:
            case 10:
              return 30;
            default:
              return 31;
          }
        }
        for (var VAR_4 = 1; VAR_4 <= 2000; VAR_4++) {
          for (var VAR_5 = 1; VAR_5 <= 12; VAR_5++) {
            var VAR_6 = FUNCTION_1(VAR_4, VAR_5 - 1);
          }
        }
    }
};