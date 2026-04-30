const Benchmark = {
    run: function() {
        var VAR_1 = new Array();
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        FUNCTION_1(VAR_1);
        function FUNCTION_1(VAR_3) {
          if (VAR_3.length > 0) {
            return false;
          }
          return true;
        }
    }
};