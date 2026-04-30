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
        for (var VAR_3 = 1; VAR_3 <= 2000; VAR_3++) {
          for (var VAR_4 = 1; VAR_4 <= 12; VAR_4++) {
            var VAR_5 = FUNCTION_1(VAR_3, VAR_4 - 1);
          }
        }
    }
};