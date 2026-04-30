const Benchmark = {
    run: function() {
        var VAR_1 = "xaaacbfthisisalongfuckinsgtrkenwlnsdhhkhsbzdcee";
        console.log(FUNCTION_1());
        function FUNCTION_1() {
          for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
            if (VAR_1.indexOf(VAR_1[VAR_5], VAR_5 + 1)) {
              return VAR_1[VAR_5];
            }
          }
        }
    }
};