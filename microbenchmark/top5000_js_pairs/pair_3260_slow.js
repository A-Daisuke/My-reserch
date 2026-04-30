const Benchmark = {
    run: function() {
        var VAR_1 = "asdf";
        var VAR_2 = 1000;
        function FUNCTION_1(VAR_3, VAR_4) {
          var VAR_5 = [];
          for (var VAR_6 = 0; VAR_6 < VAR_4; VAR_6++) {
            VAR_5.push(VAR_3);
          }
          return VAR_5.join(" ");
        }
        FUNCTION_1(VAR_1, VAR_2);
    }
};