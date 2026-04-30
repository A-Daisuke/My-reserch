const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_5) {
          while (VAR_1[VAR_1.length - 1] === VAR_5) {
            VAR_1 = VAR_1.substr(0, VAR_1.length - 1);
          }
          return VAR_1;
        }
        FUNCTION_1("klsjdflkasdjf lkjlakjsdfj,");
    }
};