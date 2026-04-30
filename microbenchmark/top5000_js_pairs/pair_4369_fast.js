const Benchmark = {
    run: function() {
        var VAR_10 = [],
          VAR_11 = [];
        function FUNCTION_1(VAR_1) {
          var VAR_12, VAR_13;
          for (VAR_12 = 0; VAR_12 < VAR_1.length; VAR_12++) {
            VAR_13 = VAR_1.splice(VAR_12, 1)[0];
            VAR_11.push(VAR_13);
            if (VAR_1.length == 0) {
              VAR_10.push(VAR_11.slice());
            }
            FUNCTION_1(VAR_1);
            VAR_1.splice(VAR_12, 0, VAR_13);
            VAR_11.pop();
          }
          return VAR_10;
        }
        FUNCTION_1([1, 2, 3, 4]);
    }
};