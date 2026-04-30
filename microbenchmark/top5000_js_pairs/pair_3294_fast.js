const Benchmark = {
    run: function() {
        var VAR_1 = "asdf";
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_7 = "";
          var VAR_8 = VAR_3 + " ";
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_7 = VAR_7.concat(VAR_8);
          }
          return VAR_7;
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};