const Benchmark = {
    run: function() {
        var VAR_9 = [],
          VAR_10 = [];
        function FUNCTION_1(VAR_1) {
          var VAR_11, VAR_12;
          for (VAR_11 = 0; VAR_11 < VAR_1.length; VAR_11++) {
            VAR_12 = VAR_1.splice(VAR_11, 1)[0];
            VAR_10.push(VAR_12);
            if (VAR_1.length == 0) {
              VAR_9.push(VAR_10.slice());
            }
            FUNCTION_1(VAR_1);
            VAR_1.splice(VAR_11, 0, VAR_12);
            VAR_10.pop();
          }
          return VAR_9;
        }
        FUNCTION_1("aab".split(""));
    }
};