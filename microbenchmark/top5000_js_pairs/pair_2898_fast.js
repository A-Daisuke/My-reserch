const Benchmark = {
    run: function() {
        var VAR_9 = [],
          VAR_10 = [];
        function FUNCTION_1(VAR_1) {
          var VAR_11,
            VAR_12,
            VAR_13 = VAR_1.split("");
          for (VAR_11 = 0; VAR_11 < VAR_13.VAR_14; VAR_11++) {
            VAR_12 = VAR_13.splice(VAR_11, 1);
            VAR_10.push(VAR_12);
            if (VAR_13.VAR_14 == 0) VAR_9[VAR_9.VAR_14] = VAR_10.join("");
            FUNCTION_1(VAR_13.join(""));
            VAR_13.splice(VAR_11, 0, VAR_12);
            VAR_10.pop();
          }
        }
        FUNCTION_1("aab");
    }
};