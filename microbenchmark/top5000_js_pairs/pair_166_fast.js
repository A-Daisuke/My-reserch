const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          var VAR_4 = "";
          for (var VAR_5 = VAR_2; VAR_5 < VAR_3; VAR_5++) {
            VAR_4 = VAR_4.concat(VAR_5);
          }
          var VAR_7 = new RegExp(VAR_1, "g");
          var VAR_8 = VAR_4.length;
          var VAR_9 = VAR_4.replace(VAR_7, "").length;
          return VAR_8 - VAR_9;
        }
        var VAR_6 = FUNCTION_1(7, 1, 100000);
    }
};