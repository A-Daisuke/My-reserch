const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = [];
          var VAR_3 = VAR_1.split(",");
          for (var VAR_4 in VAR_1) {
            if (VAR_1[VAR_4] != "") {
              VAR_2.push(VAR_1[VAR_4]);
            }
          }
          return VAR_2;
        }
        FUNCTION_1("klsjdflkasdjf lkjlakjsdfj,");
    }
};