const Benchmark = {
    run: function() {
        var VAR_1 = "xaaacbfthisisalongfuckinsgtrkenwlnsdhhkhsbzdcee";
        function FUNCTION_1(VAR_2) {
          for (var VAR_3 in VAR_1) {
            var VAR_4 = VAR_1.split(VAR_1[VAR_3]).length;
            if (VAR_4 == 2) {
              return VAR_1[VAR_3];
            }
          }
        }
        console.log(FUNCTION_1(VAR_1));
    }
};