const Benchmark = {
    run: function() {
        var VAR_9 = (function () {
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
          for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
            for (var VAR_5 = 0; VAR_5 < VAR_2.length; VAR_5++) {
              VAR_3.push(VAR_2[VAR_5]);
            }
          }
          return function (VAR_10) {
            return VAR_3[VAR_4 - 1];
          };
        })();
        var VAR_6 = VAR_9(10);
        var VAR_7 = VAR_9(11);
        var VAR_8 = VAR_9(12);
    }
};