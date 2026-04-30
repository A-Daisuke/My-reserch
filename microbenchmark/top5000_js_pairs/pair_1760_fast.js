const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_2) {
          var VAR_4;
          switch (VAR_2.length) {
            case 4:
              VAR_4 = "0" + VAR_2;
              break;
            case 3:
              VAR_4 = "00" + VAR_2;
              break;
            case 2:
              VAR_4 = "000" + VAR_2;
              break;
            case 1:
              VAR_4 = "0000" + VAR_2;
              break;
            default:
              break;
          }
          return VAR_4;
        }
        for (var VAR_3 = 0; VAR_3 < 9999; VAR_3++) {
          FUNCTION_1(VAR_3);
        }
    }
};