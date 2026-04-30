const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          var VAR_5 = VAR_4.split("");
          for (var VAR_6 = 0; VAR_6 < VAR_5.length; VAR_6++) {
            var VAR_7 = VAR_5[VAR_6];
            if (VAR_5.indexOf(VAR_5[VAR_6]) == VAR_5.lastIndexOf(VAR_5[VAR_6])) {
              return VAR_5[VAR_6];
            }
          }
          return "_";
        }
        FUNCTION_2(
          "ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof",
        );
    }
};