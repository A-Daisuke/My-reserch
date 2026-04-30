const Benchmark = {
    run: function() {
        var VAR_8 = [],
          VAR_9 = [];
        function FUNCTION_1(VAR_1) {
          var VAR_10, VAR_11;
          for (VAR_10 = 0; VAR_10 < VAR_1.length; VAR_10++) {
            VAR_11 = VAR_1.splice(VAR_10, 1)[0];
            VAR_9.push(VAR_11);
            if (VAR_1.length == 0) {
              VAR_8.push(VAR_9.slice());
            }
            FUNCTION_1(VAR_1);
            VAR_1.splice(VAR_10, 0, VAR_11);
            VAR_9.pop();
          }
          return VAR_8;
        }
        FUNCTION_1([1, 2, 3, 4]);
    }
};