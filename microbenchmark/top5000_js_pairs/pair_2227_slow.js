const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_1 < 1000; VAR_1++) {
            for (var VAR_5 = 0; VAR_5 < VAR_2.length; VAR_5++) {
              VAR_3.push(VAR_2[VAR_5]);
            }
          }
          return VAR_3[VAR_1 - 1];
        };
        var VAR_6 = FUNCTION_1(10);
        var VAR_7 = FUNCTION_1(11);
        var VAR_8 = FUNCTION_1(12);
    }
};