const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2;
        for (VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        function FUNCTION_1() {
          var VAR_3 = 0;
          VAR_1.forEach(
            function (VAR_4) {
              VAR_3 += VAR_4;
            }.bind(this),
          );
          return VAR_3;
        }
        FUNCTION_1();
    }
};